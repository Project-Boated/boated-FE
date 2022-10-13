import { useQuery } from 'react-query';

import { getMe } from '@/lib/api/profile';

export const KEY = '/api/account/profile';

const useGetMyInfo = () => {
  const { data, isLoading, error, refetch, remove } = useQuery(KEY, getMe, {
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return {
    myInfo: data !== undefined && data,
    isLoading,
    error,
    refetch,
    remove,
  };
};

export default useGetMyInfo;
