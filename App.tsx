import {SafeAreaView, FlatList} from 'react-native';
import {FeedPost} from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default App;
