import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';
import { sign } from "jsonwebtoken";
import cookie from 'cookie';
import { COOKIE_NAME } from "@/app";

export async function POST(request: Request) {
    try {
        if (request.method !== 'POST') {
            return NextResponse.json({ message: 'request not allowed' }, { status: 405 });
        }

        const body = await request.json();
        const { password, email } = body;
        const user = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        const secret = process.env.JWT_SECRET || '';
        const token = sign({
            id: user.id,
            email: user.email
        }, secret, {
            expiresIn: '1d'
        });

        const serialized = cookie.serialize(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400,
            path: '/auth',
            // domain: 'http://localhost:3000',
        });


        if (isPasswordValid) {
            return NextResponse.json({
                id: user.id,
                username: user.username,
                email: user.email
            }, { status: 200, headers: { 'Set-Cookie': serialized } });
        } else {
            return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}
