import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export const addReading = async (dayId, readingData) => {
    // TODO: Add reading to specific day
    try {
        const dayRef = doc(db, "days", dayId)

        const readingRef = collection(dayRef, "readings")

        const docRef = await addDoc(readingRef, readingData)

        console.log("sucess" + docRef.id)
        return true
    } catch(e){
        console.error('Something went wrong adding reading documents:' + e);
        return false
    } 
    
} 

export const getAllDays = async () => {
    // TODO: return the days that we want to read

    const collectionRef = collection(db, "days");

    const querySnapshot = await getDocs(collectionRef);

    var daysData = []

    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    var theDay = {...doc.data(), id: doc.id}
    daysData.push(theDay)
});
return daysData
}