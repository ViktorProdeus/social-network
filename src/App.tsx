import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />

            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route path={'/dialogs'} component={DialogsContainer} render={() => <DialogsContainer />}
                />
                <Route path={'/profile/:userId?'} component={ProfileContainer} render={() => <ProfileContainer/>}/>
                <Route path={'/news'} component={News} render={() => <News/>}/>
                <Route path={'/music'} component={Music} render={() => <Music/>}/>
                <Route path={'/settings'} component={Settings} render={() => <Settings/>}/>

                <Route path={'/users'} component={UsersContainer} render={() => <UsersContainer/>}/>
                <Route path={'/login'} component={Login} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
