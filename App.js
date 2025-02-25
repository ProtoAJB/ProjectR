import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuickRosaryScreen from './QuickRosaryScreen'; // Import QuickRosaryScreen
import RosaryScreen from './RosaryScreen'; // Import RosaryScreen (you can create this separately)

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="QuickRosary" component={QuickRosaryScreen} />
        <Stack.Screen name="Rosary" component={RosaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MenuScreen = ({ navigation }) => {
  // Function to handle the "Quit" button click
  const handleQuit = () => {
    Alert.alert(
      "Quit",
      "Are you sure you want to quit?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => { /* Code to exit the app (only for development) */ } }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Rosary App</Text>
      
      {/* Quick Rosary Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuickRosary')}>
        <Text style={styles.buttonText}>Quick Rosary</Text>
      </TouchableOpacity>

      {/* Rosary Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rosary')}>
        <Text style={styles.buttonText}>Rosary</Text>
      </TouchableOpacity>

      {/* Quit Button */}
      <TouchableOpacity style={styles.quitButton} onPress={handleQuit}>
        <Text style={styles.quitText}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    width: '80%',
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quitButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
  },
  quitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
