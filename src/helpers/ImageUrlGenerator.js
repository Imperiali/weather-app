import axios from "axios";

function getImage() {
  return axios('http://localhost:3000/bingApi').then(res => {
    return res.data
  })
}

export default { getImage }