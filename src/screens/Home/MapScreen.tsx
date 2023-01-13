import React, { useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { Box, Text } from '../../theme';

const markers = [
  {
    id: 1,
    name: 'Velopark',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.518830542287795,
    longitude: 30.600759567944486,
  },
  {
    id: 2,
    name: 'MuzLine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.509116186003205,
    longitude: 30.61045769486924,
  },
  {
    id: 3,
    name: 'Metro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.511898261486934,
    longitude: 30.623931846165735,
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MapScreen = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 50.51424523427609,
    longitude: 30.613633014838392,
    latitudeDelta: 0.09,
    longitudeDelta: 0.04,
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
        {markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
            />
          );
        })}
      </MapView>

      <Box
        // backgroundColor="surface"
        position="absolute"
        left={0}
        right={0}
        bottom={0}>
        <ScrollView
          // contentContainerStyle={{ paddingHorizontal: 16 }}
          horizontal
          pagingEnabled
          // decelerationRate="fast"
          // snapToInterval={SCREEN_WIDTH - (64 - 16)} //your element width
          // snapToAlignment="center"
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {markers.map(marker => {
            return (
              <Box
                key={marker.id}
                width={SCREEN_WIDTH}
                padding="m"
                // marginHorizontal="s"
                backgroundColor="error">
                <Text marginBottom="s" fontSize={24}>
                  {marker.name}
                </Text>
                <Text>{marker.description}</Text>
              </Box>
            );
          })}
        </ScrollView>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
};

export default MapScreen;
