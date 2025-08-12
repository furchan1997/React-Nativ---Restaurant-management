import { View, Text, StyleSheet } from "react-native";

export default function SuccessMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {message || "Action completed successfully. ✅"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4edda", // ירוק בהיר
    borderColor: "#28a745", // ירוק כהה
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#155724", // ירוק כהה לטקסט
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
