import { NextResponse } from "next/server"
import { cookies } from 'next//headers'
import { verify } from "jsonwebtoken"
import { COOKIE_NAME } from "@/app"

export async function GET (request: Request) {
  if (request.method !== 'GET') {
    return NextResponse.json({message: "request not allowed"}, {status: 400})
  }

  try {
    const 
  } catch (error) {
    return NextResponse.json(error)
  }
}





  // const cookieStore = cookies()
    // const token = cookieStore.get(COOKIE_NAME)
    // // console.log('token', token)
    // // console.log('headers',request.headers)
    // // return NextResponse.json('successful')
    // // console.log('headers',request.)
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