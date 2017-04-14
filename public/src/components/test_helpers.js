import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

/**
 * @param {object} initialState - Specify the initial state of the store.
 */
export default function mockFormStore(initialState = {}) {
  const store = createStore((state = initialState, action) => {
    return Object.assign({}, state, {
      form: formReducer(state.form, action),
    });
  });

  return store;
}
