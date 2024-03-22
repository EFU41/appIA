import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ModelAvatarPage = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const width = 350;
  const height = 400;

  const backPage = () => {
    navigation.navigate('SelectModelPage');
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: false,
    })
      .then(image => {
        setSelectedImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selectedImage) {
      navigation.navigate('PromtPage', {selectedImage: selectedImage});
    }
  }, [selectedImage, navigation]);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={backPage}>
            <View>
              <Text style={styles.textX}>X</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.headerText}>NEW</Text>
          <Text style={styles.headerText}></Text>
        </View>

        <View style={styles.content}>
          <Image
            source={require('../../assets/background.jpg')}
            style={styles.image}
          />
          <Text style={styles.headerText}>Magic Avatars</Text>
          <Text style={styles.text}>
            Generate mind-blowing avatars from your photos with one of the most
            advanced AI ever created
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleCameraPicker}>
            <Text style={styles.buttonText}>Try Now</Text>
            <Image
              source={require('../../assets/camera.png')}
              style={styles.logo}
            />
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
    width: '80%',
    height: '80%',
    borderRadius: 10,
    margin: 20,
  },
  button: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textX: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '65%',
    marginVertical: 20,
    borderRadius: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  logo: {
    width: 58,
    height: 50,
    marginLeft: 20,
  },
});

export default ModelAvatarPage;
