"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginForm from "../../components/LoginForm";
import FooterRights from "../../components/FooterRights";
import ButtonSend from "../../ui/ButtonSend";
import LogInLoading from "../../ui/LogInLoading";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export type LoginFormInputs = {
  email: string;
  password: string;
};

export default function PageLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(); // Configura React Hook Form con los tipos del formulario

  const loginForm = async (data: LoginFormInputs) => {
    // console.log("Form Data:", formData); // Aquí puedes manejar el inicio de sesión, por ejemplo, enviando los datos a una API
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/"); // Redirige al usuario después de iniciar sesión
      }, 2000); // Espera un segundo antes de redirigir
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Wrong credentials",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center h-dvh animate-fade-in">
          <LogInLoading />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen space-y-10">
          <header className="flex flex-col items-center justify-center w-full my-20 space-y-3">
            <h1 className="text-3xl font-bold text-orange-400">
              Welcome to API Music
            </h1>
            <h2 className="text-2xl font-black text-green-400">Login</h2>
          </header>
          <form
            className="grid w-full mx-auto mt-20 space-y-10 place-items-center"
            onSubmit={handleSubmit(loginForm)} // Usa handleSubmit de React Hook Form
          >
            <LoginForm register={register} errors={errors} />
            <ButtonSend text="Log in" />
            <button
              type="button"
              className="w-1/3 h-8 px-2 font-bold text-white bg-red-500 cursor-pointer rounded-xl hover:bg-red-600"
              onClick={() => signIn("spotify", { callbackUrl: "/" })}
            >
              Log in with Spotify
            </button>
          </form>
          <article className="flex flex-col items-center justify-center mt-20 space-y-3">
            <p className="text-lg text-green-500">
              <Link
                href="/registration"
                className="hover:text-orange-400 hover:font-black active:text-orange-600"
              >
                First time? Register{" "}
                <span className="font-black text-orange-400">here</span>
              </Link>
            </p>
            <p className="text-lg text-green-500">Forgot Password?</p>
          </article>

          <FooterRights />
        </div>
      )}
    </>
  );
}
