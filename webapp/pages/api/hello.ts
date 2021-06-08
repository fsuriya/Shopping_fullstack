import axios from 'axios';

let API: string = "http://localhost:4000/";

export const test = (userid: any): any => {
  if (userid != undefined) {
    axios({
      method: 'get',
      url: `${API}user?id=${userid}`
    })
      .then(userinfo => {
        console.log(userinfo.data);
        return userinfo.data;
      })
      .catch(err => console.log(err))
  }
}

export const connecting = () => {
  axios.get(`${API}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}