import { Text, View } from "@bacons/react-views";
import { Link, Stack, useSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { PostAuthor } from "../../../src/features/posts/PostAuthor.";

export default function PostDetail() {
  const { postId } = useSearchParams();

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  );
  //console.log(post)
  
  if (!post) {
    return (
      <>
        <Stack.Screen options={{ title: "Not Found!" }} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Post not found!
          </Text>
        </View>
      </>
    )
  }

  return (
    <>
      <Stack.Screen options={{ title: post.id || post.title }} />
      <View style={{ flex: 1, padding: 30, alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#111" }}>{post.title}</Text>
        <Text style={{ fontSize: 16, color: "#808080" }}>{post.content}</Text>
        <Link
          style={{ marginVertical: 16 }}
          href={{
            pathname: "/(app)/post/edit_post",
            params: {
              postId: post.id,
            },
          }}
        >
          Edit Post
        </Link>
        <PostAuthor userId={post.userId} />
      </View>
    </>
  );
}