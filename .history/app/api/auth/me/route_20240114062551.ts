import { NextResponse } from "next/server"
import { cookies } from 'next//headers'
import { verify } from "jsonwebtoken"

export async function GET (request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get('OurSiteJWT')
    console.log('token', token)
    // return NextResponse.json('successful')
    // console.log('headers',request.)
    // if (!token) {
    //     return NextResponse.json({message: 'unauthorized'},{status: 401})
    // }

    // const { value } = token
    // const secret = process.env.JWT_SECRET || ''
    // try {
    //     verify(value, secret)
    //     const response  = {
    //         user: 'top secret user'
    //     }
    //     return new NextResponse(JSON.stringify(response), {status: 200})
    // } catch (error) {
    //     return NextResponse.json({message: 'something went wrong'},{status: 401})
    // }
}