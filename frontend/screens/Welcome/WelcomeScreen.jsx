import { View, Text } from "react-native";
import AppButton from "../../components/AppButton";
import styles from "./WelcomeScreen.styles";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <AppButton
        title="Get Started"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
}
