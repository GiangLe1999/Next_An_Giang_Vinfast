"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import AdminBtnWithLoading from "@/components/admin-btn-with-loading";
import { useRouter } from "next/navigation";
import { linkConstants } from "@/data/constants";
import FormInput from "../form-input";
import AuthSwitchBtns from "./auth-switch-btns";
import toast from "react-hot-toast";
import { registerNewAccount } from "@/actions/authentication.actions";

const schema = Yup.object({
  name: Yup.string().required("Vui lòng nhập tên"),
  email: Yup.string()
    .email("Email của bạn không hợp lệ")
    .required("Vui lòng nhập vào email"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập vào mật khẩu"),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { register, handleSubmit, formState, getValues, reset } = form;
  const { errors } = formState;

  const onSubmit = async () => {
    try {
      const { email, password, name } = getValues();
      setIsLoading(true);

      const success = await registerNewAccount({ email, password, name });

      if (success) {
        reset();
        toast.success("Tạo tài khoản thành công");
        router.replace(linkConstants.login);
      } else {
        toast.error("Tạo tài khoản thất bại");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Đã xảy ra lỗi không xác định"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid place-items-center admin-login-background">
      <div className="w-[400px] mx-auto min-h-[300px]">
        <AuthSwitchBtns isActive="signup" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-10 shadow-md px-4 pt-6 py-8 rounded-md bg-black/50"
        >
          <h1 className="font-extrabold text-2xl text-center mb-4 text-white">
            Tạo tài khoản
          </h1>
          <FormInput
            id="name"
            label="Tên đầy đủ"
            register={register("name")}
            errorMsg={errors.name?.message}
            placeholder="John Doe"
            labelCustomClasses="!text-white"
          />

          <FormInput
            id="email"
            label="Email"
            register={register("email")}
            errorMsg={errors.email?.message}
            placeholder="Example@gmail.com"
            labelCustomClasses="!text-white"
          />

          <div className="relative">
            <FormInput
              id="password"
              label="Mật khẩu"
              type={showPassword ? "text" : "password"}
              register={register("password")}
              errorMsg={errors.password?.message}
              placeholder="Ít nhất 6 ký tự"
              labelCustomClasses="!text-white"
            />
            <div
              className="absolute right-3 top-[34px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <span className="text-sm font-extrabold">Ẩn</span>
              ) : (
                <span className="text-sm font-extrabold">Hiện</span>
              )}
            </div>
          </div>

          <AdminBtnWithLoading
            content="ĐĂNG KÝ"
            isLoading={isLoading}
            customClasses="w-full"
            type="submit"
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
