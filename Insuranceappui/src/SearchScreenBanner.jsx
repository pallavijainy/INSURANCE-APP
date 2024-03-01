import React from 'react';
import { View, Text } from 'react-native';
import CircularList from './shared/CircularList';

function SearchScreenbanner() {
  const data = [
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
    { id: 'ab' },
  ];
  const cardJsx = (props) => (
    <View className=" h-28 mx-5 my-8 bg-orange-500 items-center justify-center rounded-lg overflow-hidden">
      <Text>{props.index}</Text>
    </View>
  );
  return (
    <View className="">
      <CircularList  autoPlayInterval={2200} height={160} data={data}>
        {cardJsx}
      </CircularList>
    </View>
  );
}

export default SearchScreenbanner;
