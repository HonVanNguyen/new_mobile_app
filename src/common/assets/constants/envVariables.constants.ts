import Config from "react-native-config";

export const envVariables = {
  envName: Config.ENV,
  baseUrl: Config.BASE_URL,
  googleWebClientId: Config.GOOGLE_WEB_CLIENT_ID,
};
