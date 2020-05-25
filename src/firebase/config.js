import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKaf8yR21ceH5SEkRgaSs7SGjLrT-9VIw",
  databaseURL: "https://convo-aafa0.firebaseio.com/",
  projectId: "convo-aafa0",
  appId: "1:177619403383:android:95ebe500af65abf7ee3c72",
};

export default Firebase.initializeApp(firebaseConfig);

// export const db = app.database();
