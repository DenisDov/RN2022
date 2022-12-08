import React from 'react';
import { Dimensions } from 'react-native';
import { ModalfyParams } from 'react-native-modalfy';

import { Box, Text } from '../../theme';
import { PrimaryButton } from '../Button';

const { width, height } = Dimensions.get('window');

const ModalfyActionSheet = ({
  modal: { getParam, closeModal },
}: ModalfyParams) => {
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
  transitionOptions: (animatedValue: {
    interpolate: (arg0: { inputRange: number[]; outputRange: number[] }) => any;
  }) => ({
    // opacity: animatedValue.interpolate({
    //   inputRange: [0, 1, 2],
    //   outputRange: [0, 1, 0.9],
    // }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [height / 2, 0, 25],
        }),
      },
    ],
  }),
  // animateInConfig: {
  //   easing: Easing.bezier(0.42, -0.03, 0.27, 0.95),
  //   duration: 450,
  // },
  // animateOutConfig: {
  //   easing: Easing.bezier(0.42, -0.03, 0.27, 0.95),
  //   duration: 450,
  // },
};

export { ModalfyActionSheet };
