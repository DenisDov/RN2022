import React from 'react';

import { Box, Card, Text } from '../../theme';
import { Button } from '../Button';

const ConfirmModal = ({ modal: { getParam, closeModal } }) => {
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
            <Button onPress={closeModal} text={button1} />
          </Box>

          {button2 && (
            <>
              <Box width={16} />

              <Box flex={1}>
                <Button onPress={onSubmit} text={button2} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export { ConfirmModal };
