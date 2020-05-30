import firebase from "../../firebase/config";

export const AddUser = async (name, email, uid, profileImg) => {
  try {
    return await firebase
      .database()
      .ref("users/" + uid)
      .set({
        user: {
          name: name,
          email: email,
          uuid: uid,
          profileImg: profileImg,
        },
      });
  } catch (error) {
    return error;
  }
};

export const UpdateUser = async (uuid, imgSource) => {
  try {
    return await firebase
      .database()
      .ref("users/" + uuid)
      .child("user")
      .update({
        profileImg: imgSource,
      });
  } catch (error) {
    return error;
  }
};
