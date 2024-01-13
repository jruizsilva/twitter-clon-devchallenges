import { useMemo } from 'react';

import { useFindUserByUsernameQuery } from './queries/useFindUserByUsernameQuery';

import { baseUrl } from 'utils/baseUrl';


export const useBackgroundProfileImage = (username: string) => {
  const { userProfile } = useFindUserByUsernameQuery(username)

  const profileImageUrl = useMemo(() => {
    if (userProfile === undefined) {
      return undefined
    } else if (userProfile.backgroundImage === null) {
      return undefined
    } else {
      return `${baseUrl}/${userProfile.backgroundImage}`
    }
  }, [userProfile])

  return profileImageUrl
}
