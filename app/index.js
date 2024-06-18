import { StyleSheet, Text, View, Pressable } from "react-native";
import {Link, router} from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Link href={'app/page1.js'}>
        <Text style={styles.title}>Hello World</Text>
        </Link>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
