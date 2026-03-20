const PAGE_ID = process.env.FACEBOOK_PAGE_ID!
const TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN!
const BASE = 'https://graph.facebook.com/v25.0'

export type FBPhoto = {
  id: string
  src: string
  width: number
  height: number
  isPortrait: boolean
}

export type FBVideo = {
  id: string
  thumbnail: string
  fbUrl: string
  description?: string
  length?: number
  source?: string
}

export type MediaItem = {
  id: string
  type: 'photo' | 'video'
  src: string
  fbUrl?: string
  videoSrc?: string
  isPortrait: boolean
}

async function fbFetch(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE}${path}`)
  url.searchParams.set('access_token', TOKEN)
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v)
  }
  const res = await fetch(url.toString(), { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error(`FB API error: ${res.status}`)
  return res.json()
}

export async function getPagePhotos(limit = 30, after?: string): Promise<{ photos: FBPhoto[]; nextCursor?: string }> {
  try {
    const params: Record<string, string> = {
      fields: 'images',
      limit: String(limit),
    }
    if (after) params.after = after

    const data = await fbFetch(`/${PAGE_ID}/photos`, params)
    const photos: FBPhoto[] = (data.data || []).map((photo: any) => {
      const images: any[] = photo.images || []
      const best = images.find((img: any) => img.width >= 600 && img.width <= 2048) || images[0]
      if (!best?.source) return null
      return {
        id: photo.id,
        src: best.source,
        width: best.width || 1080,
        height: best.height || 1080,
        isPortrait: (best.height || 1080) > (best.width || 1080) * 1.2,
      }
    }).filter(Boolean)

    return {
      photos,
      nextCursor: data.paging?.cursors?.after,
    }
  } catch (e) {
    console.error('getPagePhotos error:', e)
    return { photos: [] }
  }
}

export async function getPageVideos(limit = 12, after?: string): Promise<{ videos: FBVideo[]; nextCursor?: string }> {
  try {
    const params: Record<string, string> = {
      fields: 'picture,description,length,source',
      limit: String(limit),
    }
    if (after) params.after = after

    const data = await fbFetch(`/${PAGE_ID}/videos`, params)
    const videos: FBVideo[] = (data.data || []).map((video: any) => ({
      id: video.id,
      thumbnail: video.picture || '',
      fbUrl: `https://www.facebook.com/${PAGE_ID}/videos/${video.id}`,
      description: video.description || '',
      length: video.length,
      source: video.source || undefined,
    })).filter((v: FBVideo) => v.thumbnail)

    return {
      videos,
      nextCursor: data.paging?.cursors?.after,
    }
  } catch (e) {
    console.error('getPageVideos error:', e)
    return { videos: [] }
  }
}

// Seeded daily shuffle — same order for all users within a day
export function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed >>> 0
  for (let i = a.length - 1; i > 0; i--) {
    s = ((Math.imul(s, 1664525) + 1013904223) | 0) >>> 0
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getDailySeed(): number {
  return Math.floor(Date.now() / (1000 * 60 * 60 * 24))
}

// Build interleaved media list: 2 photos then 1 video, repeat
export function buildMediaList(photos: FBPhoto[], videos: FBVideo[], seed: number): MediaItem[] {
  const shuffledPhotos = seededShuffle(
    photos.map(p => ({ id: p.id, type: 'photo' as const, src: p.src, isPortrait: p.isPortrait })),
    seed
  )
  const shuffledVideos = seededShuffle(
    videos.map(v => ({ id: v.id, type: 'video' as const, src: v.thumbnail, fbUrl: v.fbUrl, videoSrc: v.source, isPortrait: false })),
    seed + 1
  )

  if (shuffledVideos.length === 0) return shuffledPhotos

  const result: MediaItem[] = []
  let vi = 0
  for (let i = 0; i < shuffledPhotos.length; i++) {
    result.push(shuffledPhotos[i])
    if ((i + 1) % 2 === 0) {
      result.push(shuffledVideos[vi % shuffledVideos.length])
      vi++
    }
  }
  return result
}
