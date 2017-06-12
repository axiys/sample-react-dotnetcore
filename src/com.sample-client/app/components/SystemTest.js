import React, {Component} from 'react';
import SystemActions from '../actions/SystemActions';
import SystemStore from '../stores/SystemStore';

export default class Systems extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this._handleSystemStoreChange = this.handleSystemStoreChange.bind(this);
    }

    componentDidMount() {
        SystemStore.addChangeListener(this._handleSystemStoreChange);
        SystemActions.now();
    }

    componentWillUnmount() {
        SystemStore.removeChangeListener(this._handleSystemStoreChange);
    }

    handleSystemStoreChange(e) {
        this.setState({now: SystemStore.getNow()});
    }

    fetchNow() {
        SystemActions.now();
    }

    render() {

        let {now} = this.state;

        return (
            <div>
                <div>{now}</div>
                <button type="button" className="btn btn-primary btn-xs"
                        onClick={this.fetchNow.bind(this)}>Update
                </button>

            </div>);
    }
}