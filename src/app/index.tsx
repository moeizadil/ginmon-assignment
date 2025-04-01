import { StatusBar } from "expo-status-bar";
import {  Text, View } from "react-native";
import { useRouter } from "expo-router";
import GenericButton from "../components/genericButton";
import { indexStyles } from "../styles/indexStyles";

export default function App() {
  const router = useRouter();
  const handleButtonPress = () => {
    console.log("Button Pressed on Main Screen",router);
    router.push("/MainScreen")  };
  return (
    <View style={indexStyles.container}>
      <Text style={indexStyles.text}>Ginmon Assignment for Frontend 123</Text>
      <GenericButton name="Start Now" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

