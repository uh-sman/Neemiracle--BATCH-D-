import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
export async function GET () {
    try {
       const cookieStore = cookies()
       const token = cookieStore.get('OurSiteJWT')
    //    console.log(cookieStore)
    //     return NextResponse.json('successful')
    console.log(token)
    } catch (error) {
        return NextResponse.json(error)
    }
}