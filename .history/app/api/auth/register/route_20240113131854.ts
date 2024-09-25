import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
import { sign } from "jsonwebtoken";
import  cookie from 'cookie';
export async function POST(request: Request) {
    try {
        if (request.method !== 'POST') {
            return NextResponse.json({message: 'request not allowed'}, {status: 405})
        }
        const body = await request.json()
        const { username, password, email } = body;
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return NextResponse.json({message: 'User already exits'},{status: 422})
        }
        
       else{ 
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prismadb.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword
            }
        })

        // const token =
        const secret = process.env.JWT_SECRET || ''
        const token = sign({
            id: user.id,
            username: user.username,
            email: user.email
        }, secret, {
            expiresIn: '1d'
        })
        const serialized = cookie.serialize('OurSiteJWT', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400,
            path: '/'
        })
        return NextResponse.json({ 
            id: user.id, 
            username: user.username, 
            email: user.email 
          }, {status: 201, headers:{'Set-Cookie': serialized}})
    }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}