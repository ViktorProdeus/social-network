import React from 'react';
import './App.css';
import { HashRouter, Redirect, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import store, { StateType } from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);


class App extends React.Component<MapStateToPropsType & mapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>

                <HeaderContainer />
                <Navbar />

                <div className="app-wrapper-content">
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'} />} />
                    <Route path={'/dialogs'} render={() => <SuspendedDialogs/>} />
                    <Route path={'/profile/:userId?'} render={() => <SuspendedProfile />} />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/music'} render={() => <Music />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                    <Route path={'/users'} render={() => <UsersContainer />} />
                    <Route path={'/login'} render={() => <Login />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StateType) => ({
    initialized: state.app.initialized,
})

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    initializeApp: () => void
}

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp;