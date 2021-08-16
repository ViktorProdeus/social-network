import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileStateType = MapPropsType & mapDispatchToPropsType
export type ProfileInfoType = MapPropsType


type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileStateType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '18407';
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
