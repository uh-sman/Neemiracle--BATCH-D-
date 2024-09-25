import { NextResponse } from "next/server"
import { cookies } from 'next//headers'
import { verify } from "jsonwebtoken"

export async function GET (request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('OurSiteJWT')
    console.log('token', token)
    console.log('headers',request.credentials)
    if (!token) {
        return NextResponse.json({message: 'not authenticated'},{status: 401})
    }

    const { value } = token
    const secret = process.env.JWT_SECRET || ''
    try {
        verify(value, secret)
        return NextResponse.json({
            user: 'super user',
        })
    } catch (error) {
        return NextResponse.json({message: 'not authenticated'},{status: 401})
    }
}