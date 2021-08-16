import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

export type HeaderContainerPropsType = mapStateType & mapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.get().then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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
    setAuthUserData: (id: string, email: string, login: string) => void
}

const mapStateToProps = (state: StateType): mapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
