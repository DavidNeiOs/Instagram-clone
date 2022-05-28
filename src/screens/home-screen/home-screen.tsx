import {useCallback, useState} from 'react';
import {SafeAreaView, FlatList, ViewabilityConfig} from 'react-native';
import {FeedPost} from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

export const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const viewAbilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActivePostId(viewableItems[0].item.id);
    }
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} isVisible={activePostId === item.id} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewAbilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </SafeAreaView>
  );
};
