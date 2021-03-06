import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChanged = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || '------------'}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChanged}
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;