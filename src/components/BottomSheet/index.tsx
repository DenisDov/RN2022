import BottomSheet from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import React, { useMemo, useRef } from 'react';

import { Box, Text } from '../../theme';

const BSheet = () => {
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '10%', '100%'], []);

  return (
    <Box flex={1} backgroundColor="surface">
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: theme.colors.background,
        }}>
        <Box flex={1} alignItems="center">
          <Text>Awesome 🎉</Text>
        </Box>
      </BottomSheet>
    </Box>
  );
};

export { BSheet };
