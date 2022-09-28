import { initializeApp, getApps, getApp } from 'firebase/app'
import { initializeAuth, getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENT_ID,
}

let db: Firestore | null = null

export const initFirebase = () => {
  const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
  // const firebaseAuth = !getAuth() ? initializeAuth(firebaseApp) : getAuth()
  db = getFirestore(firebaseApp)

  return {
    app: firebaseApp,
    db,
    // auth: firebaseAuth
  }
}

