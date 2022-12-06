import React from 'react';
import { StyleSheet } from 'react-native';

import { Box } from '../../theme';

const ArrowRight = () => {
  return (
    <Box
      width={10}
      height={10}
      borderTopWidth={1}
      borderRightWidth={1}
      borderColor="primaryText"
      style={styles.arrowRight}
    />
  );
};

const styles = StyleSheet.create({
  arrowRight: {
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
});

export { ArrowRight };
