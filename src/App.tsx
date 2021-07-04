import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import {AppType} from "./redux/state";
import Navbar from "./components/Navbar/Navbar";


const App: React.FC<AppType> = (props) => {
    const state = props.store.getState();

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={state.siteBar.friends}/>

            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsPage={state.dialogsPage}
                    newMessageText={state.dialogsPage.newMessageText}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}
                />
                <Route path={'/profile'} render={() => <Profile
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
