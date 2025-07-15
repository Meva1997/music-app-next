import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ui/ErrorMessage";
import { LoginFormInputs } from "../types";

type LoginFormProps = {
  register: UseFormRegister<LoginFormInputs>;
  errors: FieldErrors<LoginFormInputs>; // Ajusta el tipo para que coincida con react-hook-form
};

export default function LoginForm({ register, errors }: LoginFormProps) {
  return (
    <>
      <section className="flex flex-col items-center space-x-2 space-y-3 ">
        <div className="flex items-center space-x-2 ">
          <MdEmail className="text-2xl" />
          <label htmlFor="email-input" className="text-xl font-black">
            Email
          </label>
        </div>
        <input
          type="email"
          id="email-input"
          className="h-10 px-2 text-black bg-white border rounded-lg w-72"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {<ErrorMessage message={errors.email?.message} />}
      </section>
      <section className="flex flex-col items-center space-x-2 space-y-3">
        <div className="flex items-center space-x-2">
          <FaLock className="text-2xl" />
          <label htmlFor="password-input" className="text-xl font-black">
            Password
          </label>
        </div>
        <input
          type="password"
          id="password-input"
          className="h-10 px-2 text-black bg-white border rounded-lg w-72"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {<ErrorMessage message={errors.password?.message} />}
      </section>
    </>
  );
}
