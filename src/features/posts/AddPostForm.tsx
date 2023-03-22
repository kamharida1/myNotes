import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button } from '../../etc/button';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  //console.log(users)

  const onTitleChanged = text => setTitle(text);
  const onContentChanged = text => setContent(text)
  const onAuthorChanged = value => setUserId(value)

  const onSavePostClicked = () => {
    if (title && content) {
       dispatch(postAdded(title, content, userId));
       setTitle("")
       setContent("")
       setUserId("")
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => {
    return {
      label:  user.name,
      value: user.id
    }
    
  });

  return (
    <View>
      <RNPickerSelect
        placeholder={{ label: "Select you favourite user", value: null }}
        onValueChange={onAuthorChanged}
        items={usersOptions}
      />
      <Text>AddPostForm</Text>
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
      <Pressable onPress={onSavePostClicked} disabled={!canSave}>
        <Text style={{ fontSize: 34 }}> Save Post</Text>
      </Pressable>
    </View>
  );
}

export default AddPostForm

const styles = StyleSheet.create({})