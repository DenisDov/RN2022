import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ModalfyParams } from 'react-native-modalfy';

import { Box, Text } from '../../theme';
import { PrimaryButton } from '../Button';

const ModalfyActionSheet = ({
  modal: { getParam, closeModal },
}: ModalfyParams) => {
  const { width } = useWindowDimensions();
  const title = getParam('title');
  const message = getParam('message');
  const { button1, button2, onPress, callback } = getParam('props');

  const onSubmit = async () => {
    await onPress();
    await callback();
    await closeModal();
  };

  return (
    <Box
      backgroundColor="background"
      borderRadius="m"
      padding="m"
      width={width}>
      <Text>{title}</Text>
      <Text marginBottom="m">{message}</Text>
      <Box flexDirection="row">
        <Box flex={1}>
          <PrimaryButton onPress={closeModal} label={button1} />
        </Box>

        {button2 && (
          <>
            <Box width={16} />

            <Box flex={1}>
              <PrimaryButton onPress={onSubmit} label={button2} />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

ModalfyActionSheet.modalOptions = {
  position: 'bottom',
  transitionOptions: animatedValue => ({
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1, 2, 3, 4],
          outputRange: [0, 1, 0.9, 0.6, 0],
        }),
      },
    ],
  }),
};

export { ModalfyActionSheet };
