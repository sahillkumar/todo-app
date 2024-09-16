import { Pressable, StyleSheet, Text, View } from "react-native";

const Item = ({ item, deleteItem }) => {
  const onDelete = () => {
    deleteItem(item.key);
  };

  return (
    <Pressable onPress={onDelete}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    fontSize: 18,
    marginBottom: 8,
    backgroundColor: "#111",
    borderRadius: 4,
  },
  listItemText: {
    color: "#ccc",
  },
});

export default Item;
