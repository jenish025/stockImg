import { Dimensions } from 'react-native';

export const redirectUri = `exp%3A%2F%2F192.168.29.220%3A19000%2F--%2Fconformation`;
// export const client_id = `9QquI2C70aHLzMU3WKxUSqnhXC9fgUKT1glJ-6q4dpw`;
export const client_id = `_7WgLrRarYaQ3uxachuKTSNjHE5FYQiUJ64h7Q5nufY`;
// export const client_secret = `4ZdNIiRtEjhEZ5SZ9eSzeOR0KnsZFMMbGMO7RsbSeHU`;
export const client_secret = `e9kcXAgd1t2y8H6ONFIUAgNafXjw6nMd2Yl2Ydz6XTo`;
const RedirectUri = 'exp%3A%2F%2F192.168.29.220%3A19000%2F--%2Fconformation';

export const authUrl = `https://unsplash.com/oauth/authorize?client_id=_7WgLrRarYaQ3uxachuKTSNjHE5FYQiUJ64h7Q5nufY&redirect_uri=${RedirectUri}&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`;

export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;
export const FontScale = Dimensions.get('window').fontScale;
export const Scale = Dimensions.get('window').scale;
