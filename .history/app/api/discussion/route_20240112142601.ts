import { NextRequest, NextResponse } from "next/server";

export default async function GET(request: Request) {
    if (request.method !== 'POST') {
        return NextResponse.json({message: 'invalid method'}, {status: 405})
    }
    const body = await request.json()
    const {title, description, reply} = body
    
    return NextResponse.json({ message: 'Hello from the discussion api', title, description, reply})
}