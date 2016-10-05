import React from 'react';
import AddComponent from '../components/AddItem';

export default class ItemList extends React.Component {

    render() {
        let {items, addItem, removeItem} = this.props;

        let itemList = items.map((item) => {
            return <li key={item.id}>{item.text}
                &nbsp;
                <button onClick={()=> removeItem(item.id)}>Remove</button>
            </li>
        });

        return (
            <div>
                <h1>React-Redux-Webpack Starter</h1>
                <h3>Items: {items.length}</h3>
                <AddComponent onAddItem={(e) => addItem(e) }/>
                <ul>{itemList}</ul>
            </div>
        )
    }

};

ItemList.propTypes = {
    items: React.PropTypes.array.isRequired,
    addItem: React.PropTypes.func.isRequired,
    removeItem: React.PropTypes.func.isRequired
};
