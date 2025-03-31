import { StatusBar } from "expo-status-bar";
import {  Text, View } from "react-native";
import { useRouter } from "expo-router";
import GenericButton from "../../components/genericButton";
import { styles } from "../constants/style";

export default function App() {
  const router = useRouter();
  const handleButtonPress = () => {
    console.log("Button Pressed on Main Screen",router);
    router.push("/MainScreen")  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ginmon Assignment Main Screen</Text>
      <GenericButton name="Start Now" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

