import * as ActionTypes from '../actions/ui'

export default function ui(state = {
  testVal: null
}, action) {

  switch (action.type) {

    case ActionTypes.TEST_UI:
      return Object.assign({}, state, {
        testVal: true
      });

    default:
      return state;
  }
}
