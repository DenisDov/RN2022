import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';
import { useFocusEffect } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

import { CameraRollItem } from '../../components/CameraRollItem';
import { requestReadPermission } from '../../components/CameraRollItem/androidPermission';
import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { Box, Text, theme } from '../../theme';

const EmptyGallery = () => {
  return (
    <Box>
      <Text>Can't find photos on device</Text>
    </Box>
  );
};

const GalleryScreen = () => {
  const [photos, setPhotos] = useState<PhotoIdentifier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const fetchPhotos = async () => {
        try {
          const hasPermission = await requestReadPermission();

          if (!hasPermission) {
            Alert.alert(
              'Permission denied!',
              'Camera does not have permission to read the media.',
            );
            return;
          }

          if (isActive) {
            const { edges } = await CameraRoll.getPhotos({ first: 60 });
            setPhotos(edges);
            setLoading(false);
          }
        } catch (e) {
          console.log('CameraRollError', e);
        }
      };

      fetchPhotos();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Gallery" noBack />
      <Box flex={1}>
        {loading ? (
          <Box position="absolute" left={0} right={0}>
            <ProgressBar indeterminate />
          </Box>
        ) : (
          <FlashList
            data={photos}
            renderItem={CameraRollItem}
            estimatedItemSize={60}
            keyExtractor={item => item.node.image.uri}
            numColumns={3}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyGallery}
          />
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: theme.spacing.s,
  },
});

export default GalleryScreen;
