import useMousePosition from "./useMousePosition";
import {useEffect, useState} from "react";

const useCalDegree = (top, left) => {
  const position = useMousePosition()
  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const xAbs = position.x - left
    const yAbs = position.y - top

    if (position.y > top) {
      setDeg(-(Math.atan(xAbs / yAbs) * 180 / Math.PI + 90))
    }else{
      setDeg(-(Math.atan(xAbs / yAbs) * 180 / Math.PI + 270))
    }
  }, [top, left, position.x, position.y]);

  return deg
}

export default useCalDegree
