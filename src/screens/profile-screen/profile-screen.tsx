import {FlatList, Image} from 'react-native';

import {ProfileHeader} from './profile-header';
import {FeedGridView} from '../../components/feed-grid-view';
import user from '../../assets/data/user.json';

export const ProfileScreen = () => {
  return (
    /* GridView Posts */
    <FeedGridView
      posts={user.posts}
      ListHeaderComponent={() => <ProfileHeader user={user} />}
    />
  );
};
