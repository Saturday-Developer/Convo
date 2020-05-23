import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBq87TjTOT_6bp-oMJbcXhafSuGE1ivIVc',
  databaseURL: 'https://rnfb-df67c.firebaseio.com/',
  projectId: 'rnfb-df67c',
  storageBucket: 'gs://rnfb-df67c.appspot.com',
  appId: '1:306828419856:android:80582ff8a155a398087b95',
};

export default Firebase.initializeApp(firebaseConfig);

// export const db = app.database();
