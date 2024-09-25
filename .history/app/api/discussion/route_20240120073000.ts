import { NextResponse } from "next/server";
import { URL } from "url";
import prismadb from '@/lib/prismadb'
export async function POST(request: Request) {
    if(request.method !== 'POST') return NextResponse.json({message: 'invalid method'} , { status: 405 })
    
   try {
    const body = await request.json()
    const { title, description, reply, authorId, email } = body
    // console.log(body)
    // return NextResponse.json({
    //     message: 'discussion',
    //    body
    // })
    // const url = new URL(request.url, 'http://localhost')
    // const params = Object.fromEntries(url.searchParams.entries())
    // // const user = await prismadb.user.findUnique({
    // //     where: {
    // //         id: authorId
    // //     }
    // // })
    const user = await prismadb.user.findUnique({
        where:{
            email: email
        }
    })

    //   return NextResponse.json({
    //     message: 'discussion',
    //    user
    // })
    const discussion =  await prismadb.discussion.create({
        data: {
            title,
            description,
            // replies: reply,
            authorId: user?.id || ''
        }
    })
    if (!discussion) {
        return NextResponse.json({
            message: 'error'
        }, {
            status: 400
        })
    }
    return NextResponse.json({
        id:discussion.id,
        title: discussion.title,
        description: discussion.description,
    })
   } catch (error) {
    console.log(error)
    return NextResponse.json(error, {
        status: 500
    })
   }
}




export async function GET (request: Request) {
    try {
        if(request.method !== 'GET') {
            return NextResponse.json({message: 'Invalid method'} , {status: 405})
        }
        const body = await request.json()
        const { authorId } = body
        let email = 'uumar7000@gmail.com'
        let userId = '65a3b564501f8127fb1ebffb'
        console.log('email...', body)

        const user = await prismadb.user.findUnique({
            where: {
                email: email
            }
        })
        // const getDiscussion = await prismadb.discussion.findUnique({
        //     where: {
        //         authorId: user?.id 
        //     }
        // })

        // console.log('getDiscussion',getDiscussion)
        // return NextResponse.json(getDiscussion)
        console.log('getDiscussion', body)
        return NextResponse.json(body)
    } catch (error) {
        return NextResponse.json(error)
    }
}