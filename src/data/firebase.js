import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYkWjhJW0yQmRYDe5a5qIgPtGmibHImz8",
  authDomain: "ex3-produits-8aad0.firebaseapp.com",
  databaseURL: "https://ex3-produits-8aad0-default-rtdb.firebaseio.com",
  projectId: "ex3-produits-8aad0",
  storageBucket: "ex3-produits-8aad0.appspot.com",
  messagingSenderId: "593152970140",
  appId: "1:593152970140:web:bfb47e24f8e39d27398c59",
  measurementId: "G-TCZ1YQ7F12"
  
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export const BD = bd;