import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/AuthSlice';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error, token } = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      {token ? <Text style={styles.success}>Успешный вход!</Text> : null}
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput 
        style={styles.input} 
        placeholder="Логин" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Пароль" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />
      {loading ? <ActivityIndicator size="large" /> : 
        <Button title="Войти" onPress={handleLogin} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, marginBottom: 10, borderWidth: 1, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
  success: { color: 'green', marginBottom: 10 }
});

export default LoginScreen;
