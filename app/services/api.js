import {create} from 'apisauce';

const api = create({baseURL: 'https://reqres.in/api/'});

export const getUserData = () => {
  return new Promise((resolve, reject) => {
    api
      .get('users?page=1')
      .then(response => {
        if (response.ok) {
          resolve(response.data.data);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
