import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message || "אירעה שגיאה, נסה שוב ❌"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8d7da", // אדום בהיר
    borderColor: "#dc3545", // אדום כהה
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#721c24", // אדום כהה לטקסט
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
});
