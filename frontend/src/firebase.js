import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKv1NoLw2rzhKoF0ip5LkTDuwwOoQ1O4I",
  authDomain: "rate-a-loo.firebaseapp.com",
  projectId: "rate-a-loo",
  storageBucket: "rate-a-loo.appspot.com",
  messagingSenderId: "121517063344",
  appId: "1:121517063344:web:45d26b22c441756e798f75"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage