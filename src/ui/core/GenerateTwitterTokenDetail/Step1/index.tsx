"use client";
import BaseButton from "@/ui/base/BaseButton";
import BaseInput from "@/ui/base/BaseInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Routes } from "@/config/routes";
import { setCookie } from "cookies-next";

export default function GenerateTwitterTokenStep1Detail() {
  const router = useRouter();
  const step1FormSchema = z.object({
    inviteCode: z.string().min(1, { message: "required field" }),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof step1FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(step1FormSchema),
  });
  const onStep1Submit: SubmitHandler<z.infer<typeof step1FormSchema>> = (
    data
  ) => {
    const TwitterData = JSON.parse(process.env.NEXT_PUBLIC_TWITTER_DATA!);
    type JsonKeys = keyof typeof TwitterData;
    const keys: JsonKeys = data.inviteCode as JsonKeys;
    if (TwitterData[keys] != undefined) {
      setCookie("groupSelect", data.inviteCode);
      router.push(Routes.public.TWITTER_STEP2);
    } else {
      setCookie("groupSelect", "");
      setError("inviteCode", { message: "Invite Code invalid" });
    }
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onStep1Submit)}
    >
      <BaseInput
        {...register("inviteCode")}
        label={"Invite Code"}
        className="flex flex-col justify-center"
        error={errors.inviteCode && errors.inviteCode.message}
      />
      <BaseButton
        type="submit"
        disabled={isSubmitting}
        className="mt-8 h-14 w-60 text-xl font-bold font-geomGraphic bg-[#FCFC03] rounded-[10px] relative overflow-hidden text-black drop-shadow-[0_0_5px_rgba(252,252,3,1)]"
      >
        Submit
      </BaseButton>
    </form>
  );
}
