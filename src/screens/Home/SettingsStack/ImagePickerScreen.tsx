import React from 'react';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import { PrimaryButton } from '../../../components/Button';
import { Header } from '../../../components/Header';
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
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Image picker" />
      <Box flex={1} padding="m">
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

        <PrimaryButton label="Pick image" onPress={handlePickImage} />
      </Box>
    </Box>
  );
};

export default ImagePickerScreen;
