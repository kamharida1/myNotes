import { Text, View } from "@bacons/react-views";
import { useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postsSlice";

export default function EditPostForm() {
  const { postId } = useSearchParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const router = useRouter()

  const onTitleChanged = (text) => setTitle(text);
  const onContentChanged = (text) => setContent(text);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      router.back();
    }
  }

  return (
    <View>
      <Text>Edit Post</Text>
      <TextInput
        value={title}
        placeholder="Title"
        onChangeText={onTitleChanged}
      />
      <TextInput
        value={content}
        placeholder="Content"
        onChangeText={onContentChanged}
      />
      <Pressable onPress={onSavePostClicked}>
        <Text style={{ fontSize: 34 }}> Save Post</Text>
      </Pressable>
    </View>
  );

}