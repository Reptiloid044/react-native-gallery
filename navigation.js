import { Gallery } from "./components/Gallery/Gallery";
import { CardItem } from "./components/CardItem/CardItem";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import store from './app/store';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{title: 'My Gallery'}}
          />
          <Stack.Screen
            name="CardItem"
            component={CardItem}
            options={{ title: 'Go Back' }}
          />
       </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
