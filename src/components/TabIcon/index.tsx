import React from 'react';

import { RectBox, Text } from '../../theme';
import Camera from './resources/Camera';
import CameraOutline from './resources/CameraOutline';
import Gallery from './resources/Gallery';
import GalleryOutline from './resources/GalleryOutline';
import Grid from './resources/Grid';
import GridOutline from './resources/GridOutline';
import Home from './resources/Home';
import HomeOutline from './resources/HomeOutline';
import Map from './resources/Map';
import MapOutline from './resources/MapOutline';

type Props = {
  routeName: string;
  isFocused: boolean;
};

const TabIcon = ({ routeName, isFocused }: Props) => {
  let icon: React.ReactNode = null;
  let label: string = '';
  switch (routeName) {
    case 'HomeTab':
      icon = isFocused ? <Home /> : <HomeOutline />;
      label = 'Home';
      break;
    case 'GalleryTab':
      icon = isFocused ? <Gallery /> : <GalleryOutline />;
      label = 'Gallery';
      break;
    case 'MapTab':
      icon = isFocused ? <Map /> : <MapOutline />;
      label = 'Map';
      break;
    case 'CameraTab':
      icon = isFocused ? <Camera /> : <CameraOutline />;
      label = 'Camera';
      break;
    case 'SettingsTab':
      icon = isFocused ? <Grid /> : <GridOutline />;
      label = 'Settings';
      break;
    default:
      break;
  }

  return (
    <RectBox
      flex={1}
      width={'100%'}
      justifyContent="center"
      alignItems="center">
      {icon}
      <Text fontSize={12} color="tabBarLabel" marginTop="xs">
        {label}
      </Text>
    </RectBox>
  );
};

export { TabIcon };
