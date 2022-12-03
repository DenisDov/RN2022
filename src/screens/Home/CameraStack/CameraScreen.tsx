import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { Box } from '../../../theme';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  return (
    <Box flex={1} backgroundColor="surface" justifyContent="center">
      {device == null ? (
        <ActivityIndicator />
      ) : (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      )}
    </Box>
  );
};

export default CameraScreen;
