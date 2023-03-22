import { Text, View } from "@bacons/react-views";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EditPostForm from "../../../src/features/posts/EditPostForm";
import { postUpdated } from "../../../src/features/posts/postsSlice";

export default function EditPost() {
  const { postId } = useSearchParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const router = useRouter();

  const onTitleChanged = (text) => setTitle(text);
  const onContentChanged = (text) => setContent(text);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      router.back();
    }
  };

  return (
    <>
      <Stack.Screen options={{title: "Edit Post"}} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
        <TextInput
          value={title}
          placeholder="Title"
          onChangeText={onTitleChanged}
        />
        <TextInput
          value={content}
          placeholder="Content"
          onChangeText={onContentChanged}
          style={{marginTop: 10}}
        />
        <Pressable onPress={onSavePostClicked}>
          <Text style={{ paddingVertical: 8, fontSize: 20 }}> Save Post</Text>
        </Pressable>
      </View>
    </>
  );

}