import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

export async function loadJournal(date){

    const ref = doc(db, "journalEntries", date);

    const snap = await getDoc(ref);

    if(snap.exists()){

        return snap.data();

    }

    return null;

}

export async function saveJournal(date, text){

    const ref = doc(db, "journalEntries", date);

    await setDoc(ref,{
        text:text
    },{merge:true});

}

export async function saveJournalPhoto(date,user,image){

    const ref = doc(db,"journalEntries",date);

    const field = user==="Juan" ? "juanPhoto" : "leaPhoto";

    await setDoc(ref,{
        [field]:image
    },{merge:true});

}

export async function deleteJournalPhoto(date,user){

    const ref = doc(db,"journalEntries",date);

    const field = user==="Juan" ? "juanPhoto" : "leaPhoto";

    await setDoc(ref,{
        [field]:""
    },{merge:true});

}

export async function flipJournalPhoto(date,user){

    const data=await loadJournal(date);

    const field=user==="Juan"?"juanFlipped":"leaFlipped";

    const value=data?.[field] ?? false;

    const ref=doc(db,"journalEntries",date);

    await setDoc(ref,{
        [field]:!value
    },{merge:true});

}

export function watchJournal(date,callback){

    const ref=doc(db,"journalEntries",date);

    return onSnapshot(ref,(snap)=>{

        if(snap.exists()){

            callback(snap.data());

        }

    });

}