import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Box } from '@theme';
import Animated, { FadeOut } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const ITEMS_COUNT = 6;

const Skeleton = () => {
  return (
    <Box padding="s">
      <Animated.View exiting={FadeOut}>
        <Box flexDirection="row" flexWrap="wrap">
          {[...new Array(ITEMS_COUNT).keys()].map(key => (
            <ContentLoader
              key={key}
              width={width / 2 - 16}
              height={200}
              viewBox="0 0 200 200"
              backgroundColor="#F5F5F6"
              foregroundColor="#ccc"
              style={styles.box}>
              <Rect x="8" y="0" rx="11" width="80" height="80" />
              <Rect x="8" y="96" rx="3" ry="3" width="50" height="6" />
              <Rect x="8" y="114" rx="3" ry="3" width="150" height="6" />
              <Rect x="8" y="133" rx="3" ry="3" width="180" height="6" />
              <Rect x="8" y="151" rx="3" ry="3" width="180" height="6" />
              <Rect x="8" y="169" rx="3" ry="3" width="80" height="6" />
            </ContentLoader>
          ))}
        </Box>
      </Animated.View>
    </Box>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2F365F',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export { Skeleton };
