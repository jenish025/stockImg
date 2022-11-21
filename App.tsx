import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, View } from 'react-native';

import Navigation from './Src/Navigation/Navigation';
import linking from './Src/Linking';
import { Provider } from 'react-redux';
import { Store } from './Src/Redux/Index';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer linking={linking}>
        <StatusBar hidden={false} backgroundColor="#babac0" />

        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
