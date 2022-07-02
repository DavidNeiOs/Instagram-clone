import {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../themes/colors';
import {size, weight} from '../../themes/fonts';

interface CustomInputProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({label, placeholder, multiline}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      multiline={multiline}
    />
  </View>
);

export const EditProfileScreen = () => {
  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <SafeAreaView>
      <View style={styles.page}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <Text style={styles.textButton}>Change profile photo</Text>
        <CustomInput label="Name" />
        <CustomInput label="Username" />
        <CustomInput label="Website" />
        <CustomInput label="Bio" multiline />

        <Text style={styles.textButton} onPress={onSubmit}>
          Submit
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: size.md,
    fontWeight: weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  label: {
    color: colors.grey,
    width: 75,
  },
  textInput: {
    flex: 1,
    borderColor: colors.lightgrey,
    borderBottomWidth: 1,
  },
});
