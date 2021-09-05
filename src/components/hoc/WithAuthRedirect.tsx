import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

let mapStateToPropsForRedirect = (state: StateType) => ({
    isAuth: state.auth.isAuth
})

type mapStateToPropsForRedirectType = ReturnType<typeof mapStateToPropsForRedirect>;

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: mapStateToPropsForRedirectType) {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}