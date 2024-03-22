import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const SelectModelPage = ({navigation}) => {
  const nextPage = () => {
    navigation.navigate('ModelAvatarPage');
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Select type</Text>
        <View style={styles.content}>
          <Image
            source={{
              uri: 'https://assets-global.website-files.com/61dc0796f359b6eeecc06eab/65cb736056a0adb8b2849d69_un1mml3612.png',
            }}
            style={styles.image}
          />
          <Text style={styles.headerText}>Avatar</Text>
          <Text style={styles.text}>Try yourself in different looks</Text>
          <TouchableOpacity onPress={nextPage} style={styles.button}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Image
            source={{
              uri: 'https://images.nightcafe.studio/jobs/Ig2dtGM7kX2UZO4FwasE/Ig2dtGM7kX2UZO4FwasE--8--0KFBH_4x.jpg?tr=w-1600,c-at_max',
            }}
            style={styles.image}
          />
          <Text style={styles.headerText}>Dogs & Cats</Text>
          <Text style={styles.text}>Make your pet a superhero</Text>
          <TouchableOpacity style={styles.buttonFalse}>
            <Text style={styles.buttonText}>1019.io</Text>
          </TouchableOpacity>
        </View>
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    width: '80%',
    height: 270,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonFalse: {
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    color: '#999999',
    fontSize: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 50,
  },
});

export default SelectModelPage;
