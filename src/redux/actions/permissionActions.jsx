import { SET_PERMISSION_DATA } from '../reducers/permissionReducer';

export const setPermissionData = (data) => (dispatch) => {
    console.log('== == HERE == ==', data);
    localStorage.setItem('permissionData', JSON.stringify(data));
    dispatch({ type: SET_PERMISSION_DATA, payload: data });
};
