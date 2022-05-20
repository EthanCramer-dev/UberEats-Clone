import { View, Text, StyleSheet, Image } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexView}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>${dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 100,
    aspectRatio: 1,
    borderRadius: "5%",
  },
  flexView: {
    flex: 1,
  },
});

export default DishListItem;
