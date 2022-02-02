import React, { useRef, useEffect, useState } from "react"

const MacroRatio = (props) => {
  const total = props.ratio.f + props.ratio.c + props.ratio.p;
  const multiplier_f = props.ratio.f / total
  const multiplier_c = props.ratio.c / total
  const multiplier_p = props.ratio.p / total

  const [width_f, setWdithF] = useState(0);
  const [width_c, setWdithC] = useState(0);
  const [width_p, setWdithP] = useState(0);

  const ref = useRef();
  useEffect(() => {
    setWdithF(ref.current.offsetWidth * multiplier_f)
    setWdithC(ref.current.offsetWidth * multiplier_c)
    setWdithP(ref.current.offsetWidth * multiplier_p)
  }, [total, multiplier_f, multiplier_c, multiplier_p]);

  return (
    <div ref={ref} className="macroRatio">
      {/* <div className="macroRatio__f" style={{width: width_f ? width_f : 0}}></div>
      <div className="macroRatio__p" style={{width: width_p ? width_p : 0}}></div>
      <div className="macroRatio__c" style={{width: width_c ? width_c : 0}}></div> */}
      <div className="macroRatio__f" style={{ flexGrow: width_f }}></div>
      <div className="macroRatio__p" style={{ flexGrow: width_p }}></div>
      <div className="macroRatio__c" style={{ flexGrow: width_c }}></div>
    </div>
  )
}


export default MacroRatio