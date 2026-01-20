import { TouchableOpacity, Text } from "react-native";

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 15, backgroundColor: "#2563EB" }}>
      <Text style={{ color: "#fff", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
}
