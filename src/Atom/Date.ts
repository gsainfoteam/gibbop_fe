import { atom } from "recoil";

export const pickedDate = atom({
    key: 'pickedDate',
    default: new Date(),
})