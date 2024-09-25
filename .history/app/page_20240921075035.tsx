"use client";
import Discussions from "./(components)/Discussion/Discussions";
import { useState, useEffect } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { useSession, SessionProvider } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { Author } from "./(components)/auth/page";
interface UserResponse {
  user: string | null;
  error: AxiosError | null;
}
function Home() {
  // const { data: session, status } = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (status === "loading") return; // Do nothing while loading
  //   if (!session) router.push("/auth");
  //   if (session) {
  //     router.push("/");
  //   }
  // }, [session, status, router]);
  // // console.log('sessions',session?.user?.email)
  // const user = session?.user;
  // // return  session ? (
  // //   <div>
  // //     {/* <Discussions user={session?.user?.email}/> */}
  //   </div>
  // ) : null
  return <div>{/* <Discussions user={session?.user?.email}/> */}</div>;
}

// async function getUser(): Promise<UserResponse> {
//   try {
//     const { data } = await axios.get('/api/auth/me')
//     return {
//       user: data,
//       error: null
//     }
//   } catch (e) {
//     const error = e as AxiosError

//     return {
//       user: null,
//       error,
//     }
//   }
// }

// useEffect(() => {
//   (async () => {
//     const { user, error } = await getUser()

//     if (error) {
//       router.push('/auth')
//       return
//     }
//     // return ;
//     if (user) {
//       router.push('/dashboard')
//       console.log(user)
//       return
//     }
//     if (!user) {
//       router.push('/auth')
//       console.log(user)
//       return
//     }
//   })()
// },[router])

export default function HomeProvider() {
  return (
    <Home />
    // <SessionProvider>
    //   <Home />
    // </SessionProvider>
  );
}
