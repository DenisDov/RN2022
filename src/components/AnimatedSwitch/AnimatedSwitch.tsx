import React, { useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const _colors = {
  active: '#5065ED',
  inactive: '#D4D4D6',
  knob: '#FFFFFF',
  shadow: '#121212',
};

interface AnimatedSwitchProps {
  size?: number;
  onPress: () => void;
  isActive: boolean;
}

const AnimatedSwitch = ({
  size = 40,
  onPress,
  isActive,
}: AnimatedSwitchProps) => {
  const trackWidth = useMemo(() => size * 1.3, [size]);
  const trackHeight = useMemo(() => size * 0.8, [size]);
  const knobSize = useMemo(() => size * 0.7, [size]);

  const animatedTrackStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: isActive
        ? withTiming(_colors.active)
        : withTiming(_colors.inactive),
    };
  });

  const animatedKnobStyle = useAnimatedStyle(() => {
    const endPos = -2;
    const startPos = -trackWidth + knobSize + 2;
    return {
      transform: [
        {
          translateX: isActive ? withTiming(endPos) : withTiming(startPos),
        },
      ],
    };
  });

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.track,
            {
              width: trackWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
            },
            animatedTrackStyle,
          ]}
        />
        <Animated.View
          style={[
            styles.knob,
            {
              width: knobSize,
              height: knobSize,
              borderRadius: size / 2,
            },
            animatedKnobStyle,
          ]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    position: 'absolute',
    right: 0,
  },
  knob: {
    backgroundColor: _colors.knob,
    shadowColor: _colors.shadow,
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    elevation: 1,
  },
});

export { AnimatedSwitch };
