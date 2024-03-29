import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';

const ResultPage = ({route}) => {
  const {imageUri, userInput} = route.params;
  const [imagUrl, setImageUrl] = useState(imageUri);
  const [loading, setLoading] = useState(true);
  const [outputUrl, setOutputUrl] = useState('');
  const input =
    'analog film photo of a man. faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage, masterpiece, best quality';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inputData = {
          model: 'instant-id',
          version: '0.0.1',
          input: {
            image: imageUri,
            height: 640,
            prompt: userInput ? userInput : input,
            scheduler: 'EulerDiscreteScheduler',
            enable_lcm: false,
            sdxl_weights: 'protovision-xl-high-fidel',
            pose_strength: 0.4,
            canny_strength: 0.3,
            depth_strength: 0.5,
            guidance_scale: 5,
            negative_prompt:
              '(lowres, low quality, worst quality:1.2), (text:1.2), watermark, painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured (lowres, low quality, worst quality:1.2), (text:1.2), watermark, painting, drawing, illustration, glitch,deformed, mutated, cross-eyed, ugly, disfigured',
            ip_adapter_scale: 0.8,
            lcm_guidance_scale: 1.5,
            num_inference_steps: 30,
            enable_pose_controlnet: true,
            enhance_nonface_region: true,
            enable_canny_controlnet: false,
            enable_depth_controlnet: false,
            lcm_num_inference_steps: 5,
            controlnet_conditioning_scale: 0.8,
          },
        };
        const response = await axios.post(
          'https://api-service-v62krfexiq-lm.a.run.app/v1/prediction/run',
          inputData,
          {
            headers: {
              'Content-Type': 'application/json',
              //1019 Api Tokens
              'X-API-Key': '',
            },
          },
        );
        console.log(JSON.stringify(response.data));
        const outputUrl = response.data.output[0];
        setOutputUrl(outputUrl);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (outputUrl !== '') {
      setImageUrl(outputUrl);
    }
  }, [outputUrl]);

  const handleButtonPress = () => {
    Linking.openURL('https://1019.io/');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={{uri: imagUrl}} style={styles.image} />
        {loading ? (
          <>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.responseText}>All good!</Text>
            <Text style={styles.responseText}>Our AI getting ready</Text>
          </>
        ) : (
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
          </TouchableOpacity>
        )}
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
  image: {
    width: '85%',
    height: 400,
    marginVertical: 20,
    borderRadius: 5,
    marginBottom: 50,
  },
  responseText: {
    color: '#CCCCCC',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    width: '50%',
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

export default ResultPage;
