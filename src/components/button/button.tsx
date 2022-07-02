import {FC} from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import colors from '../../themes/colors';
import {weight} from '../../themes/fonts';

interface ButtonProps {
  text?: string;
  onPress?: () => void;
}

export const Button: FC<ButtonProps> = props => {
  const {text = '', onPress = () => {}} = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: weight.semi,
  },
});
