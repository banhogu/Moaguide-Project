export const setToken = (token: string) => {
    localStorage.setItem('access_token', token);
  };
  

export const getToken = (): string | null => {
    return localStorage.getItem('access_token');
  };