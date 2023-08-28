import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import TicketPanel from "../pages/ticketPanel";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    const theme = useColorScheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: theme === 'dark' ? '#0f0f0f' : '#787878',
                tabBarInactiveBackgroundColor: theme === 'dark' ? '#1c1c1c' : 'white',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'TicketPanel') {
                        iconName = focused
                            ? 'bar-chart'
                            : 'bar-chart-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="TicketPanel" component={TicketPanel} />
        </Tab.Navigator>
    );
}