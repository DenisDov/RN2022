import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useModal } from 'react-native-modalfy';

import { Button } from '../../../components/Button';
import { logOut } from '../../../features/auth/authSlice';
import { Counter } from '../../../features/counter/Counter';
import { useAppDispatch } from '../../../hooks/store';
import { Box, Text } from '../../../theme';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { openModal } = useModal();

  const handleLogout = async () => {
    openModal('ConfirmModal', {
      title: 'Logout',
      message: 'Are you sure?',
      props: {
        button1: 'Cancel',
        button2: 'Confirm',
        onPress: () => dispatch(logOut()),
        callback: () => null,
      },
    });
  };

  return (
    <Box padding="m" flex={1} backgroundColor="background">
      <Text variant="title">Raleway</Text>
      <Text marginBottom="m">Whereas recognition of the inherent dignity</Text>

      <Button
        text="Playground"
        onPress={() => navigation.navigate('Playground')}
      />

      <Counter />

      <Text marginBottom="m">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        mollitia reprehenderit, molestiae repellendus ipsum quas. Placeat
        laudantium minus iure neque?
      </Text>

      <Button
        text="Go to products"
        onPress={() => navigation.navigate('Products')}
      />
      <Box height={16} />
      <Button
        text="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Box height={16} />
      <Button outline text="Logout" onPress={handleLogout} />

      {/* <Hamburger color="red" /> */}
    </Box>
  );
};

export default HomeScreen;
