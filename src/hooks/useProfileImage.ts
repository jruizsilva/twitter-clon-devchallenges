import { useMemo } from 'react';

import { useUserQuery } from 'hooks/queries/useUserQuery';
import { baseUrl } from 'utils/baseUrl';


export const useProfileImage = () => {
  const { user } = useUserQuery()

  const profileImageUrl = useMemo(() => {
    if (user?.profileImage === undefined || user?.profileImage === null) {
      return undefined
    } else {
      return `${baseUrl}/${user?.profileImage}`
    }
  }, [user])

  return profileImageUrl
}
