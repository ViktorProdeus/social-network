import {SiteBar} from "./SiteBar";
import {ActionType, StateType} from "../../redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps = (state: StateType) => {
    return {
        friends: state.siteBar.friends
    };
};

const mapDispatchToProps = (dispatch: (action: ActionType)=> void) => {
    return {};
};

const SiteBarContainer = connect(mapStateToProps, mapDispatchToProps)(SiteBar);


export default SiteBarContainer;
