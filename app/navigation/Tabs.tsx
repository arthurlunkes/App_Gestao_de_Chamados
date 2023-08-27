import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import TicketPanel from "../pages/ticketPanel";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: "#0f0f0f",
                tabBarInactiveBackgroundColor: "#151515",
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderColor: "#000",
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="TicketPanel" component={TicketPanel} />
        </Tab.Navigator>
    );
}