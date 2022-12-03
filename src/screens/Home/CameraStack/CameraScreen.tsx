import { useIsFocused } from '@react-navigation/native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import { ActivityIndicator } from '../../../components/ActivityIndicator';
import { useIsForeground } from '../../../hooks/useIsForeground';
import { Box, RectBox, Text } from '../../../theme';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const camera = useRef<Camera>(null);

  // check if camera page is active
  const isFocused = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocused && isForeground;

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
          <RectBox position="absolute">
            <Text>TAKE PHOTO</Text>
          </RectBox>
        </Camera>
      )}
    </Box>
  );
};

export default CameraScreen;
