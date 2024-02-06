import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddressScreen from './screens/AddressScreen';
import ReadingScreen from './screens/ReadingScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Адреса' component={AddressScreen} />
                    <Stack.Screen name='Показания счетчиков' component={ReadingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}