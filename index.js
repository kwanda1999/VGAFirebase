import {initializeApp } from 'firebase/app'
import {getRealtime, collection,getDocs} from 'firebase/realtime'
const firebaseConfig = {
    apiKey: "AIzaSyBMMdgfNW9Uqb4bj52KCCt8l0QVlTS6Pl4",
    authDomain: "vga-firebase-1.firebaseapp.com",
    projectId: "vga-firebase-1",
    storageBucket: "vga-firebase-1.appspot.com",
    messagingSenderId: "241326098779",
    appId: "1:241326098779:web:ffb6c6a6319ebcefaab27e"
  };

  initializeApp (firebaseConfig)

  const colRef =  collection (db)

  writeUserData() {
    var myRef = firebase.database().ref().push();
    var key = myRef.key();
  
    var newData={
        id: key,
        pname: this.pname.value,
        value: this.value.value,
        
     }
  
     myRef.push(newData);
  
  }

  const request = new Request('https://console.firebase.google.com/project/vga-firebase-1/database/vga-firebase-1-default-rtdb/data/~2F', { method: 'delete'})

  const deleteStock = document.querySelector('.delete')
  deleteStock.addEventListener('submit', (e)=> {
    e.preventDefault()
  })

  const docRef = doc(db)

  onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
  })

  

  