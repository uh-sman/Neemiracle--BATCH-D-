import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { verify } from "jsonwebtoken"
export async function GET () {
    // try {
       const cookieStore = cookies()
       const token = cookieStore.get('OurSiteJWT')
       if (!token) {
        return NextResponse.json({message: 'not authenticated'},{status: 401})
       }
       try {
        const { value } = token
        const secret = process.env.JWT_SECRET || ''
        verify(value, secret)
        return NextResponse.json({
            user: 'super user'
        })
       } catch (error) {
        return NextResponse.json({message: 'not authenticated'},{status: 401})
       }
    //    console.log(cookieStore)
    //     return NextResponse.json('successful')
    // console.log(token)
    // } catch (error) {
    //     return NextResponse.json(error)
    // }
}