import React from 'react';

import { Card, ImageBox, RectButtonBox } from '../../theme';

export interface Image {
  fileSize: number;
  filename: string;
  height: number;
  playableDuration?: any;
  uri: string;
  width: number;
}

export interface ImageNode {
  node: {
    group_name: string;
    image: Image;
    location?: any;
    timestamp: number;
    type: string;
  };
}

const CameraRollItem = ({ item }: { item: ImageNode }) => {
  return (
    <RectButtonBox
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
    </RectButtonBox>
  );
};

export { CameraRollItem };
