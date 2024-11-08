import { View, Text, Image } from "react-native";
import React from "react";
import { SessionInforStyle } from "@/styles/Home/SessionInforStyled";
import { ImagePath } from "@/common/assets/constants/imagePath";

const SessionInfor = () => {
  return (
    <View style={SessionInforStyle.SessionInfor}>
      <View style={SessionInforStyle.ViewTop}>
        <Text style={{ flex: 2 }}>
          Xin chào, <Text style={{ fontWeight: "bold" }}> Nguyễ...</Text>
        </Text>
        <View style={SessionInforStyle.ViewCoin}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={ImagePath.icCoinBolder}
          ></Image>
          <Text>0 Xu</Text>
          <View />
        </View>
        <View style={SessionInforStyle.ViewMember}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={ImagePath.ic_rank}
          ></Image>
          <Text>Member</Text>
        </View>
      </View>
      {/* bottom */}
      <View style={SessionInforStyle.ViewBottom}>
        {/* gift */}
        <View style={SessionInforStyle.ViewBottomItermF}>
          <Image
            style={SessionInforStyle.ImageBottom}
            source={ImagePath.icGiftBar}
          ></Image>
          <Text style={SessionInforStyle.TextBottom}>Đổi quà</Text>
        </View>
        {/* QR */}
        <View style={SessionInforStyle.ViewBottomIterm}>
          <Image
            style={[SessionInforStyle.ImageBottom, { tintColor: undefined }]}
            source={ImagePath.ic_barcode}
          ></Image>
          <Text style={SessionInforStyle.TextBottom}>Quét mã</Text>
        </View>
        <View style={SessionInforStyle.ViewBottomIterm}>
          <Image
            style={SessionInforStyle.ImageBottom}
            source={ImagePath.icShoppingCart}
          ></Image>
          <Text style={SessionInforStyle.TextBottom}>Giỏ quà</Text>
        </View>
      </View>
    </View>
  );
};

export default SessionInfor;
