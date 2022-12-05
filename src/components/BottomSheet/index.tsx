import BottomSheet from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import React, { useMemo, useRef } from 'react';

import { Box, Text } from '../../theme';

const BSheet = () => {
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [26, 26, '100%'], []);

  return (
    <Box flex={1} backgroundColor="surface">
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{
          backgroundColor: theme.colors.background,
        }}>
        <Box flex={1} alignItems="center" padding="m">
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            placeat voluptatibus quasi ipsa cum nulla architecto eveniet
            repudiandae perferendis provident recusandae sit voluptas asperiores
            eaque earum nobis vero delectus fuga ad, sint laboriosam animi. Ipsa
            animi est saepe facere voluptas iusto doloribus laudantium, ab,
            expedita excepturi molestias eum sequi accusamus rerum, debitis
            autem quod sapiente et? Doloremque possimus aut temporibus
            molestiae? Ducimus vitae dolorum quibusdam exercitationem. Enim
            quisquam eos eum fuga ipsam doloremque molestias impedit
            necessitatibus voluptatem asperiores maxime porro hic doloribus
            harum temporibus, perspiciatis, qui dicta sunt nostrum cupiditate
            aliquam nobis similique? Dolores, unde nemo? Laboriosam eaque dolor
            quos.
          </Text>
        </Box>
      </BottomSheet>
    </Box>
  );
};

export { BSheet };
