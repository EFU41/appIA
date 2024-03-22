import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

const HomePage = ({navigation}) => {
  const nextPage = () => {
    navigation.navigate('SelectModelPage');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.contain}>
            <View style={styles.info}>
              <Text style={styles.text}>Powered by 1019</Text>
            </View>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Magic Avatars</Text>
            <Text style={styles.text}>
              Create personalized, imppressive avatars with the help of powerful
              AI technology
            </Text>
          </View>
          <TouchableOpacity onPress={nextPage}>
            <View style={styles.button}>
              <Text style={styles.text}>Contine</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'content',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  contain: {
    flexDirection: 'row',
    marginLeft: 50,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  info: {
    backgroundColor: '#4285F4',
    borderRadius: 10,
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomePage;
