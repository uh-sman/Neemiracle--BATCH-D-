import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from "jsonwebtoken"
import cookie from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies['OurSiteJWT']

  if (!token) {
    return res.status(401).json({message: 'not authenticated'})
  }

  try {
    const secret = process.env.JWT_SECRET || ''
    verify(token, secret)
    return res.status(200).json({user: 'super user'})
  } catch (error) {
    return res.status(401).json({message: 'not authenticated'})
  }
}