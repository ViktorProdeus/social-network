import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

export type ProfileStateType = MapPropsType & mapDispatchToPropsType


type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileStateType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId as string;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        // console.log("RENDER PROFILE");
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }

}

type mapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

let mapStateToProps = (state: StateType) => {
    // console.log('mapStateToProps PROFILE');
    return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})
};

export type MapPropsType = ReturnType<typeof mapStateToProps>

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

