import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { Box, Text } from '../../theme';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 46.696228,
    longitude: 32.544376,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleRegionChange = (coords: any) => {
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
      <Box style={styles.overlay}>
        <Text color="secondaryTextColor">{region.latitude.toFixed(6)}</Text>
        <Text color="secondaryTextColor">{region.longitude.toFixed(6)}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default MapScreen;
