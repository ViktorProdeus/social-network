import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ActionType, StateType} from "../../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch: (action: ActionType)=> void) => {
    return {
        updateNewPostText : (text: string) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost : () => {
            dispatch(addPostActionCreator());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

