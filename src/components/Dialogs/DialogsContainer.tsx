import {addMessageActionCreator, DialogsPageType, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {StateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
