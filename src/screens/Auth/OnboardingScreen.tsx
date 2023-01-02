import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { Images } from '../../assets';
import { Text } from '../../theme';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '75fc0168-77aa-4b14-b644-112f55634dfc',
    title: 'illo nulla aliquid',
    description:
      'accusantium voluptas nobis qui repellat perferendis distinctio hic labore deleniti',
    background: '#09007F',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: '5e19ee8e-178c-40d9-8e8b-02d5b73ea3a9',
    title: 'possimus sequi incidunt',
    description:
      'nobis aperiam aut maiores rerum hic doloribus repellendus labore animi',
    background: '#7F8001',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: 'c0f6cd63-289f-4266-94c1-92ae8a5f022b',
    title: 'possimus odit placeat',
    description:
      'ullam vero totam fuga quam illum laudantium suscipit eaque autem',
    background: '#FF6346',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: '338048ed-9cb0-401e-af53-db6bd19a45d9',
    title: 'est asperiores ex',
    description:
      'consequatur ipsa enim ab delectus doloribus voluptatibus facere doloribus sapiente',
    background: '#4B0082',
    image: 'https://loremflickr.com/640/480/abstract',
  },
];

const OnboardingScreen = () => {
  const translationX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationX.value = event.contentOffset.x;
  });

  const animatedBgColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translationX.value,
      slides.map((_, i) => i * width), // [0, 375, 750, 1125]
      slides.map(s => s.background), // ['#09007F', '#7F8001', '#FF6346', '#4B0082']
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.FlatList
      data={slides}
      renderItem={({ item }) => {
        return (
          <Animated.View
            style={[
              animatedBgColor,
              {
                flex: 1,
                width,
                padding: 16,
              },
            ]}>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: item.image,
                }}
                defaultSource={Images.dummy}
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 16,
                }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text variant="welcomeTitle" marginBottom="l">
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </Animated.View>
        );
      }}
      horizontal
      pagingEnabled
      bounces={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={32}
      onScroll={scrollHandler}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
