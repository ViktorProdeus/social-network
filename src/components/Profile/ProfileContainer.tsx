import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

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
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

type mapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
});

type MapPropsType = ReturnType<typeof mapStateToProps>


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
