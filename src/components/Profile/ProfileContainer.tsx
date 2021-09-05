import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileStateType = MapPropsType & mapDispatchToPropsType


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
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"} />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

type mapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

type MapPropsType = ReturnType<typeof mapStateToProps>


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
