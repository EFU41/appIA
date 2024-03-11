import React, {useState} from 'react';
import {View, Text, Button, Image, TextInput, StyleSheet} from 'react-native';
import axios from 'axios';
import enesImage from '../enes.jpeg';

const ResultPage = ({route, navigation}) => {
  const {selectedImage} = route.params;
  const [userInput, setUserInput] = useState(
    'analog film photo of a man. faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage, masterpiece, best quality',
  );

  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState('');
  const [outputUrl, setOutputUrl] = useState('');

  const handleMagicPointRequest = () => {
    setLoading(true);
    postData();
  };

  const postData = () => {
    const inputData = {
      model: 'instant-id',
      version: '0.0.1',
      apiKey: 'MP1019FHGDUUJ0H2F754L6JLJA76HMMMPXBG',
      input: {
        image:
          'https://media.licdn.com/dms/image/D4E03AQGlu4MIsJKgzg/profile-displayphoto-shrink_800_800/0/1696504924472?e=2147483647&v=beta&t=Of_fr4SE6WIPE5aA785L7yRtllmTxABZX6hPCz8mD-A',
        height: 640,
        prompt: userInput,
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

    axios
      .post(
        'https://api-service-v62krfexiq-lm.a.run.app/v1/prediction/run',
        inputData,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': 'MP1019N9L4PQY402GR1WDT7HSYXGBDRUHNL5',
          },
        },
      )
      .then(response => {
        setResponseText(JSON.stringify(response.data));

        const outputUrl = response.data.output[0];
        setOutputUrl(outputUrl);
      })
      .catch(error => {
        setResponseText(`Error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(responseText);

  return (
    <View style={styles.container}>
      <Image source={enesImage} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder=""
        value={userInput}
        onChangeText={setUserInput}
      />

      <Button
        title="Make MagicPoint Request"
        onPress={handleMagicPointRequest}
        disabled={loading}
      />
      {loading && <Text>Loading...</Text>}

      {outputUrl !== '' && (
        <Image source={{uri: outputUrl}} style={styles.outputImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  outputImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ResultPage;
