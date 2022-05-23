import {FC, useCallback, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
} from 'react-native';
import colors from '../../themes/colors';
import {DoublePressable} from '../doublePressable';

interface CarouselProps {
  images: string[];
  onDoublePress: () => void;
}
export const Carousel: FC<CarouselProps> = ({images, onDoublePress}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewAbilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index);
    }
  }, []);

  const {width} = useWindowDimensions();
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        viewabilityConfig={viewAbilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        data={images}
        renderItem={({item}) => (
          <DoublePressable action={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 25,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};
