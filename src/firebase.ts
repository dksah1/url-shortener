import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyDpatNGn-m-Bhqxl2yMb1qOG7vq4lke9O8",
  authDomain: "push-notification-bbcb0.firebaseapp.com",
  projectId: "push-notification-bbcb0",
  storageBucket: "push-notification-bbcb0.appspot.com",
  messagingSenderId: "297560197234",
  appId: "1:297560197234:web:3fc6232572bfc0798d5aeb",
  measurementId: "G-QWHLZFFEL3",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const messaging = getMessaging(app);
