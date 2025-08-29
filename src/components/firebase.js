import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCq5lsax8fZ7i4SuWSvj0aonbrz4X7V89k",
  authDomain: "aman-cable-42cf5.firebaseapp.com",
  projectId: "aman-cable-42cf5",
  storageBucket: "aman-cable-42cf5.appspot.com",
  messagingSenderId: "436262372204",
  appId: "1:436262372204:web:41a13f6fd75b52164da949",
  measurementId: "G-N814EVXSQJ",
  databaseURL: "https://aman-cable-42cf5-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
export { analytics };
