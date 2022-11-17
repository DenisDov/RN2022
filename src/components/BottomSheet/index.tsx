import BottomSheet from '@gorhom/bottom-sheet';
import React, { useMemo, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '10%', '100%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export { BSheet };
