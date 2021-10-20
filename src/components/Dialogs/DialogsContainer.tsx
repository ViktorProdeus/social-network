import { addMessageActionCreator, DialogsPageType } from "../../redux/dialogs-reducer";
import { StateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    // updateNewMessageText: (text: string) => void
    sendMessage: (newMessageBody: string) => void
}

export type DialogsType = MapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage : (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
    };
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)


