import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { verify } from "jsonwebtoken"

export async function GET (request: Request) {
    // try {
       const cookieStore = cookies()
    //    console.log(cookieStore)
    //    return NextResponse.json({
    //      user: 'super user',
    //      verify
    //  })
       const token = cookieStore.get('OurSiteJWT')
       console.log('token',token)
       if (!token) {
           return NextResponse.json({message: 'not authenticated'},{status: 401})
        }
      
      else{
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
}