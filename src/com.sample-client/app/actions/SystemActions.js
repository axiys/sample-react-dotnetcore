import axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionFactory from '../utils/ActionFactory';
import * as SystemConstants from '../constants/SystemConstants';

export default new class {
    constructor() {
        this.dispatcher = AppDispatcher;
    }

    now() {
        const self = this;
        axios.get('/api/v1/system/now')
            .then(function (response) {
                self.dispatcher.publish(
                    ActionFactory.create('sample', SystemConstants.SystemNow, response.data));
            })
            .catch(function (error) {
                console.error(error);
            });
    }
}
