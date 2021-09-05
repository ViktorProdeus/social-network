import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = mapStateType & mapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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
    getAuthUserData: () => void
}

const mapStateToProps = (state: StateType): mapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
