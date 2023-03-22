import { StyleSheet, Text, View } from "@bacons/react-views";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Button } from "../../../src/etc/button";

export default function Note() {
  const { note } = useSearchParams();
 
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Note"}} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Item title="Note">Title</Item>
          <Item title="Content">Content</Item>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            onPress={() => {
             
            }}
            buttonStyle={{ backgroundColor: "crimson" }}
          >
            Delete
          </Button>
        </View>
      </View>
    </>
  );
}

function Item({ title, children }) {
  return (
    <View style={{ paddingVertical: 12 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
