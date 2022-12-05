import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { Box, Text } from '../../theme';

const MapScreen = () => {
  const [region, setRegion] = useState<Region>({
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
        onMapReady={() => console.log('Camera ready')}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        onRegionChange={handleRegionChange}
        showsMyLocationButton>
        <Marker
          coordinate={{
            latitude: 46.696228,
            longitude: 32.544376,
          }}
        />
      </MapView>
      <Box
        backgroundColor="background"
        position="absolute"
        width={120}
        left={8}
        bottom={8}
        borderRadius="m"
        padding="m"
        justifyContent="center"
        alignItems="center"
        shadowColor="shadow"
        shadowOpacity={0.25}
        shadowOffset={{ width: 2, height: 2 }}
        shadowRadius={2}
        elevation={2}>
        <Text>{region.latitude.toFixed(6)}</Text>
        <Text>{region.longitude.toFixed(6)}</Text>
      </Box>
    </Box>
  );
};

export default MapScreen;
