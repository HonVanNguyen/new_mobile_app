import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function ListItem(props: any) {
  return (
    <Link href={"/about"} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{props.data}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontSize: 50,
  },
});
