import { ImageBackground } from "react-native";
import React from "react";
import { SessionProfileStyle } from "@/styles/Profile/SessionProfileStyled";
import {
  ImagePath,
  imageUserProfile,
} from "@/common/assets/constants/imagePath";
import { scale, verticalScale } from "react-native-size-matters";
import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
  View,
} from "native-base";
import { NativeBaseProvider } from "native-base";
import SelectMethodImagePicker from "@/components/SelectMethodImagePicker";
const Profile = () => {
  // fake
  const userProfile = {
    name: "John Doe",
    phoneNumber: "+1234567890",
    userPoint: {
      totalPoints: 1,
    },
    tierCode: 'Menber',
  };

  const handlePressChangeImage = () => {};
  return (
    <NativeBaseProvider>
      <View style={SessionProfileStyle.common}>
        <Box style={SessionProfileStyle.boxViewTop}>
          <ImageBackground
            
            source={ImagePath.backgroundAiwado}
            alt=""
            resizeMode="cover"
          >
            <Center style={SessionProfileStyle.ImageBackground_center}>
              <Image
                width={250}
                height={250}
                source={ImagePath.member} alt="" />
            </Center>
        <Center style={SessionProfileStyle.boxAvatarCenter}>
          <Stack
            style={SessionProfileStyle.StackAvatar}
            space={"8px"}
            pb={"26px"}
          >
            <Center
              style={SessionProfileStyle.StackCenter}
              bgColor={"red.200"}
              mt={"-35px"}
            >
              <Pressable
                _pressed={{ bgColor: "#E1E8FE" }}
                borderRadius={"100px"}
                onPress={handlePressChangeImage}
              >
                <Avatar
                  size={"70px"}
                  bgColor={"#FFF"}
                  source={ImagePath.default_avatar}
                >
                  avt
                  <Avatar.Badge
                    bg="#E1E8FE"
                    size={"25px"}
                    ml={"-10px"}
                    alignItems={"center"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Image
                      source={imageUserProfile.ADD_NEW_IMAGE_ICON}
                      alt=""
                    />
                  </Avatar.Badge>
                </Avatar>
              </Pressable>
            </Center>
            <Pressable
              _pressed={{ bgColor: "warmGray.200" }}
              padding={"5px"}
              borderRadius={"12px"}
            >
              <Center>
                <Heading fontSize={"16px"} fontFamily={"Averta"}>{`${
                  userProfile?.name || ""
                }`}</Heading>
                <Text fontSize={"14px"} fontFamily={"Averta"}>{`0${
                  userProfile?.phoneNumber?.substring(3) || ""
                }`}</Text>
              </Center>
            </Pressable>
            <HStack space={"14px"} alignItems={"center"}>
              <HStack space={"14px"} alignItems={"center"}>
                <Image
                  source={ImagePath.coinBoldAiwado}
                  alt="icon usd"
                  width={scale(18)}
                  height={verticalScale(18)}
                  resizeMode="contain"
                />
                <Text fontFamily={"Averta"}>{`${
                  userProfile?.userPoint?.totalPoints || 0
                } xu`}</Text>
              </HStack>
              <Box height={"100%"} width={"2px"} bgColor={"#F7F8FA"} />
              <HStack space={"14px"} alignItems={"flex-start"}>
                <Image
                  source={ImagePath.ic_rank}
                  alt="icon rank"
                  width={scale(18)}
                  height={verticalScale(18)}
                  resizeMode="contain"
                />
                <Text textTransform={"capitalize"} fontFamily={"Averta"}>
                  {userProfile?.tierCode || ""}
                </Text>
              </HStack>
            </HStack>
            <SelectMethodImagePicker />
          </Stack>
        </Center>
        </ImageBackground>
        </Box>

      </View>
    </NativeBaseProvider>
  );
};

export default Profile;
