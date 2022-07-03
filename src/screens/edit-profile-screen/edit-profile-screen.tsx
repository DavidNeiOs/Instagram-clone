import {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  useForm,
  Controller,
  Control,
  UseControllerProps,
  SubmitHandler,
} from 'react-hook-form';

import user from '../../assets/data/user.json';
import colors from '../../themes/colors';
import {size, weight} from '../../themes/fonts';
import {IUser} from '../../types/models';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUser = Pick<IUser, 'name' | 'username' | 'website' | 'bio'>;

interface CustomInputProps {
  control: Control<IEditableUser, object>;
  label: string;
  name: keyof IEditableUser;
  placeholder?: string;
  multiline?: boolean;
  rules?: UseControllerProps['rules'];
}

const CustomInput: FC<CustomInputProps> = ({
  control,
  label,
  placeholder,
  multiline,
  name,
  rules,
}) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={{flex: 1}}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[
              styles.textInput,
              {borderColor: error ? colors.accent : colors.lightgrey},
            ]}
            placeholder={placeholder}
            multiline={multiline}
          />
          {error && <Text style={{color: colors.accent}}>{error.message}</Text>}
        </View>
      </View>
    )}
  />
);

export const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit: SubmitHandler<IEditableUser> = data => {
    console.log('submit', data);
  };

  return (
    <SafeAreaView>
      <View style={styles.page}>
        <Image source={{uri: user.image}} style={styles.avatar} />
        <Text style={styles.textButton}>Change profile photo</Text>
        <CustomInput
          control={control}
          name="name"
          rules={{required: 'Name is required'}}
          label="Name"
        />
        <CustomInput
          control={control}
          name="username"
          rules={{
            required: 'username is required',
            minLength: {
              value: 3,
              message: 'Should be at least 3 characters',
            },
          }}
          label="Username"
        />
        <CustomInput
          control={control}
          name="website"
          rules={{
            required: 'website is required',
            pattern: {
              value: URL_REGEX,
              message: 'wrong website address',
            },
          }}
          label="Website"
        />
        <CustomInput
          control={control}
          name="bio"
          rules={{
            required: 'bio is required',
            maxLength: {
              value: 200,
              message: 'Should be less than 200 characters',
            },
          }}
          label="Bio"
          multiline
        />

        <Text style={styles.textButton} onPress={handleSubmit(onSubmit)}>
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
    borderBottomWidth: 1,
  },
});
