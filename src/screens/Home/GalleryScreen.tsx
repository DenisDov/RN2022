import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { useFocusEffect } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, StyleSheet } from 'react-native';

import { ProgressBar } from '../../components/ProgressBar';
import { Box, Card, ImageBox, RectButtonBox, theme } from '../../theme';

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  console.log('hasPermission: ', hasPermission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  console.log('status: ', status);
  return status === 'granted';
}

// useFocusEffect(
//   React.useCallback(() => {
//     let isActive = true;

//     const fetchUser = async () => {
//       try {
//         const user = await API.fetch({ userId });

//         if (isActive) {
//           setUser(user);
//         }
//       } catch (e) {
//         // Handle error
//       }
//     };

//     fetchUser();

//     return () => {
//       isActive = false;
//     };
//   }, [userId])
// );

const GalleryScreen = () => {
  // const [granted, setGranted] = useState<boolean>(false);
  const [photos, setPhotos] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  // useEffect(() => {
  //   console.log('EFF');
  //   getPermissionAndroid();
  //   setLoading(true);
  //   CameraRoll.getPhotos({ first: 60 })
  //     .then(r => {
  //       // console.log('r: ', r);
  //       if ('edges' in r) {
  //         setPhotos(r.edges);
  //       }
  //     })
  //     .catch(e => {
  //       console.log('CameraRollError', e);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  const renderItem = ({ item }) => {
    // console.log('item: ', item);
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

  return (
    <Box flex={1} backgroundColor="background">
      {loading ? (
        <Box position="absolute" left={0} right={0}>
          <ProgressBar indeterminate />
        </Box>
      ) : (
        <FlashList
          data={photos}
          renderItem={renderItem}
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
