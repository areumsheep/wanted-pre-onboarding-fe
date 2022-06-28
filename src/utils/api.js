import axios from 'axios';

const api = axios.create({
  baseURL: '/data/feed.json',
  headers: {
    'Content-type': 'application/json',
  },
});
export const getFeeds = async () => {
  try {
    const result = await api.get();
    return result.data;
  } catch (e) {
    console.error(e);
  }
};
