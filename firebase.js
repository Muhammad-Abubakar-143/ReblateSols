import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyCp3T_NnpxfyP6SI-re_5BGVp_LXL7Uthw",
  authDomain: "reblatesols-2fc86.firebaseapp.com",
  projectId: "reblatesols-2fc86",
  storageBucket: "reblatesols-2fc86.appspot.com",
  messagingSenderId: "690979598733",
  appId: "1:690979598733:web:e4fcb856b19d82a068cdc4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);