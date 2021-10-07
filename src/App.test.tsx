import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import profileReducer, { addPostActionCreator, ProfileType } from "./redux/profile-reducer";
import { v1 } from "uuid";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('authAPI testing', () => {
  // Data
  const state = {
    posts: [
      {id: v1(), message: 'Hi, how are you?', likeCount: 3},
      {id: v1(), message: 'How is your it-camasutra?', likeCount: 13},
    ],

    profile: null as ProfileType | null,
    status: '',
  }
 // Bll
const action = addPostActionCreator("text");

const endState = profileReducer(state, action)

// result
expect(endState.posts[0].message).toBe("text")
expect(endState.posts[0].message).not.toBe(state.posts[0].message)
});
