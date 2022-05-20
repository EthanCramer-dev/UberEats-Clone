import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  container: {
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    color: 525252,
  },
  menuTitle: {
    marginVertical: 10,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
