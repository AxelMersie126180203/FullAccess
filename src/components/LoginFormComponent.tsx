import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

const LoginForm = () => {
  const [isHovered, setIsHovered] = useState<{ [key: string]: boolean }>({});

  const handlePressIn = (buttonName: string) => {
    setIsHovered((prev) => ({ ...prev, [buttonName]: true }));
  };

  const handlePressOut = (buttonName: string) => {
    setIsHovered((prev) => ({ ...prev, [buttonName]: false }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.welcomeText}>Welcome, <Text style={styles.subText}>sign in to continue</Text></Text>

        <TouchableOpacity
          style={[styles.oauthButton, isHovered['google'] ? styles.oauthButtonHovered : null]}
          onPressIn={() => handlePressIn('google')}
          onPressOut={() => handlePressOut('google')}
        >
          <Text style={styles.oauthButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.oauthButton, isHovered['github'] ? styles.oauthButtonHovered : null]}
          onPressIn={() => handlePressIn('github')}
          onPressOut={() => handlePressOut('github')}
        >
          <Text style={styles.oauthButtonText}>Continue with Github</Text>
        </TouchableOpacity>

        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#666" secureTextEntry={true} />

        <TouchableOpacity
          style={[styles.oauthButton, isHovered['continue'] ? styles.oauthButtonHovered : null]}
          onPressIn={() => handlePressIn('continue')}
          onPressOut={() => handlePressOut('continue')}
        >
          <Text style={styles.oauthButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  form: {
    padding: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#323232',
    boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: 400,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    color: '#323232',
    marginBottom: 10,
  },
  subText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#666',
  },
  oauthButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    maxWidth: 250,
    height: 45,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#323232',
    backgroundColor: '#fff',
    boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    fontSize: 16,
    fontWeight: '600',
    color: '#323232',
    position: 'relative',
    overflow: 'hidden',
  },
  oauthButtonHovered: {
    backgroundColor: '#212121',
  },
  oauthButtonText: {
    color: '#323232',
    fontWeight: '600',
  },
  separator: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  separatorLine: {
    width: 80,
    height: 2,
    borderRadius: 5,
    backgroundColor: '#666',
  },
  separatorText: {
    color: '#323232',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    maxWidth: 250,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#323232',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#323232',
  },
});

export default LoginForm;
