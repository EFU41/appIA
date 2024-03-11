import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function HomePage({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [dollarAmount, setDollarAmount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(height);
        setWidth(width);
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        setHeight(height);
        setWidth(width);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleCropImage = () => {
    if (selectedImage) {
      navigation.navigate('ResultPage', {selectedImage: selectedImage});
    } else {
      console.log('No image selected');
    }
  };

  const handleAddDollar = () => {
    if (dollarAmount < 5) {
      setDollarAmount(prevAmount => prevAmount + 5);
      setShowButtons(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: 10, right: 10}}>
          <TouchableOpacity onPress={handleAddDollar}>
            <View
              style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}>
              <Text style={{color: 'white'}}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: 10, left: 10}}>
          <Text>Dollar: ${dollarAmount}</Text>
        </View>
        {selectedImage && (
          <Image
            source={{uri: selectedImage}}
            style={{
              width: width,
              height: height,
              marginVertical: 20,
              marginTop: 70,
            }}
          />
        )}
        {showButtons && (
          <View>
            <View style={{marginTop: 20}}>
              <Button title="Choose from Gallery" onPress={handleImagePicker} />
            </View>
            <View style={{marginTop: 20}}>
              <Button title="Take a Photo" onPress={handleCameraPicker} />
            </View>
            <View style={{marginTop: 20, marginBottom: 50}}>
              {selectedImage && (
                <Button title="sdk uı" onPress={handleCropImage} />
              )}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default HomePage;
