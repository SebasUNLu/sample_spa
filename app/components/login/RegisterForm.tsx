"use client";

import { useAuth } from "@/app/context/AuthContext";
import UserDTO from "@/app/DTOs/user.dto";
import { firstUppercase } from "@/lib/customs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useForm,
  SubmitHandler,
  Path,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

interface ExpectedResponse {
  token: string;
  user: UserDTO;
}

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [remember, setRemember] = useState(false);
  const { login } = useAuth();

  // define el hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  // Función Submit
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Error en la solicitud");

      const result: ExpectedResponse = await response.json();

      // setea el usaurio en el context
      login(result.user, result.token, remember);

      router.push("/"); // ✅ Redirección corregida
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-2/3 flex flex-col gap-4 items-center justify-center bg-hero_background rounded-lg p-8">
      <h1 className="font-bold text-4xl">Registro</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        {/* register your input into the hook by invoking the "register" function 
           register takes the name of the param in the FormInputs type defined*/}
        <FormInput
          label="name"
          altLabel="Nombre"
          register={register}
          required
          placeholder="su nombre..."
          errors={errors}
        />

        <FormInput
          label="email"
          register={register}
          required
          placeholder="su_mail@gmail.com"
          errors={errors}
        />

        <FormInput
          label="password"
          register={register}
          required
          altLabel="Contraseña"
          errors={errors}
          type="password"
        />

        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">Mantener sesión iniciada</label>
        </div>

        <input
          type="submit"
          className=""
          value={loading ? "esperando" : "Registrarse"}
        />
      </form>
    </div>
  );
}

type InputProps = {
  label: Path<IFormInputs>;
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrors<IFormInputs>;
  required?: boolean;
  altLabel?: string;
  altError?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function FormInput({
  label,
  register,
  errors,
  altLabel,
  altError,
  required = false,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="font-bold">{firstUppercase(altLabel ?? label)}:</label>
      <input
        {...register(label, { required })}
        className="rounded-lg px-4"
        {...rest}
      />
      {errors[label]?.type === "required" && (
        <p role="alert" className="text-red-500 font-bold">
          {altError ?? `${firstUppercase(label)} es requerido`}
        </p>
      )}
    </div>
  );
}
