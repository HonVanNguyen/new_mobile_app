import { View, Text, Image, Animated } from "react-native";
import React from "react";
import { ImagePath } from "@/common/assets/constants/imagePath";
import { SessionLogoStyle } from "@/styles/Home/SessionLogoStyled";

const SessionLogo = () => {
  return (
    <View style={SessionLogoStyle.SessionLogo}>
      <Image
        style={SessionLogoStyle.ImgBranch}
        source={ImagePath.imgBigLogo}
      ></Image>
      <Image
        style={SessionLogoStyle.ImgSearch}
        source={ImagePath.icSearchHeader}
      ></Image>
    </View>
  );
};

export default SessionLogo;
