import {addMessageActionCreator, DialogsPageType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText : (text: string) => {
            dispatch(updateNewMessageTextCreator(text));
        },
        sendMessage : () => {
            dispatch(addMessageActionCreator())
        },
    };
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
