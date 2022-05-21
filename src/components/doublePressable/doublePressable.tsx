import {FC} from 'react';
import {Pressable} from 'react-native';

interface DoublePressableProps {
  action: () => void;
}
export const DoublePressable: FC<DoublePressableProps> = ({
  children,
  action,
}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      action();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};
