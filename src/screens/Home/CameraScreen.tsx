import React from 'react';

// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { Box, Text } from '../../theme';

// import { HEADER_HEIGHT } from '../../utils/constants';

const CameraScreen = () => {
  // const insets = useSafeAreaInsets();
  // const marginTop = insets.top;
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Camera" noBack translucent />
      <Box>
        <Text>CameraScreen</Text>
      </Box>
    </Box>
  );
};

export default CameraScreen;
