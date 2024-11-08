// HomeScreen.tsx
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Main from ".";
import { homeScreenStyles } from "@/styles";
import SessionLogo from "../components/home/SessionLogo";
import SessionInfor from "@/components/home/SessionInfor";
import SessionCategory from "@/components/home/SessionCategory";
import SessionBanner from "@/components/home/SessionBanner";
import SessionAllProduct from "@/components/home/SessionAllProduct";
import SessionEvoucher from "@/components/home/SessionEVoucher";
import SessionPhoneCard from "@/components/home/SessionPhoneCard";

const HomeScreen: React.FC = () => {
  return (
    <Main>
      <ImageBackground
        source={require("../common/assets/images/aiwado-background/bg-aiwado@3x.png.png")}
        style={homeScreenStyles.backgroundImage}
      >
        <View style={homeScreenStyles.container}>
          {/* logo */}
          <SessionLogo />
          {/* some information */}
          <SessionInfor />
          {/* category */}
          <SessionCategory />
          {/* banner */}
          <SessionBanner />
          {/* all procuct */}
          <SessionAllProduct />
          {/* e-voucher */}
          <SessionEvoucher />
          {/* phone card */}
          <SessionPhoneCard />
        </View>
      </ImageBackground>
    </Main>
  );
};

export default HomeScreen;
