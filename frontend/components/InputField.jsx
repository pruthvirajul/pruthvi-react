import { TextInput } from "react-native";

export default function InputField(props) {
  return (
    <TextInput
      {...props}
      style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
    />
  );
}
