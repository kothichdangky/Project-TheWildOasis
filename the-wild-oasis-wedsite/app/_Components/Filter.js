"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const useParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = useParams.get("capacity")?? "all";

  function handleClick(filter) {
    const params = new URLSearchParams(useParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleClick}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleClick}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleClick}
        activeFilter={activeFilter}
      >
        4&mdash;8 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleClick}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
