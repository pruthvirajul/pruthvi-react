import { View } from "react-native";
import { useState } from "react";
import InputField from "../../components/InputField";
import AppButton from "../../components/AppButton";
import authService from "../../services/auth.service";
import styles from "./SignupScreen.styles";

export default function SignupScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <InputField placeholder="Name" onChangeText={setName} />
      <InputField placeholder="Email" onChangeText={setEmail} />
      <InputField placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <AppButton title="Signup" onPress={() => authService.signup({ name, email, password })} />
    </View>
  );
}
