import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const CameraPermissionsScreen = () => {
  const navigation = useNavigation();
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  }, []);

  useEffect(() => {
    if (cameraPermissionStatus === 'authorized') {
      navigation.dispatch(StackActions.replace('CameraScreen'));
    }
  }, [cameraPermissionStatus, navigation]);

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Camera" noBack />
      <Box padding="m">
        <Text marginBottom="xl">Welcome to{'\n'}Vision Camera.</Text>

        {cameraPermissionStatus !== 'authorized' && (
          <Text>
            Vision Camera needs <Text>Camera permission</Text>.{' '}
            <Text onPress={requestCameraPermission}>Grant</Text>
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default CameraPermissionsScreen;
