"use client";
import { useRouter } from "next/navigation";
import { Routes } from "@/config/routes";
import { setCookie } from "cookies-next";
import BaseTextBox from "@/ui/base/BaseTextBox";
import { TwitterLogin } from "@/types/twitter";

interface GenerateTwitterTokenStep3DetailProps {
  twitterLoginData: TwitterLogin | undefined;
}

export default function GenerateTwitterTokenStep2Detail({
  twitterLoginData,
}: GenerateTwitterTokenStep3DetailProps) {
  const router = useRouter();

  if (twitterLoginData == undefined) {
    router.push(Routes.public.TWITTER_STEP1);
  } else {
    setCookie("groupSelect", "");
    setCookie("oauthToken", "");
    setCookie("oauthTokenSecret", "");
    setCookie("twitterPin", "");
    setCookie("twitterUserName", "");
  }
  return (
    <div className="flex flex-col items-center">
      <BaseTextBox
        title={"Twitter Username"}
        className="flex flex-col justify-center w-[700px]"
        value={twitterLoginData!.screenName}
      />
      <BaseTextBox
        title={"Twitter UserId"}
        className="flex flex-col justify-center w-[700px] mt-4"
        value={twitterLoginData!.userId}
      />
      <BaseTextBox
        title={"Access Token"}
        className="flex flex-col justify-center w-[700px] mt-4"
        value={twitterLoginData!.accessToken}
      />
      <BaseTextBox
        title={"Access Token Secret"}
        className="flex flex-col justify-center w-[700px] mt-4"
        value={twitterLoginData!.accessSecret}
      />
    </div>
  );
}
