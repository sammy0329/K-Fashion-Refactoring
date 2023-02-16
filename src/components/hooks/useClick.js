import { useEffect, useRef } from "react";
// React 16.8 부터는 Hook을 조건문, 반복문, 중첩함수 내에서 호출할 수 없다.
// fuction 실행 누군가 ref를 클릭했을때

const useClick = (onClick) => {
  
  const ref = useRef();

  useEffect(() => {
    const element=ref.current
    // useEffect가 mount 될 때 아래 코드 실행.
    if (typeof onClick !== "function") {
      return;
    }

    if (element) {
      element.addEventListener("click", onClick);
    }

    // componentWillUnMount 될 때 호출.
    // component가 mount 되지 않았을때 eventLister가 배치되게 하고 싶지 않음.
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return typeof onClick !== "function" ? undefined : ref;
};
