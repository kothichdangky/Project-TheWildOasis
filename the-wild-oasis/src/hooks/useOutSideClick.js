import { useEffect, useRef } from "react";

export function useOutSideClick(handle, listenCaptuning = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handle();
        }
      }
      document.addEventListener("click", handleClick, listenCaptuning);

      return () =>
        document.removeEventListener("click", handleClick, listenCaptuning);
    },
    [ref, handle, listenCaptuning],
  );

  return { ref };
}
