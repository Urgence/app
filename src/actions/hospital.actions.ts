import { hospitalConstants } from '../constants';
import { hospitalService } from '../services';
// import { history } from '../helpers';

export const hospitalActions = {
    getAll,
};


function getAll() {
    return dispatch => {
        dispatch(request());

        hospitalService.getAll()
            .then(
                data => {
                    dispatch(success(data));
                },

                error => dispatch(failure(error.toString()))
            );
    };

    function request() {
        return { type: hospitalConstants.GETALL_REQUEST };
    }

    function success(data) {
        return { type: hospitalConstants.GETALL_SUCCESS, data };
    }

    function failure(error) {
        return { type: hospitalConstants.GETALL_FAILURE, error };
    }
}
