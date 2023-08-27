import {SafeAreaView, View} from "react-native";
import Routes from "./navigation/Stack";
import Tabs from "./navigation/Tabs";

export default function Page() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tabs />
    </SafeAreaView>
  )
}