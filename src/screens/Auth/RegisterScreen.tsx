import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { PrimaryButton } from '../../components/Button';
import { Box, SafeAreaBox, Text } from '../../theme';

const RegisterScreen = () => {
  return (
    <SafeAreaBox flex={1}>
      <Box
        flex={1}
        backgroundColor="surface"
        padding="m"
        // marginTop="xl"
        borderTopLeftRadius="l"
        borderTopRightRadius="l">
        <Text variant="title">Register account</Text>
        <Box flex={1} justifyContent="center">
          <TextInput
            style={styles.input}
            // onBlur={onBlur}
            // onChangeText={onChange}
            // value={name}
            placeholder="Name*"
            // placeholderTextColor="#707070"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            // onBlur={onBlur}
            // onChangeText={onChange}
            // value={password}
            placeholder="password*"
            // placeholderTextColor="#707070"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <PrimaryButton
            label="Submit"
            onPress={() => console.log('REGISTER')}
          />
        </Box>
      </Box>
    </SafeAreaBox>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 6,
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

export default RegisterScreen;
