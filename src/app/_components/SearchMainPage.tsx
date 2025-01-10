"use client"

import { SearchInput } from "./SearchInput"
import { ChangeEvent, useState } from "react"

export const SearchMainPage = () => {
    const [searchValue, setsearchValue] = useState<string>(``);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setsearchValue(event.target.value);
    };
    return(
        <div className="relative">
            <SearchInput handleChange={handleChange} value={searchValue} />
            {searchValue && <SearchResultList searchValue={searchValue} />}
        </div>
    )
}