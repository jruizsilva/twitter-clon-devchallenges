import { protectedInstance } from "api/axiosInstances";

const fetchUserData = async () => {
  const response = await protectedInstance.get<User>("/users/profile")
  const user = response.data;

  return user
}

const fetchUpdateUser = async (updateUserRequest: UpdateUserRequest) => {
  const response = await protectedInstance.patch<User>("/users", updateUserRequest)

  const userUpdated = response.data;

  return userUpdated
}
const fetchAllUsers = async () => {
  const response = await protectedInstance.get<User[]>("/users")
  const users = response.data;

  return users
};

const fetchSearchUsersByUsernameOrName = async (peopleToSearch: string) => {
  const response = await protectedInstance.get<User[]>(`/users/search/${peopleToSearch}`)
  const users = response.data

  return users
}

export { fetchUserData, fetchUpdateUser, fetchAllUsers, fetchSearchUsersByUsernameOrName }