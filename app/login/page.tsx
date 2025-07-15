"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginForm from "../../components/LoginForm";
import FooterRights from "../../components/FooterRights";
import ButtonSend from "../../ui/ButtonSend";
import LogInLoading from "../../ui/LogInLoading";
import { useForm } from "react-hook-form";

export type LoginFormInputs = {
  email: string;
  password: string;
};

export default function PageLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>(); // Configura React Hook Form con los tipos del formulario

  const loginForm = () => {
    setIsLoading(true);
    // console.log("Form Data:", formData); // Aquí puedes manejar el inicio de sesión, por ejemplo, enviando los datos a una API
    setTimeout(() => {
      setIsLoading(false);
      router.push("/"); // Redirige al usuario después de iniciar sesión
    }, 800);
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
