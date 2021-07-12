import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import { Dispatch } from "redux";



const mapStateToProps = (state: StateType): MapStateToPropsType  => {
    return {
        users: state.usersPage.users
    }
}
type MapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToPropsType = {
    follow: (userID: string)=> void
    unfollow: (userID: string)=> void
    setUsers: (users: UserType)=> void
}

const mapDispatchToProps = (dispatch: Dispatch ): mapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },

        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },

        setUsers: (users: UserType) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect<MapStateToPropsType, mapDispatchToPropsType, {},StateType>(mapStateToProps, mapDispatchToProps)(Users);