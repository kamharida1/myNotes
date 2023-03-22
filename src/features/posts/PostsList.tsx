import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PostAuthor } from './PostAuthor.';
import HorizontalLine from '../../etc/horizontalLine';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(state => state.posts);
  const { width } = useWindowDimensions();
  const innerWindow = width - 48;
  const insets = useSafeAreaInsets();

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <View key={post.id}>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
      <Link
        href={{
          pathname: "/(app)/post/post_detail",
          params: {
            postId: post.id,
          },
        }}
        asChild
      >
        <Pressable>
              <Text style={{fontSize: 18, fontWeight:'200'}}> View Post</Text>
        </Pressable>
      </Link>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </View>
  ));
  
  return (
    <View>
      <Text>Posts</Text>
      {renderedPosts}
      
    </View>
  );
}

export default PostsList

const styles = StyleSheet.create({})