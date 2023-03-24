
import defaultAxios from "axios";
import { useEffect, useState } from "react";

// axios는 디폴드 URL을 설정, axios instance를 보내지 않으면 default로 설정
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  if (!opts.url) {
    return;
  }

  // axios는 데이터를 받으면 처리하고 에러가 있을 때는 catch
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, []);
  return { ...state};
};

export default useAxios;