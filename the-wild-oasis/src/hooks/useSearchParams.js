import { useSearchParams } from "react-router-dom";

export function useSeSearchParams(name, options, target = false) {
  const [searchParams, setSearchParams] = useSearchParams();
  const names = searchParams.get(name) || options?.at(0).value;
  function handleChange(e) {
    searchParams.set(name, target ? e.target.value : e);
    
    if(searchParams.get("page")) searchParams.set("page", 1)

    setSearchParams(searchParams);

  }

  return { searchParams, names, handleChange };
}
