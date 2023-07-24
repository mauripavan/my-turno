import { LoginFormData } from "@component/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const useLogin = () => {
  const router = useRouter();
  type LoginForm = z.infer<typeof LoginFormData>;
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<LoginForm>({
    mode: "onTouched",
    resolver: zodResolver(LoginFormData),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin: SubmitHandler<LoginForm> = (data) => {
    router.push("pages/reservations");
  };

  return {
    router,
    errors,
    isDirty,
    isValid,
    register,
    handleSubmit,
    onLogin,
  };
};

export default useLogin;
