import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import React, { useCallback, useMemo, useRef } from 'react';
import { useModal } from 'react-native-modalfy';

import { PrimaryButton } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const ActionSheetsScreen = () => {
  const theme = useTheme();
  // Modalfy
  const { openModal } = useModal();
  const handleOpenModalfy = async () => {
    openModal('ModalfyActionSheet', {
      title: 'Title',
      message: 'Message.',
      props: {
        button1: 'Cancel',
        button2: null,
        onPress: () => null,
        callback: () => null,
      },
    });
  };

  // Gorhom
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%', '30%'], []);
  const handleOpenGorhom = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseGorhom = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="ActionSheets" />
      <Box flex={1} padding="m">
        <PrimaryButton label="Open Modalfy" onPress={handleOpenModalfy} />
        <Box height={16} />
        <PrimaryButton label="Open Gorhom" onPress={handleOpenGorhom} />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{
            backgroundColor: theme.colors.background,
          }}>
          <Box flex={1} padding="m">
            <Text>Awesome 🎉</Text>
            <PrimaryButton
              label="Confirm"
              onPress={() => console.log('Confirm')}
            />
            <Box height={16} />
            <PrimaryButton label="Close" onPress={handleCloseGorhom} />
          </Box>
        </BottomSheetModal>
      </Box>
    </Box>
  );
};

export default ActionSheetsScreen;
