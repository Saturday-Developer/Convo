import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  databaseURL: "",
  projectId: "",
  appId: "",
};

export default Firebase.initializeApp(firebaseConfig);
