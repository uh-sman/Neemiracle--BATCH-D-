"use client";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export const Author = (data: string) => {
console.log(data)
}
interface UserResponse {
  user: string | null,
  error: AxiosError | null
}
interface LoginResponse {
  response: string | [] | null
}
const AuthForm = () => {

  const router = useRouter();
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser()

      if (error) {
        router.push('/auth')
        return;
      }
     if (user) {
      router.push('/')
      return;
     }
    })()
  },[router])
  const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("SIGNUP");
  const params = useParams<{ tag: string; item: string }>();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const { username, password, email } = form;
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      toast.success("successful");
      router.push(`/`);
      Author(data)
      console.log(data);
    } catch (e) {
      toast.error(`${e}`)
      console.error("There was an error!", e);
      return e as AxiosError
    }
  };
  const handleLogin = async () => {
    const { email, password } = form;
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
        // callbackUrl: '/'
      });
      if (!response) {
        throw new Error(`HTTP error! status: ${response}`);
      }
      // const data = await response
      // console.log(data);
      else{
        toast.success('successful')
      // router.push('/')
      Author(response)
      console.log(response)
    }
    } catch (e) {
      console.error("There was an error!", e);
      return e as AxiosError;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formState === "LOGIN") {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const handleToggle = () => {
    setFormState((current) => current === 'LOGIN' ? 'SIGNUP' : 'LOGIN')
  } 
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {formState === "SIGNUP" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {formState === "SIGNUP" ? "Signup"  : "Sign In"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div onClick={handleToggle} className="flex justify-start cursor-pointer font-semibold text-blue-600 text-md mt-4 hover:underline">
            <span>
              {
                formState === 'SIGNUP' ? 'already have an account ? Login' : "don't have an account? signup"
              }
            </span>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;


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