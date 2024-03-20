import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PageSix = ({route, navigation}) => {
  const {outputUrl} = route.params;

  const navigations = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigations.navigate('page4');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const handleButtonPress = () => {
    Linking.openURL('https://1019.io/');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={{uri: outputUrl}} style={styles.image} />
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  image: {
    width: 350,
    height: 400,
    marginVertical: 20,
    borderRadius: 10,
  },
  button: {
    marginTop: 50,
    width: 235,
    height: 90,
    borderRadius: 50,
  },
  logo: {
    width: 235,
    height: 90,
    borderRadius: 50,
  },
});

export default PageSix;
