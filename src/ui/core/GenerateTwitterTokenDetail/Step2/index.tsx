"use client";
import BaseButton from "@/ui/base/BaseButton";
import BaseInput from "@/ui/base/BaseInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Routes } from "@/config/routes";
import { TwitterAuthLink } from "@/types/twitter";
import Link from "next/link";
import { setCookie } from "cookies-next";

interface GenerateTwitterTokenStep2DetailProps {
  twitterAuthLinkData: TwitterAuthLink | undefined;
}

export default function GenerateTwitterTokenStep2Detail({
  twitterAuthLinkData,
}: GenerateTwitterTokenStep2DetailProps) {
  const router = useRouter();

  if (twitterAuthLinkData == undefined) {
    router.push(Routes.public.TWITTER_STEP1);
  }
  const step2FormSchema = z.object({
    pin: z
      .string()
      .min(7, { message: "pin should be 7 digits number" })
      .max(7, { message: "pin should be 7 digits number" })
      .regex(/^[0-9]*$/, { message: "pin should be number only" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof step2FormSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(step2FormSchema),
  });
  const onStep2Submit: SubmitHandler<z.infer<typeof step2FormSchema>> = (
    data
  ) => {
    setCookie("oauthToken", twitterAuthLinkData!.oauth_token);
    setCookie("oauthTokenSecret", twitterAuthLinkData!.oauth_token_secret);
    setCookie("twitterPin", data.pin);
    router.push(Routes.public.TWITTER_STEP3);
  };
  return (
    <div className="flex flex-col items-center">
      <Link href={twitterAuthLinkData!.url} target="_blank">
        <BaseButton
          type="button"
          className="mt-8 h-14 w-[400px] text-xl font-bold font-geomGraphic bg-[#FCFC03] rounded-[10px] relative overflow-hidden text-black drop-shadow-[0_0_5px_rgba(252,252,3,1)]"
        >
          Click here to authen with Twitter
        </BaseButton>
      </Link>
      <form
        className="flex flex-col items-center mt-4"
        onSubmit={handleSubmit(onStep2Submit)}
      >
        <BaseInput
          {...register("pin")}
          label={"Pin"}
          className="flex flex-col justify-center w-[400px]"
          type="text"
          error={errors.pin && errors.pin.message}
        />
        <BaseButton
          type="submit"
          disabled={isSubmitting}
          className="mt-8 h-14 w-60 text-xl font-bold font-geomGraphic bg-[#FCFC03] rounded-[10px] relative overflow-hidden text-black drop-shadow-[0_0_5px_rgba(252,252,3,1)]"
        >
          Submit
        </BaseButton>
      </form>
    </div>
  );
}
