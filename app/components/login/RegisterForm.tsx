"use client";

import { firstUppercase } from "@/lib/customs";
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

type InputProps = {
  label: Path<IFormInputs>;
  register: UseFormRegister<IFormInputs>;
  required: boolean;
  placeholder?: string;
  errors: FieldErrors<IFormInputs>;
};

export default function RegisterForm() {
  // define el hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  // Función Submit
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
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
        <input placeholder="mi Nombre..." {...register("name")} />

        <FormInput
          label="email"
          register={register}
          required
          placeholder="su_mail@gmail.com"
          errors={errors}
        />

        <input
          placeholder="mi contraseña..."
          {...register("password", { required: true })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

function FormInput({
  label,
  register,
  required,
  placeholder = "",
  errors,
}: InputProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="font-bold">{firstUppercase(label)}</label>
      <input
        {...register(label, { required })}
        className="rounded-lg px-4"
        placeholder={placeholder}
      />
      {errors.password?.type === "required" && (
        <p role="alert" className="text-red-500 font-bold">{`${label} es requerido`}</p>
      )}
    </div>
  );
}
