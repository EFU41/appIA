import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const PromtPage = ({route, navigation}) => {
  const {selectedImage} = route.params;
  const [imageUri, setImageUri] = useState(selectedImage);
  const [userInput, setUserInput] = useState('');

  const width = 350;
  const height = 400;

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: false,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCropImage = () => {
    if (imageUri) {
      const formData = new FormData();
      formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
      });

      fetch('https://storage-uploader-v62krfexiq-lm.a.run.app/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Uploaded Image URL:', data.url);
          navigation.navigate('ResultPage', {imageUri: data.url, userInput});
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    } else {
      console.log('No image selected');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={{uri: imageUri}} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="prompt here"
          value={userInput}
          onChangeText={setUserInput}
          placeholderTextColor="white"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleCameraPicker}
            style={styles.buttonFalse}>
            <Text style={styles.text}>Take Another</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCropImage} style={styles.button}>
            <Text style={styles.text}>Apply</Text>
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
    backgroundColor: 'black',
  },
  buttonContainer: {
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    width: '40%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonFalse: {
    backgroundColor: '#CCCCCC',
    borderRadius: 20,
    width: '40%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    height: 400,
    marginVertical: 20,
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#CCCCCC',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PromtPage;
