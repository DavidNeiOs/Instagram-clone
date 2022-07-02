import React, {FC} from 'react';
import {FlatList, Image} from 'react-native';
import {IPost} from '../../types/models';
import {FeedGridItem} from './feed-grid-item';

interface FeedGridViewProps {
  posts: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}
export const FeedGridView: FC<FeedGridViewProps> = ({
  posts,
  ListHeaderComponent,
}) => {
  return (
    /* GridView Posts */
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedGridItem item={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{marginHorizontal: -1}}
    />
  );
};
