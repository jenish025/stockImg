import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');


const config = {
  screens: {
    AuthConformationScreen: {
      path: 'conformation',
    },
  },
};

const linking = {
  prefixes: [prefix],
  config
};

console.log(prefix, 'pre');

export default linking;
