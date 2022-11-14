import React from 'react';
import {
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaBox, Box, Text } from '../../theme';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '../../components/Button';

import { useLoginMutation } from '../../services/authApi';

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
  });

  const [login, { isLoading, error: loginError }] = useLoginMutation();

  const testCredentials = {
    username: 'kminchelle',
    password: '0lelplR',
  };

  const onSubmit = (credentials = testCredentials) => {
    login(credentials);
  };

  if (loginError) {
    console.log('loginError: ', loginError);
    // alert(loginError?.status);
  }

  return (
    <SafeAreaBox flex={1} justifyContent="flex-end">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
      </KeyboardAvoidingView>
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
