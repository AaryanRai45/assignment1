import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Address Form</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={formData.street}
          onChangeText={text => handleInputChange('street', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={formData.city}
          onChangeText={text => handleInputChange('city', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={formData.state}
          onChangeText={text => handleInputChange('state', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          value={formData.postalCode}
          onChangeText={text => handleInputChange('postalCode', text)}
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
