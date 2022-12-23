import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
