import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import {AppStateType} from "./redux/state";
import Navbar from "./components/Navbar/Navbar";

type AppPropsType = {
    state: AppStateType
    addPost: (text: string | undefined) => void
    addMessage: (text: string | undefined) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.siteBar.friends}/>

            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogs={props.state.dialogsPage.dialogs}
                    messages={props.state.dialogsPage.messages}
                    addMessage={props.addMessage}
                />}
                />
                <Route path={'/profile'} render={() => <Profile
                    posts={props.state.profilePage.posts}
                    addPost={props.addPost}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
