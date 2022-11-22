import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { ProgressBar } from '../../components/ProgressBar';
import { Box, ImageBox } from '../../theme';

const GalleryScreen = () => {
  const [photos, setPhotos] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    CameraRoll.getPhotos({ first: 20 })
      .then(r => {
        setPhotos(r.edges);
      })
      .catch(e => {
        console.log('CameraRollError', e);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box flex={1} backgroundColor="background" padding="m" alignItems="center">
      {loading ? (
        <Box position="absolute" left={0} right={0}>
          <ProgressBar indeterminate />
        </Box>
      ) : (
        <ScrollView>
          {photos.map((p, i) => {
            return (
              <ImageBox
                key={i}
                width={100}
                height={100}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView>
      )}
    </Box>
  );
};

export default GalleryScreen;
