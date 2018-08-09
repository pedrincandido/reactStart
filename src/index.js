import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import {UserList} from './components/user/user_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="body-container">
                <UserList />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.body-container'))