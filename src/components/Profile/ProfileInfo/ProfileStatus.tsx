import React, {ChangeEvent, Component} from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    <b>status: </b><span>{this.props.status || ' -empty-'}</span>
                </div>
                }


                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode}
                        autoFocus
                        value={this.state.status}
                    />
                </div>
                }

            </div>
        );
    }
}

export default ProfileStatus;