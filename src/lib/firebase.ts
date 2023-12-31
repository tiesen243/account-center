import { initializeApp } from 'firebase/app'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

const uploadImage = async (
  image: File | null,
  name: string,
  type: 'avatar' | 'product'
): Promise<string> => {
  const imageRef = ref(storage, `${type}/${name}`)
  const uploadTask = await uploadBytes(imageRef, image as Blob)
  const url = await getDownloadURL(uploadTask.ref)
  return url
}

const deleteImage = async (name: string, type: 'avatar' | 'product') => {
  const imageRef = ref(storage, `${type}/${name}`)
  await deleteObject(imageRef).catch(() => {})
}

export { deleteImage, uploadImage }
