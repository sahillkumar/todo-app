import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = ({ item, deleteItem }) => {
  const onDelete = () => {
    deleteItem({ ...item, status: !item.status });
  };

  return (
    <View style={styles.listItem}>
      <Pressable onPress={onDelete}>
        <Text style={[styles.listItemText, item.status && styles.listItemDone]}>
          {item.label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: "#222",
    borderRadius: 4,
  },
  listItemText: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    color: "whitesmoke",
  },
  listItemDone: {
    textDecorationLine: "line-through",
    color: "#7A7777",
  },
});

export default Item;
