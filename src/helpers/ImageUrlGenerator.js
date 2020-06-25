import axios from "axios";

async function getImage() {
  let result = ''

  await axios('http://localhost:3000/bingApi').then(res => {
    result = res
  })

  return result
}

export default { getImage }