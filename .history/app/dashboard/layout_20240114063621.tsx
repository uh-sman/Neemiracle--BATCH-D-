'use client';
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


interface UserResponse {
    user: string | null,
    error: AxiosError | null
  }
export default function DashboardLayout ({
    children
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    useEffect(() => {
        (async () => {
          const { user, error } = await getUser()
    
          if (error) {
            router.push('/auth')
            return
          }
          if (user) {
            router.push('/dashboard')
            console.log(user)
            return
          }
          if (!user) {
            router.push('/auth')
            console.log(user)
            return
          }
        })()
      },[router])
    return (
        <div>
            {children}
        </div>
    )
}

async function getUser(): Promise<UserResponse> {
    try {
      const { data } = await axios.get('/api/auth/me')
      return {
        user: data,
        error: null
      }
    } catch (e) {
      const error = e as AxiosError
  
      return {
        user: null,
        error,
      }
    }
  }
  
