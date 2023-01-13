import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';

import { Box, RectBox, Text } from '../../theme';

const markers = [
  {
    id: 1,
    title: 'Velopark',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.518830542287795,
    longitude: 30.600759567944486,
  },
  {
    id: 2,
    title: 'MuzLine',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.509116186003205,
    longitude: 30.61045769486924,
  },
  {
    id: 3,
    title: 'Metro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam necessitatibus numquam temporibus aliquid, nobis ea quis, aut porro doloremque perspiciatis voluptates dolor accusamus ad a illo. Vero, labore hic!',
    latitude: 50.511898261486934,
    longitude: 30.623931846165735,
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 64;

const MapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [region] = useState<Region>({
    latitude: 50.51424523427609,
    longitude: 30.613633014838392,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const flatListRef = useRef<FlatList>(null);

  // const handleRegionChange = (coords: Region) => {
  //   setRegion(coords);
  // };

  return (
    <Box flex={1}>
      {/* MAP */}
      <MapView
        ref={mapRef}
        onMapReady={() => console.log('Map ready')}
        // provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
        // onRegionChange={handleRegionChange}
        showsMyLocationButton>
        {markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              description={marker.description}
            />
          );
        })}
      </MapView>

      {/* BOTTOM SCROLLVIEW */}
      <Box position="absolute" left={0} right={0} bottom={0}>
        <FlatList
          ref={flatListRef}
          data={markers}
          horizontal
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH}
          snapToAlignment="center"
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: marker, index }) => {
            return (
              <Box key={marker.id} width={CARD_WIDTH} padding="m">
                <RectBox
                  onPress={() => {
                    mapRef.current?.animateToRegion({
                      latitude: marker.latitude,
                      longitude: marker.longitude,
                      latitudeDelta: 0.0043,
                      longitudeDelta: 0.0034,
                    });
                    flatListRef.current?.scrollToIndex({
                      animated: true,
                      index,
                      viewPosition: 0.5,
                    });
                  }}
                  backgroundColor="main"
                  padding="m"
                  borderRadius="m"
                  shadowOpacity={0.25}
                  shadowOffset={{ width: 2, height: 2 }}
                  shadowRadius={2}
                  elevation={2}>
                  <Text marginBottom="s" fontSize={24}>
                    {marker.title}
                  </Text>
                  <Text>{marker.description}</Text>
                </RectBox>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default MapScreen;
