import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import theme from './theme';
import { Box } from './theme/Box';
import { Text } from './theme/Text';

import { Button } from './components/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.scroll}>
        <Box backgroundColor="mainBackground" padding="m">
          <Text>LOL</Text>
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
