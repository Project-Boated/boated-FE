import { useQuery } from 'react-query';

import { getMe } from '@/lib/api/profile';

export const KEY = '/api/account/profile';

const useGetMyInfo = () => {
  const { data, isLoading, error } = useQuery(KEY, getMe);

  return {
    data: data !== undefined && data,
    isLoading,
    error,
  };
};

export default useGetMyInfo;
