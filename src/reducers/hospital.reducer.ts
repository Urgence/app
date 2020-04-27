import { hospitalConstants } from '../constants';

export function hospital(state = {}, action) {
  switch (action.type) {
    case hospitalConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case hospitalConstants.GETALL_SUCCESS:
      return {
        data: action.data
      };
    case hospitalConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}
