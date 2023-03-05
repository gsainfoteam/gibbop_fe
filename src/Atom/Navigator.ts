import { atom } from "recoil";

export const navigatorState = atom({
    key: 'navigatorState',
    default: {student: {first_first: true, first_second: false, second: false}, extra: {RR: true, 
        Renaissance: false}}
})

export const bottomNaviState = atom({
    key: 'bottomNaviState',
    default: {student: true, extra: false}
})

export enum Restaurant {
    student,
    extra,
}

export enum studentRestaurant {
    first_first = 'first_first', first_second = 'first_second', second = 'second'
}

export enum extraRestaurant {
    RR,
    Renaissance,
}