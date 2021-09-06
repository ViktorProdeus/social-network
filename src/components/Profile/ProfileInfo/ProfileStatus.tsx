import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
}

class ProfileStatus extends Component<PropsType> {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div>
                    <b>status: </b><span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }


                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode} autoFocus value={this.props.status}/>
                </div>
                }

            </div>
        );
    }
}

export default ProfileStatus;