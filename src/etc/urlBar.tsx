import { usePathname } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text} from "react-native";

export function UrlBbar() {
  const pathname = usePathname();
  const { bottom } = useSafeAreaInsets();
  return (
    <View>
      <Text>
        {pathname}
      </Text>
    </View>
  )
}