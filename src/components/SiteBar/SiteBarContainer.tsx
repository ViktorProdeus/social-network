import {SiteBar} from "./SiteBar";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FriendType} from "../Friends/FriendsItem/FriendsItem";

type MapStateToPropsType = {
    friends: FriendType[]
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        friends: state.siteBar.friends
    };
};


const SiteBarContainer = connect(mapStateToProps, {})(SiteBar);


export default SiteBarContainer;
