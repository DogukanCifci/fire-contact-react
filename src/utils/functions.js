import firebase from "./Firebase";
import { getDatabase, ref, set, push } from "firebase/database";
export const addUser = (name, phoneNumber, gender) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: name,
    phoneNumber: phoneNumber,
    gender: gender,
  });
};
