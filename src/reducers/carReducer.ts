import { reducerActionType } from '../types/reducerActionType';
import { Car } from '../types/Car';

export const carInitialState: Car[] = [
    {id: '1', brand:'honda', model: 'Civic Touring', year: 2022, km: 20000, price: 140000},
    {id: '2', brand:'ww', model: 'Polo Highline', year: 2020, km: 70000, price: 70000},
    {id: '3', brand:'mb', model: 'C300 Exclusive', year: 2019, km: 35000, price: 280000},
    {id: '4', brand:'toyota', model: 'SW4 4x4 SRX', year: 2018, km: 80000, price: 260000},
    {id: '5', brand:'mb', model: 'G63 AMG', year: 2020, km: 75000, price: 1800000},
];

export const carReducer = (state: Car[], action: reducerActionType) => {
    let newState = [...state];

    switch(action.type) {
        case 'ADD_CAR':
            newState.push(action.payload as Car);
            return newState;
        case 'EDIT_CAR':
            let carIndex = newState.findIndex(item => item.id === action.payload.id);
            if(carIndex > -1) {
                newState[carIndex] = action.payload as Car;
            }
            return newState;
        case 'DELETE_CAR':
            newState = newState.filter(item => item.id !== action.payload.id);
            return newState;
    }

    return state;
}