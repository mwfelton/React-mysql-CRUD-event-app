import { createContext, useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import {db} from "../utils/firebase/firebase.utils"

export const WorkshopsContext = createContext({
    workshops: [],
});

export const WorkshopProvider = ({ children }) => {
    const [workshops, setWorkshops] = useState([])
     //read data
    useEffect(() => {
        const q = query(collection(db, 'upcoming-workshops'))
        const allWorkshops = onSnapshot(q, (querySnapshot) => {
        let workshopArr = []
        querySnapshot.forEach((doc) => {
            workshopArr.push({...doc.data(), id: doc.id})
        });
        setWorkshops(workshopArr)
        })
        return () => allWorkshops()
    }, [])

    const value = { workshops }

    return (
        <WorkshopsContext.Provider value={value}>
            {children}
        </WorkshopsContext.Provider>
    )
};
