import { Text, View } from "@bacons/react-views";
import { Stack } from "expo-router";
import AddPostForm from "../../../src/features/posts/AddPostForm";
import PostsList from "../../../src/features/posts/PostsList";

export default function Post() {
  return (
    <>
      <Stack.Screen options={{title: "Posts"}} />
      <View style={{ flex: 1, alignItems: 'center'}}>
        
          <AddPostForm />
          <PostsList />
      </View>
    </>
  )
}