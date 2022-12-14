import { PermissionsAndroid, Platform } from 'react-native';

export const requestReadPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
  if (permission == null) {
    return false;
  }
  let hasPermission = await PermissionsAndroid.check(permission);
  if (!hasPermission) {
    const permissionRequestResult = await PermissionsAndroid.request(
      permission,
    );
    hasPermission = permissionRequestResult === 'granted';
  }
  return hasPermission;
};
