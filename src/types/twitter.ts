export interface TwitterAuthLink {
  url: string;
  oauth_token: string;
  oauth_token_secret: string;
  oauth_callback_confirmed: string;
}

export interface TwitterLogin {
  accessToken: string;
  accessSecret: string;
  userId: string;
  screenName: string;
}
