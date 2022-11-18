import React from 'react';

import { RectButtonBox } from '../../theme';
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

const TabIcons = ({ routeName, isFocused }: Props) => {
  let icon;
  switch (routeName) {
    case 'HomeTab':
      icon = isFocused ? <Home /> : <HomeOutline />;
      break;
    case 'GalleryTab':
      icon = isFocused ? <Gallery /> : <GalleryOutline />;
      break;
    case 'MapTab':
      icon = isFocused ? <Map /> : <MapOutline />;
      break;
    case 'CameraTab':
      icon = isFocused ? <Camera /> : <CameraOutline />;
      break;
    case 'SettingsTab':
      icon = isFocused ? <Grid /> : <GridOutline />;
      break;
    default:
      break;
  }

  // let icon;
  // if (routeName === 'HomeTab') {
  //   icon = isFocused ? <Home /> : <HomeOutline />;
  // } else if (routeName === 'GalleryTab') {
  //   icon = isFocused ? <Gallery /> : <GalleryOutline />;
  // } else if (routeName === 'MapTab') {
  //   icon = isFocused ? <Map /> : <MapOutline />;
  // } else if (routeName === 'CameraTab') {
  //   icon = isFocused ? <Camera /> : <CameraOutline />;
  // } else if (routeName === 'SettingsTab') {
  //   icon = isFocused ? <Grid /> : <GridOutline />;
  // }
  return (
    <RectButtonBox
      flex={1}
      width={'100%'}
      justifyContent="center"
      alignItems="center">
      {icon}
    </RectButtonBox>
  );
};

export default TabIcons;
