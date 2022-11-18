import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '../../theme';
import Grid from '../TabIcons/resources/Grid';
import GridOutline from '../TabIcons/resources/GridOutline';
import Home from '../TabIcons/resources/Home';
import HomeOutline from '../TabIcons/resources/HomeOutline';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Box style={{ flexDirection: 'row', height: 49 }}>
      {state.routes.map((route, index) => {
        console.log('route: ', route);
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon;
        if (route.name === 'HomeTab') {
          icon = isFocused ? <Home /> : <HomeOutline />;
        } else if (route.name === 'SettingsTab') {
          icon = isFocused ? <Grid /> : <GridOutline />;
        }

        return (
          <RectButton
            key={route.name}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {icon}

            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </RectButton>
        );
      })}
    </Box>
  );
};

export { BottomTabBar };
