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
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.siteBar.friends}/>

            <div className="app-wrapper-content">
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    addMessageCB={props.addMessageCB}
                />}
                />
                <Route path={'/profile'} render={() => <Profile
                    posts={props.state.profilePage.posts}
                    addPostCB={props.addPostCB}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
