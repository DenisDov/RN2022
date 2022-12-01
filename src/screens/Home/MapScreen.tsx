import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { Box, Text } from '../../theme';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 46.696228,
    longitude: 32.544376,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleRegionChange = (coords: Region) => {
    setRegion(coords);
  };

  return (
    <Box flex={1}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        onRegionChange={handleRegionChange}
      />
      <Box
        backgroundColor="background"
        position="absolute"
        left={16}
        right={16}
        bottom={16}
        borderRadius="m"
        padding="m"
        justifyContent="center"
        alignItems="center">
        <Text>{region.latitude.toFixed(6)}</Text>
        <Text>{region.longitude.toFixed(6)}</Text>
      </Box>
    </Box>
  );
};

export default MapScreen;
