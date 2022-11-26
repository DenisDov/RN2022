import { PermissionsAndroid } from 'react-native';

export async function hasAndroidPermission() {
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
