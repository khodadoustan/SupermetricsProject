import LoginReq from '../types/Login';

const DOMAIN = 'https://api.supermetrics.com/assignment/';

export const register = async (data: LoginReq) => {
  const rawResponse = await fetch(`${DOMAIN}register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, client_id: 'ju16a6m81mhid5ue1z3v2g0uh' }),
  });
  return rawResponse.json();
};

export const getPostsApi = async (page: number) => {
  const token = localStorage.getItem('token');
  const rawResponse = await fetch(`${DOMAIN}posts?sl_token=${token}&page=1`);
  return rawResponse.json();
};
