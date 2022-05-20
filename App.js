import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetialsScreen from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <DishDetailsScreen />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
