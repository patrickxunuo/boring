import useWindowSize from "./useWindowSize";
import {useEffect, useState} from "react";

const useGeneratePos = () => {
  const [position, setPosition] = useState({top: 0, left: 0})
  const size = useWindowSize()

  useEffect(() => {
    setPosition({
      top: Math.floor(Math.random() * size.height),
      left: Math.floor(Math.random() * size.width),
    })
  }, [size.height, size.width])

  return position
}

export default useGeneratePos
