import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const _colors = {
  active: '#5065ED',
  inactive: '#D4D4D6',
  knob: '#FFFFFF',
};

interface AnimatedSwitchProps {
  size: number;
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              right: 0,
              width: trackWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
            },
            animatedTrackStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              width: knobSize,
              height: knobSize,
              borderRadius: size / 2,
              backgroundColor: _colors.knob,
              shadowColor: 'shadow',
              shadowOpacity: 0.1,
              shadowOffset: { width: 1, height: 1 },
              shadowRadius: 1,
              elevation: 1,
            },
            animatedKnobStyle,
          ]}
        />
      </View>
    </Pressable>
  );
};

export { AnimatedSwitch };
