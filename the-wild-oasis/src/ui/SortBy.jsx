/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { useSearchParams } from "react-router-dom";
import { useSeSearchParams } from "../hooks/useSearchParams"
import Select from "../ui/Select"
function SortBy({options}) {

    const {names,handleChange} = useSeSearchParams("sortBy",options, true)
    return (
        <Select options={options} value={names} onChange={handleChange} type="White">
        </Select>
    )
}

export default SortBy
