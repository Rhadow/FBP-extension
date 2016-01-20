// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';
const finalCreateStore = compose(
    applyMiddleware(createLogger({
        // Transform Immutable object to plain json for better debuggin experience
        stateTransformer: (state) => {
            let newState = {};
            if (Immutable.Iterable.isIterable(state)) {
                newState = state.toJS();
            } else {
                newState = state;
            }
            return newState;
        }
    }))
)(createStore);

export default function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState);
};