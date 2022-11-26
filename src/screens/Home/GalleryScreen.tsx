import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useFocusEffect } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { CameraRollItem, ImageNode } from '../../components/CameraRollItem';
import { hasAndroidPermission } from '../../components/CameraRollItem/androidPermission';
import { ProgressBar } from '../../components/ProgressBar';
import { Box, theme } from '../../theme';

const GalleryScreen = () => {
  const [photos, setPhotos] = useState<ImageNode[]>([]);
  const [loading, setLoading] = useState<boolean | boolean>(true);

  const getPermissionAndroid = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      alert('Permission not granted');
      return;
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      getPermissionAndroid();
      if (isActive) {
        CameraRoll.getPhotos({ first: 60 })
          .then(r => {
            console.log('r: ', r);
            if ('edges' in r) {
              setPhotos(r.edges);
            }
          })
          .catch(e => {
            console.log('CameraRollError', e);
          })
          .finally(() => setLoading(false));
      }

      return () => {
        isActive = false;
        setLoading(true);
      };
    }, []),
  );

  return (
    <Box flex={1} backgroundColor="background">
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
        />
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: theme.spacing.s,
  },
});

export default GalleryScreen;
