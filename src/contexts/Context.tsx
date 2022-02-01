import React, { createContext, useReducer } from 'react';
import { carInitialState, carReducer } from '../reducers/carReducer';
import { Car } from '../types/Car';
import { reducerActionType } from '../types/reducerActionType';

type initialStateType = {
    cars: Car[];
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    cars: carInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    cars: carReducer(state.cars, action),
});

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}