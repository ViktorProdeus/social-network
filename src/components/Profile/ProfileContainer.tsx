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
            userId = '18407';
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
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

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export type MapPropsType = ReturnType<typeof mapStateToProps>

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

