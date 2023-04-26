import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { typography } from './src/theme/typography';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Light': require('./assets/fonts/Oswald-Light.ttf'),
    'Oswald-Medium': require('./assets/fonts/Oswald-Medium.ttf'),
    'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
    'Oswald-SemiBold': require('./assets/fonts/Oswald-SemiBold.ttf'),

  });

  if( !fontsLoaded ){
    return <Text>fonts is Laoding....</Text>
  }
  return (
    <View style={styles.container}>
      <Text preset='h1'>Open up App.js to start working on your app!</Text>
      <Text preset='h3'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midnightPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
