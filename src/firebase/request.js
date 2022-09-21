import {collection, getDocs} from 'firebase/firestore';
import { db } from './config';


async function Call (ennty) {
    const postCollectionRef = collection(db, ennty);
    const res = await getDocs(postCollectionRef);
    return res.docs.map(doc => doc.data());}

export default {Call}