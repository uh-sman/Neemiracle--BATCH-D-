import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
export async function GET () {
    try {
       const cookieStore = cookies()

       console.log(cookieStore)
        // return NextResponse.json('')
    } catch (error) {
        return NextResponse.json(error)
    }
}