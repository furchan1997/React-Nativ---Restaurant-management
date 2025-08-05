import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigetor from "./Components/Navigetor";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import Footer from "./Components/Footer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Navigator">
          <Stack.Screen
            name="Navigator"
            component={Navigetor}
            options={{ title: "ניהול מסעדה" }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: "אזור התחברות" }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "אזור הרשמה" }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
