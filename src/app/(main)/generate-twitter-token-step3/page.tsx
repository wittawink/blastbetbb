import GenerateTwitterTokenStep3Detail from "@/ui/core/GenerateTwitterTokenDetail/Step3";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { TwitterApi } from "twitter-api-v2";
import { TwitterLogin } from "@/types/twitter";

export default async function GenerateTwitterTokenStep3() {
  const groupSelect = getCookie("groupSelect", { cookies });
  const oauthToken = getCookie("oauthToken", { cookies });
  const oauthTokenSecret = getCookie("oauthTokenSecret", { cookies });
  const twitterPin = getCookie("twitterPin", { cookies });
  const TwitterData = JSON.parse(process.env.NEXT_PUBLIC_TWITTER_DATA!);
  type JsonKeys = keyof typeof TwitterData;
  const keys: JsonKeys = groupSelect as JsonKeys;
  const twitterData = TwitterData[keys];

  const loginTwitter = async (
    apiKey: string,
    apiKeySecret: string
  ): Promise<TwitterLogin> => {
    const client = new TwitterApi({
      appKey: apiKey,
      appSecret: apiKeySecret,
      accessToken: oauthToken as string,
      accessSecret: oauthTokenSecret as string,
    });

    const loginDataAPI = await client.login(twitterPin as string);
    const { ["client"]: removedKey, ...loginData } = loginDataAPI;
    console.log("Twitter Login: ", loginData);
    return loginData;
  };
  var twitterLoginData;
  if (twitterData != undefined) {
    console.log(twitterData);
    twitterLoginData = await loginTwitter(
      twitterData.ApiKey,
      twitterData.ApiKeySecret
    );
    console.log("Response from Twitter Login: ", twitterLoginData);
  }
  return (
    <GenerateTwitterTokenStep3Detail twitterLoginData={twitterLoginData} />
  );
}
