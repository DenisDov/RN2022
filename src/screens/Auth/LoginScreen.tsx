import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { Button } from '../../components/Button';
import { useLoginMutation } from '../../services/authApi';
import { Box, SafeAreaBox, Text } from '../../theme';

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

  const [login, { isLoading }] = useLoginMutation();

  const testCredentials = {
    username: 'kminchelle',
    password: '0lelpl',
  };

  const onSubmit = async credentials => {
    try {
      await login(testCredentials).unwrap();
    } catch (err) {
      console.log('ERR LOGIN', err);
      showMessage({
        message: 'Warn',
        description: 'Oh no, there was an error!',
        type: 'warning',
        autoHide: false,
        hideOnPress: true,
        position: 'bottom',
        floating: true,
      });
    }
  };

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
