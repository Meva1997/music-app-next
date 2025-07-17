"use client";
import LoginForm from "../../components/LoginForm";
import { FaLock } from "react-icons/fa";
import ButtonSend from "../../ui/ButtonSend";
import Link from "next/link";
import FooterRights from "../../components/footer/FooterRights";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../ui/ErrorMessage";
import { LoginFormInputs } from "../../types";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default function PageRegistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>(); // Configura React Hook Form con los tipos del formulario

  const onSubmit = () => {
    // console.log("Registration Data:", data); // Aquí puedes manejar el registro, por ejemplo, enviando los datos a una API
    Swal.fire({
      title: "Registration Successful",
      text: "You have successfully registered!",
      icon: "success",
      confirmButtonText: "OK",
      theme: "dark",
      iconColor: "4CAF50 ", // Color verde para el icono de éxito
      confirmButtonColor: "#4CAF50", // Color verde para el botón de confirmación
    });
    setTimeout(() => {
      Swal.close();
      setTimeout(() => {
        redirect("/login");
      }, 1000);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="my-20 text-center">
        <h1 className="text-3xl font-bold text-orange-400">
          Registration form
        </h1>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-10"
      >
        <LoginForm register={register} errors={errors} />
        <section className="flex flex-col items-center space-x-2 space-y-3">
          <div className="flex items-center space-x-2">
            <FaLock className="text-2xl" />
            <label htmlFor="password-input" className="text-xl font-black">
              Confirm Password
            </label>
          </div>
          <input
            type="password"
            id="password-input"
            className="h-10 px-2 text-black bg-white border rounded-lg w-72"
            placeholder="Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {<ErrorMessage message={errors.confirmPassword?.message} />}
        </section>
        <ButtonSend text="Sign In" />
      </form>
      <article className="flex flex-col items-center justify-center my-20 space-y-3">
        <p className="text-lg text-green-500">
          <Link
            href={"/login"}
            className="hover:text-orange-400 hover:font-black active:text-orange-600"
          >
            Already a Member?{" "}
            <span className="font-black text-orange-400">Log In</span>
          </Link>
        </p>
      </article>
      <FooterRights />
    </div>
  );
}
