import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {ActionType, StateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch: (action: ActionType)=> void) => {
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
