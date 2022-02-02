import apiService from "../services/apiService";

export default ({ method, path, data, options, actionType }) => {
  return async (dispatch) =>
    await dispatch({
      type: actionType,
      payload: apiService({ path, method, data, options, actionType }),
    });
};
