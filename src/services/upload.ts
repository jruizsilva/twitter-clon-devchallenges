import { protectedInstance } from 'api/axiosInstances';

export const fetchUploadProfileImage = async (formData: FormData) => {
  const response = await protectedInstance.post<string>("/upload/profileImage", formData)

  const profileImgUrl = response.data

  return profileImgUrl
}

export const fetchDeleteProfileImage = async () => {
  const response = await protectedInstance.delete<string>("/upload/profileImage")

  const data = response.data

  return data
}

export const fetchUploadBackgroundProfileImage = async (formData: FormData) => {
  const response = await protectedInstance.post<string>("/upload/backgroundImage", formData)

  const backgroundImgUrl = response.data

  return backgroundImgUrl
}

export const fetchDeleteBackgroundProfileImage = async () => {
  const response = await protectedInstance.delete<string>("/upload/backgroundImage")

  const data = response.data

  return data
}
