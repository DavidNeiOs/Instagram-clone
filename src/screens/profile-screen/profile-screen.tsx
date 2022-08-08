import {ProfileHeader} from './profile-header';
import {FeedGridView} from '../../components/feed-grid-view';
import user from '../../assets/data/user.json';
import {useNavigation, useRoute} from '@react-navigation/native';

export const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  if (route.params) {
    navigation.setOptions({title: route.params.userId});
  }

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    /* GridView Posts */
    <FeedGridView
      posts={user.posts}
      ListHeaderComponent={() => (
        <ProfileHeader user={user} onEditPress={navigateToEditProfile} />
      )}
    />
  );
};
