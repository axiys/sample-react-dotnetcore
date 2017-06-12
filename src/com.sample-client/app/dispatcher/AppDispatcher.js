import {Dispatcher} from 'flux';

export default new class extends Dispatcher {
    publish(action) {
        this.dispatch(action);
    }
}
