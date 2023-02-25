import { createContext, useState, useContext, useEffect } from "react";

import SHOP_DATA from '../dummy-workshop-data.json'

export const WorkshopsContext = createContext({
    workshops: [],
});

export const WorkshopProvider = ({ children }) => {
    const [workshops, setWorkshops] = useState(SHOP_DATA)
    const value = { workshops }
    return (
        <WorkshopsContext.Provider value={value}>
            {children}
        </WorkshopsContext.Provider>
    )
};
