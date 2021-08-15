import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";

export type ProfileStateType = MapPropsType & mapDispatchToPropsType
export type ProfileInfoType = MapPropsType

class ProfileContainer extends React.Component<ProfileStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${10}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

type MapPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
