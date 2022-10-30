import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { theme, Box, Text } from './theme';

import { Button } from './components/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.scroll}>
        <Box backgroundColor="mainBackground" padding="m">
          <Text variant="header">Ralewayy</Text>
          <Text>Whereas recognition of the inherent dignity</Text>
          <Button />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F123',
  },
});

export default App;
