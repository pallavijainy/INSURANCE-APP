import React, { useState } from 'react';
import {
  View, Dimensions,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function CircularList(props) {
  const {
    children, data, width: _width, autoPlay, autoPlayInterval, height,
  } = props;
  const { width } = Dimensions.get('window');
  const [elementSelected, setElementSelected] = useState(0);
  const setCurrentElement = (prev) => {
    setElementSelected(prev);
  };

  return (
    <View >
      <Carousel
        width={width || _width}
        data={data}
        height={height || 100}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        renderItem={(item, index) => children(item, index)}
        onScrollEnd={(prev) => setCurrentElement(prev)}
      />
      <View className="flex-row mt-4 w-full justify-center">
        {
          data.map((element, index) => (
            <View className={`h-2 w-2 rounded-full mx-1 ${index === elementSelected ? 'bg-[#CE4133]' : 'bg-[#FED8CE]'}`} />
          ))
        }
      </View>
    </View>
  );
}

export default CircularList;





