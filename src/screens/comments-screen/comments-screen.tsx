import {SafeAreaView, FlatList} from 'react-native';

import {Comment} from '../../components/comment';
import comments from '../../assets/data/comments.json';
import {Input} from './input';

export const CommentsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} style={{padding: 10}} showDetails />
        )}
      />
      <Input />
    </SafeAreaView>
  );
};
