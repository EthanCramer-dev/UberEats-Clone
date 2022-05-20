import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";

const restaurant = restaurants[0];

const Basket = () => {
  const [quantity, setQuantity] = useState(1);

  const BasketDishItem = ({ basketDish }) => {
    return (
      <View style={styles.row}>
        <View style={styles.quantityContainer}>
          <Text>1</Text>
        </View>
        <Text style={{ fontWeight: "600" }}>{basketDish.name}</Text>
        <Text style={{ marginLeft: "auto", color: "gray" }}>
          ${basketDish.price}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.yourItems}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.seperator}></View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    marginLeft: 10,
  },
  description: {
    color: 696969,
  },
  seperator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    // fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  yourItems: {
    fontWeight: "600",
    fontSize: 16,
    paddingVertical: 5,
    marginLeft: 10,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    marginRight: 10,
    marginLeft: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
});

export default Basket;
