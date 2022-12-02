import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useModal } from 'react-native-modalfy';

import { OutlineButton, PrimaryButton } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { logOut } from '../../../features/auth/authSlice';
import { Counter } from '../../../features/counter/Counter';
import { useAppDispatch } from '../../../hooks/store';
import { Box, ScrollBox, Text, theme } from '../../../theme';

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
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="HomeStack" noBack />
      <ScrollBox
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Text variant="title">Raleway</Text>
        <Text marginBottom="m">
          Whereas recognition of the inherent dignity
        </Text>

        <PrimaryButton
          label="Playground"
          onPress={() => navigation.navigate('Playground')}
        />

        <Counter />

        <Text marginBottom="m">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          mollitia reprehenderit, molestiae repellendus ipsum quas. Placeat
          laudantium minus iure neque?
        </Text>

        <PrimaryButton
          label="Go to products"
          onPress={() => navigation.navigate('Products')}
        />
        <Box height={16} />
        <PrimaryButton
          label="Go to profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Box height={16} />
        <OutlineButton label="Logout" onPress={handleLogout} />
      </ScrollBox>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: theme.spacing.m,
  },
});

export default HomeScreen;
