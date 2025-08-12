import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigetor from "./src/Components/Navigetor";
import SignIn from "./src/Components/pages/SignIn";
import SignUp from "./src/Components/pages/SignUp";
import Footer from "./src/Components/Footer";
import { AuthProvider } from "./src/context/auth.context";

// Main component. Use a stack for navigate in app.

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // For clean ui styls.
    <SafeAreaProvider>
      {/* A main navigation component through which the rest of the navigation components in the application will pass.  */}
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator initialRouteName="Navigator">
            {/* All the screan that need navigation. */}
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
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
