import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as SystemConstants from '../constants/SystemConstants';

const CHANGE_EVENT = 'change';

let SystemState = null;

function reset() {
    console.debug('SystemState reset');
    SystemState = {
        config: {}
    };
}

// Intialise store
reset();

let SystemStore = new class extends EventEmitter {
    constructor() {
        super();
    }

    getState() {
        return SystemState;
    }

    getNow() {
        return SystemState.now;
    }

    emitChange(name) {
        this.emit(CHANGE_EVENT, name);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
};

SystemStore.dispatchToken = AppDispatcher.register(action => {

    switch (action.name) {
        case SystemConstants.SystemNow:
            console.debug("SystemStore: ", action);
            let now = action.data;
            if (!now) {
                console.error('require now');
                return;
            }

            SystemStore.getState().now = now;
            break;

        default:
            return;
    }

    SystemStore.emitChange(action.name);
});

export default SystemStore;