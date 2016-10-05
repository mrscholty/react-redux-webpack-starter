import React from 'react';
import {v4} from 'uuid';

export default class AddItem extends React.Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    addItem() {

        if (!this.state.text) {
            return;
        }
        this.props.onAddItem({
            id: v4(),
            text: this.state.text
        });
        this.setState({text: ''});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text}
                       placeholder="new item"
                       onChange={(e)=> this.setState({text: e.target.value})}/>
                &nbsp;<button onClick={()=> this.addItem()}>Add
                </button>
            </div>
        )
    }

}

AddItem.propTypes = {
    onAddItem: React.PropTypes.func.isRequired
};

