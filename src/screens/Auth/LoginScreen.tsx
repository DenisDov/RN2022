import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import * as yup from 'yup';

import { Images } from '../../assets';
import { Button } from '../../components/Button';
import { useLoginMutation } from '../../services/authApi';
import {
  Box,
  Card,
  ImageBackgroundBox,
  SafeAreaBox,
  Text,
  theme,
} from '../../theme';

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
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const testCredentials = {
    username: 'kminchelle',
    password: '0lelplR',
  };

  const handleLogin = async credentials => {
    try {
      await login(testCredentials).unwrap();
    } catch (error) {
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
              👋 Welcome
            </Text>
            <Box marginBottom="m">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="username*"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )}
                name="username"
              />

              {errors.username && (
                <Text style={styles.error}>{errors.username?.message}</Text>
              )}
            </Box>

            <Box marginBottom="m">
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="password*"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                )}
                name="password"
              />

              {errors.password && (
                <Text style={styles.error}>{errors.password?.message}</Text>
              )}
            </Box>

            <Button
              primary
              text="Login"
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
            />
          </Card>
        </KeyboardAvoidingView>
      </SafeAreaBox>
    </ImageBackgroundBox>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: theme.spacing.xs,
    fontSize: 18,
    fontFamily: 'Raleway-Regular',
    height: theme.spacing.xl,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.main,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
  },
});

export default LoginScreen;
