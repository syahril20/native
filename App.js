 

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./component/view/login";
import Home from "./component/view/home";
import Register from "./component/view/register";
import Index from "./component/view/index";
import { Ionicons } from "@expo/vector-icons";
import { useTheme, NativeBaseProvider } from "native-base";
import Category from "./component/view/index/category";
import List from "./component/view/index/list";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  const theme = useTheme();
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Add Category") {
              iconName = focused ? "grid" : "grid-outline";
            } else if (route.name === "List") {
              iconName = focused ? "grid" : "add-circle-outline";
            }

            return (
             
                <Ionicons name={iconName} size={24} color={"#FF5555"} />
              
            );
          },
        })}
      >
        <Tab.Screen none name="Home" component={Index} />
        <Tab.Screen name="Add List" component={List} />
        <Tab.Screen name="Add Category" component={Category} />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Waw"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Index"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="List"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
