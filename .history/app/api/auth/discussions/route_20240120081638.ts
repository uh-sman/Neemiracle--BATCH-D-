
import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    if(request.method !== 'GET') {
        return NextResponse.json({message: 'Invalid method'} , {status: 405})
    }
    try {
        const body = request.body
        console.log('getDiscussion', body)
        return NextResponse.json({
            message: "successful"
        })
    } catch (error) {
        return NextResponse.json(error)
    }
}