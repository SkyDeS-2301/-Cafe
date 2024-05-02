import {TypeDataItem} from "../components/App/App.tsx";

export interface DataProps {
    data?: TypeDataItem[],
    handleFilter?: (text: string) => void
    handleOption?: (name: string) => void
}