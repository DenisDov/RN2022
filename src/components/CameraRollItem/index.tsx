import { PhotoIdentifier } from '@react-native-camera-roll/camera-roll';
import React from 'react';

import { Card, ImageBox, RectBox } from '../../theme';

const CameraRollItem = ({ item }: { item: PhotoIdentifier }) => {
  return (
    <RectBox
      flex={1}
      margin="xs"
      borderRadius="m"
      onPress={() => console.log(item.node.image.filename)}>
      <Card>
        <ImageBox
          source={{ uri: item.node.image.uri }}
          aspectRatio={1}
          borderRadius="m"
        />
      </Card>
    </RectBox>
  );
};

export { CameraRollItem };
