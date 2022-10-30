import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from './components/Button';

const App = () => {
  return (
    <SafeAreaView style={styles.scroll}>
      <View>
        <Text>LOL</Text>
        <Button />
      </View>
    </SafeAreaView>
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
