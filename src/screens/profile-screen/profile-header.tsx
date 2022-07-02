import {FC} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/button/button';
import {IUser} from '../../types/models';

interface ProfileHeaderProps {
  user: IUser;
}
export const ProfileHeader: FC<ProfileHeaderProps> = ({user}) => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.headerRow}>
          {/* Profile image */}
          <Image source={{uri: user.image}} style={styles.avatar} />
          {/* Post, followers, following count */}
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>Posts</Text>
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>Followers</Text>
          </View>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>Following</Text>
          </View>
        </View>

        {/* name, bio */}
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.bio}</Text>

        {/* Buttons */}
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit profile"
            onPress={() => console.warn('on edit prof')}
          />
          <Button
            text="Another button"
            onPress={() => console.warn('on another')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
