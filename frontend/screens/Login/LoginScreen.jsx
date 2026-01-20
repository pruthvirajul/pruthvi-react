import { View } from "react-native";
import { useState } from "react";
import InputField from "../../components/InputField";
import AppButton from "../../components/AppButton";
import authService from "../../services/auth.service";
import styles from "./LoginScreen.styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <InputField placeholder="Email" onChangeText={setEmail} />
      <InputField placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <AppButton title="Login" onPress={() => authService.login({ email, password })} />
    </View>
  );
}
