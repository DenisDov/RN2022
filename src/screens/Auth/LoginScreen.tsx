import { yupResolver } from '@hookform/resolvers/yup';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Linking, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { Images } from '../../assets';
import { AuthInput } from '../../components/AuthInput';
import { PrimaryButton } from '../../components/Button';
import { Header } from '../../components/Header';
import { selectThemeMode } from '../../features/auth/authSlice';
import { useAppSelector } from '../../hooks/store';
import { LoginRequest, useLoginMutation } from '../../services/authApi';
import { Box, Card, ImageBackgroundBox, SafeAreaBox, Text } from '../../theme';

type FormData = {
  username: string;
  password: string;
  agreement: boolean;
};

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
    agreement: yup
      .boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
  })
  .required();

const LoginScreen = () => {
  const isDarkMode = useAppSelector(selectThemeMode);
  const BG = isDarkMode ? Images.EXVO : Images.unsplash;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: 'kminchelle',
      password: '0lelplR',
      agreement: false,
    },
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (credentials: LoginRequest) => {
    delete credentials.agreement;
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
    <ImageBackgroundBox flex={1} source={BG} resizeMode="cover">
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
                name="username"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AuthInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="username*"
                  />
                )}
              />

              {errors.username ? (
                <Text fontSize={14} color="error">
                  {errors.username?.message}
                </Text>
              ) : null}
            </Box>

            <Box marginBottom="m">
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <AuthInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="password*"
                  />
                )}
              />

              {errors.password ? (
                <Text fontSize={14} color="error">
                  {errors.password?.message}
                </Text>
              ) : null}
            </Box>
            <Box marginBottom="m">
              <Box flexDirection="row" alignItems="center">
                <Controller
                  name="agreement"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckBox value={value} onValueChange={onChange} />
                  )}
                />
                <Text marginLeft="s">
                  I accept the{' '}
                  <Text
                    color="main"
                    textDecorationLine="underline"
                    onPress={() =>
                      Linking.openURL(
                        'https://reactnative.directory/?search=checkbox',
                      )
                    }>
                    terms and conditions
                  </Text>
                </Text>
              </Box>
              {errors.agreement ? (
                <Text fontSize={14} color="error">
                  {errors.agreement?.message}
                </Text>
              ) : null}
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
