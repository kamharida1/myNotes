import { Text, View } from "@bacons/react-views";
import { useAuth } from "../../context/auth";
import { Button } from "../../etc/button";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text> Router Notes</Text>
      <Button
        onPress={signIn}
        buttonStyle={{ backgroundColor: "dodgerblue", paddingHorizontal: 24 }}
        textStyle={{ fontSize: 24}}
      >
        Sign In
      </Button>
    </View>
  )
}