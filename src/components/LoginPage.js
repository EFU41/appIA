import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [logoSize, setLogoSize] = useState(200);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginPage(true);
      setLogoSize(100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      console.log('Kullanıcı adı veya şifre boş olamaz.');
      return;
    }

    navigation.navigate('HomePage');

    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.logoContainer, {marginBottom: showLoginPage ? 20 : 0}]}>
        <Image
          source={require('../logo.png')}
          style={[styles.logo, {width: logoSize, height: logoSize}]}
        />
      </View>
      {showLoginPage && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    resizeMode: 'contain',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginPage;
