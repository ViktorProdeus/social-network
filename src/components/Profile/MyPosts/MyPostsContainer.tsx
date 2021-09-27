import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { StateType } from "../../../redux/redux-store";
import { connect } from "react-redux";
import { PostType } from "./Post/Post";
import { Dispatch } from "redux";

type MapStateToPropsType = {
    posts: PostType[]
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void
}


const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost : (text: string) => {
            dispatch(addPostActionCreator(text));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

