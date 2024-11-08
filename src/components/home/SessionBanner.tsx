import React from "react";
import { SessionBannerStyle } from "@/styles/Home/SessionBannerStyled";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ImagePath } from "@/common/assets/constants/imagePath";
const SessionBanner = () => {
  const width = Dimensions.get("window").width;

  const listBanners = [
    // {
    //   id: "1",
    //   title: "banner 1",
    //   img: ImagePath.banner_intro_1,
    // },
    // {
    //   id: "2",
    //   title: "banner 2",
    //   img: ImagePath.banner_intro_2,
    // },
    {
      id: "3",
      title: "banner 3",
      img: ImagePath.guide_share_app,
    },
    {
      id: "4",
      title: "banner 4",
      img: ImagePath.homeBanner,
    },
    {
      id: "5",
      title: "banner 5",
      img: ImagePath.homeBanner1,
    },
    {
      id: "6",
      title: "banner 6",
      img: ImagePath.homeBanner2,
    },
  ];

  return (
    <View style={SessionBannerStyle.SessionBanner}>
      <Carousel
        loop
        width={width}
        style={SessionBannerStyle.CarouselStyle}
        autoPlay={true}
        data={listBanners}
        scrollAnimationDuration={3000}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
            }}
          >
            <Image
              style={SessionBannerStyle.CarouselImage}
              source={item.img}
            ></Image>
          </View>
        )}
      />
    </View>
  );
};

export default SessionBanner;
