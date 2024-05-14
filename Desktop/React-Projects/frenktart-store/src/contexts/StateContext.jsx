import React, { createContext, useState, useContext } from 'react';

export const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const value = {
        open,
        setOpen
    };

    return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};