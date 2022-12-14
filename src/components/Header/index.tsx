import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box, Text } from '../../theme';
import { HEADER_HEIGHT } from '../../utils/constants';
import BackButton from './BackButton';

type Props = {
  main?: boolean;
  translucent?: boolean;
  noBack?: boolean;
  textTitle?: string;
};

const Header = ({ noBack, textTitle, translucent }: Props) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <>
      <Box
        height={insets.top}
        style={{
          backgroundColor: !translucent ? theme.colors.statusBar : undefined,
        }}
      />
      <Box
        backgroundColor={!translucent ? 'main' : undefined}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={[
          styles.header,
          { marginTop: translucent ? insets.top : undefined },
          translucent && styles.translucent,
        ]}>
        <Box width={56}>
          <Pressable
            hitSlop={16}
            onPress={() => {
              navigation.goBack();
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1,
              },
              { display: noBack ? 'none' : 'flex' },
            ]}>
            <BackButton />
          </Pressable>
        </Box>
        <Box flex={1} alignItems="center">
          {textTitle ? <Text variant="headerTitle">{textTitle}</Text> : null}
        </Box>
        <Box width={56} alignItems="flex-end" />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    zIndex: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  translucent: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    transform: [
      {
        rotate: '-135deg',
      },
    ],
  },
});

export { Header };
