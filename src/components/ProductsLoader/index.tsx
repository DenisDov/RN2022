import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Box } from '@theme';

const { width } = Dimensions.get('window');

const ITEMS_COUNT = 6;
const GAP = 8;

const ProductsLoader = () => {
  return (
    <Box flexDirection="row" flexWrap="wrap">
      {[...Array(ITEMS_COUNT).keys()].map(key => (
        <ContentLoader
          key={key}
          width={width / 2 - GAP}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#FCDC73"
          foregroundColor="#ecebeb"
          style={styles.box}>
          <Rect x="8" y="96" rx="3" ry="3" width="410" height="6" />
          <Rect x="8" y="114" rx="3" ry="3" width="380" height="6" />
          <Rect x="8" y="133" rx="3" ry="3" width="123" height="6" />
          <Rect x="8" y="5" rx="11" width="80" height="80" />
        </ContentLoader>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: GAP / 2,
  },
});

export { ProductsLoader };
