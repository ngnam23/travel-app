import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoarding, Search } from "./screens";
import BottomTab from "./navigation/BottomTab";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoard"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
