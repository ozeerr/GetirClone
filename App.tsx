import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import HomeNavigator from './src/navigators/HomeNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
   <NavigationContainer>
     <RootNavigator/>
   </NavigationContainer>
   </Provider>
  );
}
