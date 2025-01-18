"use client";

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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function 
           register takes the name of the param in the FormInputs type defined*/}
      <input placeholder="mi Nombre..." {...register("name")} />
      <FormInput
        label="email"
        register={register}
        required
        placeholder="su_mail@gmail.com"
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
  );
}

function FormInput({
  label,
  register,
  required,
  placeholder = "",
}: InputProps) {
  return (
    <div>
      <label className="">{label}</label>
      <input
        {...register(label, { required })}
        className=""
        placeholder={placeholder}
      />
    </div>
  );
}
