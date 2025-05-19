import { useState, useEffect, useRef } from "react";

// ✅ Step 1: Create the custom hook
function usePrevious(val) {
  const ref = useRef(); // create a mutable ref

  useEffect(() => {
    ref.current = val; // update ref after each render
  }, [val]); // only when `val` changes

  return ref.current; // return the previous value
}
export default usePrevious;
