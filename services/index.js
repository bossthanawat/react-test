import axios from "./helper/interceptors";

const apiURL = ''

export function getTypeRice() {
  return axios({
    method: "get",
    url: `${apiURL}/rice/type`,
  });
}

const service = {
  getTypeRice
}

export default service