import React from 'react';
import { ModalfyParams } from 'react-native-modalfy';

import { Box, Card, Text } from '../../theme';
import { PrimaryButton } from '../Button';

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
    <Card>
      <Box
        backgroundColor="background"
        borderRadius="m"
        padding="m"
        width={320}>
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
    </Card>
  );
};

export { ModalfyActionSheet };
