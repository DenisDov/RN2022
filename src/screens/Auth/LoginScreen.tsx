import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { Images } from '../../assets';
import { AuthInput } from '../../components/AuthInput';
import { PrimaryButton } from '../../components/Button';
import { Header } from '../../components/Header';
import { LoginRequest, useLoginMutation } from '../../services/authApi';
import { Box, Card, ImageBackgroundBox, SafeAreaBox, Text } from '../../theme';

const schema = yup
  .object({
    username: yup
      .string()
      .min(3, ({ min }) => `at least ${min} characters`)
      .required(),
    password: yup
      .string()
      .min(6, ({ min }) => `at least ${min} characters`)
      .required(),
  })
  .required();

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'kminchelle',
      password: '0lelplR',
    },
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (credentials: LoginRequest) => {
    try {
      await login(credentials).unwrap();
    } catch (error: any) {
      // console.log(JSON.stringify(error, null, 2));
      showMessage({
        message: error.status,
        description: error.error,
        type: 'warning',
        autoHide: true,
        hideOnPress: true,
        position: 'bottom',
        floating: true,
      });
    }
  };

  return (
    <ImageBackgroundBox flex={1} source={Images.unsplash} resizeMode="cover">
      <Header translucent />
      <SafeAreaBox flex={1} justifyContent="center">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Card
            variant="submitForm"
            margin="m"
            paddingHorizontal="m"
            paddingTop="l"
            paddingBottom="xl">
            <Text variant="title" marginBottom="m">
              👋 Login
            </Text>
            <Box marginBottom="m">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AuthInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="username*"
                  />
                )}
                name="username"
              />

              {errors.username && (
                <Text fontSize={14} color="error">
                  {errors.username?.message}
                </Text>
              )}
            </Box>

            <Box marginBottom="m">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AuthInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="password*"
                  />
                )}
                name="password"
              />

              {errors.password && (
                <Text fontSize={14} color="error">
                  {errors.password?.message}
                </Text>
              )}
            </Box>

            <PrimaryButton
              label="Login"
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
            />
          </Card>
        </KeyboardAvoidingView>
      </SafeAreaBox>
    </ImageBackgroundBox>
  );
};

export default LoginScreen;
