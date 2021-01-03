import React from "react";
import {actions} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(actions.addPostActionCreate(newPostText));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;