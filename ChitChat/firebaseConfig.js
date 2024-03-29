import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPbh2TmeCnr1eyMNhks-l6xy6-xlGJSYY",
  authDomain: "chitchat-achattingapp.firebaseapp.com",
  projectId: "chitchat-achattingapp",
  storageBucket: "chitchat-achattingapp.appspot.com",
  messagingSenderId: "972496567866",
  appId: "1:972496567866:web:e635fa52645b1eb3c2ff03",
  measurementId: "G-XPPX6WNJ63",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
