
import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'
export async function GET (request: Request) {
    if(request.method !== 'GET') {
        return NextResponse.json({message: 'Invalid method'} , {status: 405})
    }
    try {
        const body = await request.json()
        console.log('getDiscussion', body)
        return NextResponse.json(body)
    } catch (error) {
        return NextResponse.json(error)
    }
}