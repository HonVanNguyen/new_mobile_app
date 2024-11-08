import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SessionCateStyle } from "@/styles/Home/SessionCategoryStyled";
import { ImagePath } from "@/common/assets/constants/imagePath";

const SessionCategory = () => {
  const listCategorys = [
    {
      id: 1,
      title: "Đơn quà của tôi",
      img: ImagePath.ic_my_order,
    },
    {
      id: 2,
      title: "E-Voucher của tôi",
      img: ImagePath.ic_e_voucher,
    },
    {
      id: 3,
      title: "Chia sẻ",
      img: ImagePath.ic_share_ser,
    },
    {
      id: 4,
      title: "Tin tức",
      img: ImagePath.ic_news,
    },
    {
      id: 5,
      title: "Cửa hàng",
      img: ImagePath.ic_store,
    },
    {
      id: 6,
      title: "Khảo sát",
      img: ImagePath.ic_servey,
    },
    {
      id: 7,
      title: "Cẩm nang",
      img: ImagePath.ic_book,
    },
  ];
  return (
    <View style={{ height: 170 }}>
      <FlatList
        data={listCategorys}
        contentContainerStyle={SessionCateStyle.SessionCate}
        horizontal={true} // Hiển thị các mục theo hàng ngang
        renderItem={({ item }) => (
          <View style={SessionCateStyle.itemContainer}>
            {item.img ? (
              <View style={SessionCateStyle.imageContainer}>
                <Image source={item.img} style={SessionCateStyle.itemImage} />
              </View>
            ) : null}
            <Text style={SessionCateStyle.itemText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SessionCategory;
