import { Platform } from "react-native";

export const COMMON_CONSTANT = 1;

export const PROVINCE_TYPE = [
  {
    title: "Chọn tỉnh thành*",
    type: "PROVINCE",
  },
  {
    title: "Chọn quận/ huyện*",
    type: "DISTRICT",
  },
  {
    title: "Chọn xã/ phường*",
    type: "WARD",
  },
];

export const ASYNC_STORAGE_KEY = {
  SearchHistory: "search_history",
  TemporaryAddress: "temporary_address",
};

export const KeyCacheHash = {
  HOME_CONFIG: "HOME_CONFIG",
};

export const unAuthorizedStatusCode = 401;
export const accessTokenExpiredStatusCode = 1003;
export const refreshTokenExpiredStatusCode = 1002;
export const userBlockStatusCode = 1004;
export const blockedLogin = 1005;

export const APPSTORE_LINK =
  "https://apps.apple.com/vn/app/aiwado-care-qu%C3%A9t-m%C3%A3-nh%E1%BA%ADn-qu%C3%A0/id6447529607";
export const GOOGLEPLAY_LINK = "market://details?id=com.aiwado.loyaltymobile";

export const isAndroidOs = Platform.OS === "android";
export const isiOS = Platform.OS === "ios";
