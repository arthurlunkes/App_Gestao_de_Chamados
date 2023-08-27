import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import TicketPanel from '../pages/ticketPanel';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true
            }}
        >
            <Stack.Screen name="TicketPanel" component={TicketPanel} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
