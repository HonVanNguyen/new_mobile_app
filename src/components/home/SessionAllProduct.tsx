import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SessionAProduct } from "@/styles/Home/SessionAProductStyled";
import { Link } from "expo-router";
import { ImagePath } from "@/common/assets/constants/imagePath";
import ProductItem from "../core/ProductItem";
import { ProductDetailInf } from "@/common/interface/ProductInterface";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from "@expo-google-fonts/balsamiq-sans";

const SessionAllProduct = () => {
  let [fontsLoaded, fontError] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const dataProduct: ProductDetailInf[] = [
    {
      id: "1",
      title: "Kazu Gain Gold +",
      price: "189700",
      xu: "288",
      img: ImagePath.p_001,
    },
    {
      id: "2",
      title: "Kazu Big Gold +",
      price: "412700",
      xu: "288",
      img: ImagePath.p_002,
    },
    {
      id: "3",
      title: "Kazu Product Demo",
      price: "234500",
      xu: "212",
      img: ImagePath.p_003,
    },
    {
      id: "4",
      title: "Kazu Demo Gold 2",
      price: "145700",
      xu: "232",
      img: ImagePath.p_004,
    },
    {
      id: "5",
      title: "Kazu Oscar",
      price: "827300",
      xu: "223",
      img: ImagePath.p_005,
    },
    {
      id: "6",
      title: "Kazu Demo Demo",
      price: "231200",
      xu: "288",
      img: ImagePath.p_006,
    },
    {
      id: "7",
      title: "Product for Demo",
      price: "325400",
      xu: "288",
      img: ImagePath.p_007,
    },
    {
      id: "8",
      title: "Kazu Kaine",
      price: "189700",
      xu: "288",
      img: ImagePath.p_008,
    },
    {
      id: "9",
      title: "Kazu Osaka",
      price: "234200",
      xu: "288",
      img: ImagePath.p_009,
    },
    {
      id: "10",
      title: "Kamezoko",
      price: "434500",
      xu: "342",
      img: ImagePath.p_010,
    },
  ];
  return (
    <View style={SessionAProduct.SessionAProduct}>
      <View style={SessionAProduct.TitleProduct}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "BalsamiqSans_700Bold",
            color: "#e92127d6",
          }}
        >
          Sản phẩm Aiwado
        </Text>
        <Link
          href={""}
          style={{
            fontSize: 14,
            fontFamily: "BalsamiqSans_400Regular",
            color: "#e92127d6",
          }}
        >
          Xem tất cả
          <Image
            style={{
              width: 8,
              height: 8,
            }}
            source={ImagePath.ic_arrow_right}
          ></Image>
        </Link>
      </View>
      <FlatList
        data={dataProduct}
        horizontal={true}
        contentContainerStyle={SessionAProduct.content}
        renderItem={({ item }) => <ProductItem data={item} />}
      />
    </View>
  );
};

export default SessionAllProduct;
