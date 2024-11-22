
import {atom, atomFamily} from "recoil"

export const userAtom = atom({
    key:"userAtom",
    default:""
})

export const recentSubmissions = atom
({
    key:"recentSubmissions",
    default:[]
})