import {FC} from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../themes/colors';

import {IPost} from '../../types/models';

interface FeedGridItemProps {
  item: IPost;
}

export const FeedGridItem: FC<FeedGridItemProps> = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        aspectRatio: 1,
        padding: 1,
        maxWidth: `${100 / 3}%`,
        position: 'relative',
      }}>
      <Image
        source={{uri: item.images ? item.images[0] : item.image}}
        style={{
          flex: 1,
        }}
      />
      {item.images && (
        <MaterialIcons
          name="collections"
          size={24}
          color={colors.white}
          style={{position: 'absolute', right: 5, top: 5}}
        />
      )}
    </View>
  );
};
