import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '75fc0168-77aa-4b14-b644-112f55634dfc',
    title: 'illo nulla aliquid',
    description:
      'accusantium voluptas nobis qui repellat perferendis distinctio hic labore deleniti',
    background: 'navy',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: '5e19ee8e-178c-40d9-8e8b-02d5b73ea3a9',
    title: 'possimus sequi incidunt',
    description:
      'nobis aperiam aut maiores rerum hic doloribus repellendus labore animi',
    background: 'olive',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: 'c0f6cd63-289f-4266-94c1-92ae8a5f022b',
    title: 'possimus odit placeat',
    description:
      'ullam vero totam fuga quam illum laudantium suscipit eaque autem',
    background: 'tomato',
    image: 'https://loremflickr.com/640/480/abstract',
  },
  {
    id: '338048ed-9cb0-401e-af53-db6bd19a45d9',
    title: 'est asperiores ex',
    description:
      'consequatur ipsa enim ab delectus doloribus voluptatibus facere doloribus sapiente',
    background: 'indigo',
    image: 'https://loremflickr.com/640/480/abstract',
  },
];

const Onboarding = () => {
  return (
    <FlatList
      data={slides}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              width,
              height,
              backgroundColor: item.background,
              padding: 16,
            }}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: item.image,
                }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          </View>
        );
      }}
      horizontal
      pagingEnabled
      bounces={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.id)}
    />
  );
};

export { Onboarding };

const styles = StyleSheet.create({});
