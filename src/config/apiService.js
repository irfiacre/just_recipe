import httpInstance from "./httpConfig";

export default async ({ path, method, data, options }) => {
  try {
    let response;
    switch (method) {
      case "PATCH":
        response = await httpInstance.patch(path, data, {
          ...options,
        });
        return response.data;
      case "GET":
        response = await httpInstance.get(path, {
          ...options,
        });
        return response.data;
      case "POST":
        response = await httpInstance.post(path, data, {
          ...options,
        });
        return response.data;
      case "DELETE":
        response = await httpInstance.delete(path, {
          ...options,
        });
        return response.data;
      default:
        break;
    }
  } catch (error) {
    return {
      error: true,
      status:
        error.response && error.response.data && error.response.data.status,
      message:
        error.message && error.message.includes("Network Error")
          ? "Connection failed, please check internet connection or contact administrator"
          : error.response.data.message || error.response.data,
    };
  }
};
