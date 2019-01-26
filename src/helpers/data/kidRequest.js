import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getKids = uid => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/kids.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      let kids = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          kids.push(res.data[key]);
        });
      }
      // const currentUser = parents.find(x => x.currentUser);
      console.log(kids);
      resolve(kids);
    })
    .catch(err => reject(err));
});

const postKidRequest = kid => axios.post(`${firebaseUrl}/kids.json`, kid);

const deleteKid = kidId => axios.delete(`${firebaseUrl}/kids/${kidId}.json`);


export default {
  postKidRequest,
  getKids,
  deleteKid
}