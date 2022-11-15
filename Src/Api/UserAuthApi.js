// import axios from 'axios';
// import { ACCESS_TOKEN } from '../Redux/ReduxConst';

// export const test = async (accessCode) => {
//     
//    await axios({
//     method: 'GET',
//     url: `https://jsonplaceholder.typicode.com/todos/1`,
//   }).then((response) => {
//     if (response?.data) {
//      
//       return response?.data;
//     }
//   
//     return response;
//   });
// };

// export const getUserAccessTokenData = async (accessCode) => {
//

//   await axios({
//     method: 'POST',
//     url: `https://unsplash.com/oauth/token?grant_type=authorization_code&code=${accessCode}&redirect_uri=exp%3A%2F%2F192.168.1.46%3A19000%2F--%2Fconformation&client_id=p4ujNBL74OUjCLjSFjhohACuKCQFKoXvyvO26GLFrOM&client_secret=iTdCCrRWfUCu_4axVPHzd79Fu4pRght9fvGf1GHIH1g`,
//   }).then((response) => {
//    ;
//     if (response?.data) {
//       // dispatch({
//       //   type: ACCESS_TOKEN,
//       //   data: response?.data,
//       // });
//       return response?.data;
//     }
//     return response;
//   });
//   //   .catch((error) => idx(error, (_) => _.response.data));
// };

// export const getUserAccessTokenData = (accessCode) => {
//   return (dispatch) => {
//     var requestOptions = {
//       method: 'POST',
//     };

//     fetch(url, requestOptions)
//       .then((response) => response.text())
//       .then((result) => {
//         dispatch(
//           // UserPhotoUploadLIst(result)
//         );
//         return result;
//       })
//       .catch((error) => console.log('error', error));
//   };
// };
