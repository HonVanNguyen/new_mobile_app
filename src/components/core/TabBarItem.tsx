import { ImagePath } from "@/common/assets/constants/imagePath";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
const TabBarIterm: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const icons: { [key: string]: any } = {
    index: ImagePath.icHomeBar,
    gift: ImagePath.icGiftBar,
    scand: ImagePath.ic_scan,
    bell: ImagePath.icNotiBar,
    personal: ImagePath.icUserBar,
  };
  const iconsSelect: { [key: string]: any } = {
    index: ImagePath.icHomeBarSelected,
    gift: ImagePath.icGiftBarSelected,
    scand: ImagePath.ic_scan,
    bell: ImagePath.icNotiBarSelected,
    personal: ImagePath.icUserBarSelected,
  };
  return <></>;
};
export default TabBarIterm;
