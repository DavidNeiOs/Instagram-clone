import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../themes/colors';
import {weight} from '../../themes/fonts';
import {IComment} from '../../types/models';

interface CommentProps {
  comment: IComment;
}

export const Comment: FC<CommentProps> = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.userName}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontWeight: weight.bold,
    color: colors.black,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    lineHeight: 18,
  },
  mutedText: {
    color: colors.grey,
  },
  icon: {
    marginHorizontal: 5,
  },
});
