import { protectedInstance } from 'api/axiosInstances';

export const fetchUploadProfileImage = async (formData: FormData) => {
  const response = await protectedInstance.post<string>("/upload/profileImage", formData)

  const profileImgUrl = response.data

  console.log(profileImgUrl)

  return profileImgUrl
}

export const fetchDeleteProfileImage = async () => {
  const response = await protectedInstance.delete<string>("/upload/profileImage")

  const data = response.data

  console.log(data)

  return data
}
