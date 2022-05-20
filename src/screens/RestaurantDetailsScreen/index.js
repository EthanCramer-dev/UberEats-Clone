import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import DishListItem from "../../components/DishListItem";
import styles from "./styles";
import Header from "./Header";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";

const restaurant = restaurants[0];

const RestaurantDetialsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.imageIcon}
        />
      </View>
    </View>
  );
};

export default RestaurantDetialsPage;
