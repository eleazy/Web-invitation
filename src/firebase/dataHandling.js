import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";

export const responsesObjFirebase = async () => {
  const arr = [[], []];

  const querySnapshot = await getDocs(collection(db, "responses"));
  querySnapshot.forEach((doc) => {
    arr[0].push(doc.data());
    arr[1].push(doc.id);
  });
  return arr;
};

export const songsObjFirebase = async () => {
  const arr = [[], []];

  const querySnapshot = await getDocs(collection(db, "songRequests"));
  querySnapshot.forEach((doc) => {
    arr[0].push(doc.data());
    arr[1].push(doc.id);
  });
  return arr;
};

export const allowedObjFirebase = async () => {
  const arr = [[], []];

  const querySnapshot = await getDocs(collection(db, "allowed"));
  querySnapshot.forEach((doc) => {
    arr[0].push(doc.data());
    arr[1].push(doc.id);
  });
  return arr;
};

export const urlsObjFirebase = async () => {
  const arr = [[], []];

  const querySnapshot = await getDocs(collection(db, "imagesUrls"));
  querySnapshot.forEach((doc) => {
    arr[0].push(doc.data());
    arr[1].push(doc.id);
  });
  return arr;
};

const allowed = [
  'john',
  'jane',
  'joe',
];

const rewriteAllowed = () => {
  for (let i = 0; i < allowed.length; i++) {
    deleteDoc(doc(db, "allowed", allowed[i]));
    setDoc(doc(db, "allowed", allowed[i]), {
      name: allowed[i]
    });
  };
};
//rewriteAllowed();

const urls = [
  'https://picsum.photos/id/25/700',
  'https://picsum.photos/id/27/700',
  'https://picsum.photos/id/28/700',
  'https://picsum.photos/id/29/700',
  'https://picsum.photos/id/37/700',
  'https://picsum.photos/id/38/700',
  'https://picsum.photos/id/42/700',
  'https://picsum.photos/id/46/700',
  'https://picsum.photos/id/57/700',
  'https://picsum.photos/id/59/700',
];

const rewriteUrls = () => {
  for (let i = 0; i < urls.length; i++) {
    let k = 'a';
    for (let b = 0; b < i; b++) {
      k += 'a';
    }
    deleteDoc(doc(db, "imagesUrls", k));
    setDoc(doc(db, "imagesUrls", k), {
      url: urls[i]
    });
  };
};
//rewriteUrls();
