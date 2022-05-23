import {FC, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {DoublePressable} from '../doublePressable';
import {Carousel} from '../carousel';
import {styles} from './styles';
import colors from '../../themes/colors';
import {IPost} from '../../types/models';
import {Comment} from '../comment';

export interface FeedpostProps {
  post: IPost;
}

export const FeedPost: FC<FeedpostProps> = ({post}) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const {image, createdAt, description, nofComments, nofLikes, user, comments} =
    post;

  const toggleIsDescriptionShown = () => {
    setIsDescriptionShown(state => !state);
  };

  const toggleLike = () => {
    setIsLiked(state => !state);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable action={toggleLike}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      {content}
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>someone</Text> and{' '}
          <Text style={styles.bold}>{nofLikes} others</Text>
        </Text>

        {/* Post desctiptoin */}
        <Text numberOfLines={isDescriptionShown ? 0 : 3} style={styles.text}>
          <Text style={styles.userName}>{user.username}</Text>{' '}
          <Text>{description}</Text>
        </Text>
        <Text style={styles.bold} onPress={toggleIsDescriptionShown}>
          {isDescriptionShown ? 'Show less' : 'Show more'}
        </Text>

        {/* Comments */}
        {comments.length > 2 ? (
          <Text style={styles.mutedText}>View all {nofComments} comments</Text>
        ) : null}
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        {/* Post date */}
        <Text style={styles.mutedText}>{createdAt}</Text>
      </View>
    </View>
  );
};
