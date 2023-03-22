import { Text, View } from "@bacons/react-views"
import { Button, Pressable } from "react-native"
import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"

const reactionEmoji = { 
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '🧡',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Pressable
        onPress={() => 
          dispatch(reactionAdded({ postId: post.id, reaction: name}))
        }
        key={name}
      >
        <Text>
          {emoji} {post.reactions[name]}
        </Text>
      </Pressable>
    );
  })
  return <>{reactionButtons}</>;
}