import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';
import {
  Camera,
  TakePhotoOptions,
  useCameraDevices,
} from 'react-native-vision-camera';

import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { useIsForeground } from '../../../hooks/useIsForeground';
import { Box, RectBox, Text } from '../../../theme';

const takePhotoOptions: TakePhotoOptions = {
  qualityPrioritization: 'speed',
  skipMetadata: true,
};

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const camera = useRef<Camera>(null);

  // check if camera page is active
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

  const takePhoto = useCallback(async () => {
    try {
      if (camera.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('Taking photo...');
      const photo = await camera.current.takePhoto(takePhotoOptions);
      console.log('photo: ', photo);
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [camera]);

  return (
    <Box flex={1} backgroundColor="surface" justifyContent="center">
      {device == null ? (
        <ActivityIndicator />
      ) : (
        <Camera
          ref={camera}
          photo={true}
          device={device}
          isActive={isActive}
          style={StyleSheet.absoluteFill}>
          <RectBox
            onPress={takePhoto}
            position="absolute"
            width={50}
            height={50}
            backgroundColor="main">
            <Text>TAKE PHOTO</Text>
          </RectBox>
        </Camera>
      )}
    </Box>
  );
};

export default CameraScreen;
