import { createContext, useState } from "react";

export const AdminContext = createContext({
    currentAdmin: null,
    setCurrentAdmin: () => null
});

const AdminProvider = ({ children }) => {
    const [currentAdmin, setCurrentAdmin] = useState(null)
    const value = { currentAdmin, setCurrentAdmin}

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
};

export default AdminProvider

