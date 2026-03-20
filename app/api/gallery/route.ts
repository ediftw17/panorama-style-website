import { NextRequest, NextResponse } from 'next/server'
import { getPagePhotos, getPageVideos } from '@/lib/facebook'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const type = searchParams.get('type') || 'photos'
  const cursor = searchParams.get('cursor') || undefined
  const limit = parseInt(searchParams.get('limit') || '24')

  if (type === 'videos') {
    const result = await getPageVideos(limit, cursor)
    return NextResponse.json(result)
  }

  const result = await getPagePhotos(limit, cursor)
  return NextResponse.json(result)
}
