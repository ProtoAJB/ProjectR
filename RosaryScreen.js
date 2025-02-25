import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RosaryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rosary Screen</Text>
      
      {/* Button to go back to Menu */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Menu</Text>
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
});

export default RosaryScreen;