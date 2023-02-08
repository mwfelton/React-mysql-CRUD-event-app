import { createContext, useState } from "react";

// export const AdminContext = createContext({
const AdminContext = createContext({
    // currentAdmin: null,
    // setCurrentAdmin: () => null
});

export const AdminProvider = ({ children }) => {
    // const [currentAdmin, setCurrentAdmin] = useState(null)
    // const value = { currentAdmin, setCurrentAdmin}

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
};

export const AdminAuth = () => {
    return AdminContext(AdminContext)
}

