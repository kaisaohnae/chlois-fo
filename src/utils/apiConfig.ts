import interceptor from '@/utils/apiInterceptor';

export const apiConfig = (apiUrl: string, apiData?: any) => {
  const uniqueUrl = `${apiUrl}?t=${new Date().getTime()}`; // URL에 타임스탬프 추가
  return interceptor({
    url: uniqueUrl,
    data: JSON.stringify(apiData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + auth.token,
    },
    withCredentials: false,
  });
};
