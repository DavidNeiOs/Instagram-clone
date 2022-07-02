import {FC, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../themes/colors';
import {weight} from '../../themes/fonts';
import {IComment} from '../../types/models';

interface CommentProps {
  comment: IComment;
  showDetails: boolean;
}

export const Comment: FC<CommentProps> = ({comment, showDetails = false}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(val => !val);
  };
  return (
    <View style={styles.comment}>
      {showDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}

      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.userName}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {showDetails && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>reply</Text>
          </View>
        )}
      </View>

      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={liked ? 'heart' : 'hearto'}
          size={14}
          style={styles.icon}
          color={liked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {width: 40, aspectRatio: 1, borderRadius: 25, marginRight: 5},
  userName: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    lineHeight: 18,
  },
  mutedText: {
    color: colors.grey,
  },
  icon: {
    marginHorizontal: 5,
  },
  middleColumn: {flex: 1},
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
    color: colors.grey,
  },
});
