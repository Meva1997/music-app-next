"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../../components/LoginForm";
import FooterRights from "../../components/footer/FooterRights";
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
            className="grid w-full mx-auto mt-5 space-y-10 place-items-center"
            onSubmit={handleSubmit(loginForm)} // Usa handleSubmit de React Hook Form
          >
            <LoginForm register={register} errors={errors} />
            <ButtonSend text="Log in" />
            <button
              type="button"
              className="max-w-xl h-auto px-2 py-1 font-bold text-white bg-red-500 cursor-pointer rounded-xl hover:bg-red-700"
              onClick={() => signIn("spotify", { callbackUrl: "/" })}
            >
              Log in with Spotify
            </button>
          </form>
          <article className="flex flex-col items-center justify-center mt-10 space-y-3 bg-gray-800 px-5 py-3 rounded-lg w-2/3 max-w-lg mx-auto">
            <p className="text-white">
              To Log In using a generic user, use these credentials:
            </p>
            <ul className="text-white list-disc list-inside">
              <li>
                <strong>Email:</strong> email@email.com
              </li>
              <li>
                <strong>Password:</strong> 123456
              </li>
            </ul>
            <span className="text-yellow-400 font-bold">
              Warning! You won&#39;t have a full experience using the generic
              user.
            </span>
          </article>

          <FooterRights />
        </div>
      )}
    </>
  );
}
