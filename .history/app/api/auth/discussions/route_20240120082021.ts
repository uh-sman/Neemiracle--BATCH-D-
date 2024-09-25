
import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    if(request.method !== 'GET') {
        return NextResponse.json({message: 'Invalid method'} , {status: 405})
    }
    try {
        const body = request.json()
        // console.log('getDiscussion', body)
        let email = 'uumar7000@gmail.com'
        return NextResponse.json({
            message: "successful",
            body
        })
    } catch (error) {
        return NextResponse.json(error)
    }
}