import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";

export type HeaderContainerPropsType = mapStateType & mapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

type mapStateType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchType = {
    logout:  () => void
}

const mapStateToProps = (state: StateType): mapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, {logout})(HeaderContainer);
