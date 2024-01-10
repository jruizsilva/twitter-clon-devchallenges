import { protectedInstance } from 'api/axiosInstances'

const fetchUserData = async () => {
  const response = await protectedInstance.get<User>('/users/profile')
  const user = response.data

  console.log(user)

  return user
}

const fetchUpdateUser = async (
  username: string,
  updateUserRequest: UpdateUserRequest
) => {
  const response = await protectedInstance.patch<User>(
    `/users/username/${username}`,
    updateUserRequest
  )

  const userUpdated = response.data

  return userUpdated
}
const fetchAllUsers = async () => {
  const response = await protectedInstance.get<User[]>('/users')
  const users = response.data

  return users
}

const fetchSearchUsersByUsernameOrName = async (peopleToSearch: string) => {
  const response = await protectedInstance.get<User[]>(
    `/users/search/${peopleToSearch}`
  )
  const users = response.data

  return users
}

const fetchFindUserByUsername = async (username: string) => {
  const response = await protectedInstance.get<User>(
    `/users/username/${username}`
  )
  const user = response.data

  return user
}

export {
  fetchUserData,
  fetchUpdateUser,
  fetchAllUsers,
  fetchSearchUsersByUsernameOrName,
  fetchFindUserByUsername
}
