import firebase from "./Firebase";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { useEffect, useState } from "react";

//Veriyi database'e gönderme
export const addUser = (name, phoneNumber, gender) => {
  console.log("Veri geldi", phoneNumber, name, gender);
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    name: name,
    phoneNumber: phoneNumber,
    gender: gender,
  });
};

//Veriyi Database'den cekme

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push(id, ...data[id]);
      }
      setContactList(userArray);
    });
  }, []);
  setIsLoading(false);
  return { isLoading, contactList };
};
