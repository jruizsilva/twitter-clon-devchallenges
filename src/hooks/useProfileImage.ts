import { useMemo } from 'react';

import { useFindUserByUsernameQuery } from './queries/useFindUserByUsernameQuery';

import { baseUrl } from 'utils/baseUrl';


export const useProfileImage = (username: string) => {
  const { userProfile } = useFindUserByUsernameQuery(username)

  const profileImageUrl = useMemo(() => {
    if (userProfile?.profileImage === undefined || userProfile?.profileImage === null) {
      return undefined
    } else {
      return `${baseUrl}/${userProfile?.profileImage}`
    }
  }, [userProfile])

  return profileImageUrl
}
