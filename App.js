import * as React from 'react';
import { Button, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicking from './src/ImagePicking';
import GeoLocation from './src/GeoLocation';
import ToDo from './src/ToDo';
import LoginScreen from './src/LoginScreen';




function HomeScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
    
      <Button
        title="ImagePicker 3.x"
        color="#001C55"
        onPress={() => navigation.navigate('Image Picker')}
      />
       
      <Button
        title="GeoLocation"
        color="#0A2472"
        onPress={() => navigation.navigate('Geo Location')}
      />

       <Button
        title="To Do"
        color="#0E6BA8"
        onPress={() => navigation.navigate('To Do')}
      />
      <Button
        title="Login"
        color="#A6E1FA"
        onPress={() => navigation.navigate('Login Screen')}
      />
      
    </View>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/logo.png')}
    />
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />  
        
        <Stack.Screen name="Image Picker" component={ImagePicking} />
        <Stack.Screen name="Geo Location" component={GeoLocation} />
        <Stack.Screen name="To Do" component={ToDo} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  buttonStyle: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  
});
