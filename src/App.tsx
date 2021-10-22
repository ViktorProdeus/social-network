import React from 'react';
import './App.css';
import { Redirect, Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import { StateType } from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


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
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}
                    />
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
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

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
