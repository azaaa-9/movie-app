"use client"

import { ChangeEvent} from "react"

type SearchinputProps = {
    value: string;
    handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({value, handleChange} : SearchinputProps) => {
    return(
        <input 
        type="text"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className="h-10 p-4"
        />
    )
}