import React from 'react';
import { View, TextInput, Alert, StyleSheet } from 'react-native';
import { SafeAreaBox, Box, Text } from '@theme';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '../../components/Button';

import { useLoginMutation } from '../../services/authApi';
import { setCredentials } from '../../features/auth/authSlice';
import { useAppDispatch } from '../../hooks/redux';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [login, { isLoading, error: loginError }] = useLoginMutation();
  // const useQueryStateResult = api.endpoints.login.useQueryState();
  // console.log('useQueryStateResult: ', useQueryStateResult);
  // console.log('data: ', data);
  // const onSubmit = credentials => login(credentials);
  // const onSubmit = credentials =>
  //   login({
  //     username: 'kminchelle',
  //     password: '0lelplR',
  //   });
  const onSubmit = async credentials => {
    login({
      username: 'kminchelle',
      password: '0lelplR',
    });
    // try {
    //   const userData = await login({
    //     username: 'kminchelle',
    //     password: '0lelplR',
    //   });
    //   console.log('userData: ', userData);
    //   dispatch(setCredentials(userData));
    // } catch (err) {
    //   console.log('err: ', err);
    // }
  };

  if (loginError) {
    console.log('ERR', loginError);
  }

  console.log('isLoading: ', isLoading);

  return (
    <SafeAreaBox flex={1}>
      <Box padding="m">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />

        <Button
          text="Submit"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />
      </Box>
    </SafeAreaBox>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 8,
    fontSize: 18,
    // color: '#ffffff',
    paddingLeft: 10,
    height: 44,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
