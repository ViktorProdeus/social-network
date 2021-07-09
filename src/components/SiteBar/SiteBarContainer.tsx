import React from 'react';
import {SiteBar} from "./SiteBar";
import StoreContext from "../../StoreContext";

const SiteBarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();


                    return (
                        <SiteBar friends={state.siteBar.friends}/>
                    )
                }

            }
        </StoreContext.Consumer>
    )
}

export default SiteBarContainer;
