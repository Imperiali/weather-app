import axios from "axios";

const getImage = () => {
  return axios(`${process.env.VUE_APP_API_URL}/image`).then(res => {
    return res.data
  })
}

export default { getImage }
