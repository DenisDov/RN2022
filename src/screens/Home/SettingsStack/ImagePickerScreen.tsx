import React from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import { Button } from '../../../components/Button';
import { Box, ImageBox } from '../../../theme';

const options: ImageLibraryOptions = {
  mediaType: 'photo',
};

const ImagePickerScreen = () => {
  const [response, setResponse] = React.useState<any>(null);

  const handlePickImage = async () => {
    const result = await launchImageLibrary(options);
    setResponse(result);
  };

  return (
    <Box padding="m">
      {response?.assets &&
        response?.assets.map(({ uri }: { uri: string }) => (
          <Box key={uri} alignItems="center" marginBottom="m">
            <ImageBox
              resizeMode="cover"
              resizeMethod="scale"
              source={{ uri }}
              width={200}
              height={200}
            />
          </Box>
        ))}
      <Button text="Pick image" primary onPress={handlePickImage} />
    </Box>
  );
};

export default ImagePickerScreen;
