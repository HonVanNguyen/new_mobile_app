import { ImagePath } from "@/common/assets/constants/imagePath";
import { ProductDetailInf } from "@/common/interface/ProductInterface";
import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

// Define the interface for the props
interface ProductItemProps {
  data: ProductDetailInf;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  return (
    <Link href={"/about"} asChild>
      <Pressable style={styles.box}>
        <View style={styles.topBox}>
          <Image style={styles.image} source={data.img}></Image>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.dataTitle}>{data.title}</Text>
          <Text style={styles.dataPrice}>
            Giá trị <Text>{data.price}</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              style={{
                width: 15,
                height: 15,
              }}
              source={ImagePath.icCoinBolder}
            ></Image>
            <Text style={styles.dataCoin}>{data.xu} Xu</Text>
          </View>
          <View style={styles.iconCart}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}
              source={ImagePath.icShoppingCart}
            ></Image>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};
export default ProductItem;
const styles = StyleSheet.create({
  box: {
    width: width / 2,
    height: 250,
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topBox: {
    padding: 5,
    height: 160,
    width: "100%",
  },
  bottomBox: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: 100,
    width: "100%",
    gap: 5,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dataPrice: {
    fontSize: 14,
    color: "#666363",
  },
  dataCoin: {
    fontSize: 14,
    color: "red",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  iconCart: {
    position: "absolute",
    width: 40,
    height: 40,
    backgroundColor: "red",
    bottom: 20,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
