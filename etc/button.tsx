import { Pressable, View, Text } from "react-native";

export function ToggleButton({
  children,
  selected,
  onPress }: {
    children: string;
    selected: boolean;
    onPress: () => void;
  }) {
  return (
    <Button
      onPress={onPress}
      style={{ marginRight: 8 }}
      buttonStyle={{backgroundColor: selected ? "#F29938" : "#D1D1D6"}}
    >
      {children}
    </Button>
  )
};

export function Button({
  children,
  onPress,
  style,
  buttonStyle,
  textStyle,
}: {
    children: string;
    onPress: () => void;
    style?: any;
    buttonStyle?: any;
    textStyle?: any;
}) {
  return (
    <Pressable>
      {({ pressed, hovered }) => (
        <View
          style={[
            {
              borderRadius: 11,
              paddingHorizontal: 8,
              paddingVertical: 14,
              justifyContent: 'center',
              alignItems: 'center',
            },
              buttonStyle,
              hovered && { opacity: 0.8 },
              pressed && { opacity: 0.6}
          ]}
        >
          <Text
            selectable={false}
            style={[
              { color: "white", fontSize: 16, textAlign: 'center' },
              textStyle,
            ]}
          >
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
}