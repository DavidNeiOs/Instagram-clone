import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from './src/themes/colors';
import {size} from './src/themes/fonts';

const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={[{color: colors.primary, fontSize: size.xlg}]}>
        Hello world
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

export default App;
