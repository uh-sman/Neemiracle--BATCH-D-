import { NextResponse } from "next/server";
import { URL } from "url";
import prismadb from '@/lib/prismadb'
export async function POST(request: Request) {
    if(request.method !== 'POST') return NextResponse.json({message: 'invalid method'} , { status: 405 })
    
   try {
    const body = await request.json()
    const { title, description, reply } = body
    const url = new URL(request.url, 'http://localhost')
    const params = url.searchParams.getAll
    // const params = Object.fromEntries(url.searchParams.entries())
    // const {  } = params
    // const user = await prismadb.user.findUnique({
    //     where: {
    //         id: authorId
    //     }
    // })

    return NextResponse.json({
        title,
        description,
        params
    })

    // const discussion =  await prismadb.discussion.create({
    //     data: {
    //         title,
    //         description,
    //         Reply: reply,
    //         // authorId: user
    //     }
    // })
    // if (!discussion) {
    //     return NextResponse.json({
    //         message: 'error'
    //     }, {
    //         status: 400
    //     })
    // }
    // return NextResponse.json({
    //     id:discussion.id,
    //     title: discussion.title,
    //     description: discussion.description,
    // })
   } catch (error) {
    console.log(error)
    return NextResponse.json(error, {
        status: 500
    })
   }
}