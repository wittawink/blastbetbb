import GenerateTwitterTokenStep2Detail from "@/ui/core/GenerateTwitterTokenDetail/Step2";
import TwitterData from "@/assets/twitter/TwitterData.json";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { TwitterApi } from "twitter-api-v2";
import { TwitterAuthLink } from "@/types/twitter";

export default async function GenerateTwitterTokenStep2() {
  const groupSelect = getCookie("groupSelect", { cookies });
  type JsonKeys = keyof typeof TwitterData;
  const keys: JsonKeys = groupSelect as JsonKeys;
  const twitterData = TwitterData[keys];

  const requestTokenTwitter = async (
    apiKey: string,
    apiKeySecret: string
  ): Promise<TwitterAuthLink> => {
    console.log("Send API to twitter");
    const client = new TwitterApi({
      appKey: apiKey,
      appSecret: apiKeySecret,
    });
    const authLink = await client.generateAuthLink("oob");
    console.log("Twitter Auth Link: ", authLink);
    return authLink;
  };

  var twitterAuthLinkData;
  if (twitterData != undefined) {
    console.log(twitterData);
    twitterAuthLinkData = await requestTokenTwitter(
      twitterData.ApiKey,
      twitterData.ApiKeySecret
    );
    console.log("Response from Twitter: ", twitterAuthLinkData);
  }
  return (
    <GenerateTwitterTokenStep2Detail
      twitterAuthLinkData={twitterAuthLinkData}
    />
  );
}
