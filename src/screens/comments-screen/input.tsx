import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import colors from '../../themes/colors';
import {size} from '../../themes/fonts';

export const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    console.warn('posting comment:', newComment);
    setNewComment('');
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        placeholder="Write a comment..."
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />
      <Pressable onPress={onPost}>
        <Text style={styles.button}>POST</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.lightgrey,
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    borderRadius: 25,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: size.md,
    color: colors.primary,
  },
});
