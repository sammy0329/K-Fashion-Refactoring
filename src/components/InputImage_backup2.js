import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import axios from "axios";

const InputImage = ({ titleUpdater }) => {
  const navigate = useNavigate();
  //파일 미리볼 url을 저장해줄 state

  const [state, setState] = useState({
    fileImage: "",
    reqImage: "",
    submitClick: false,
    loading: false,
    data: "",
  });

  // 파일 저장
  const saveFileImage = (e) => {
    // Blob URL Image는 img 태그에 src에 넣으면 가져올 수 있음
    setState({
      ...state,
      reqImage: e.target.files[0],
      fileImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(state.fileImage);
    setState({
      ...state,
      reqImage: "",
      fileImage: "",
    });
  };

  useEffect(() => {
    if (state.data !== "") {
      navigate("/result", {
        state: {
          fileImage: state.fileImage,
          resultData: state.data,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);

  useEffect(() => {
    if (state.reqImage) {
      const formData = new FormData();
      formData.append("image", state.reqImage);
      formData.append("enctype", "multipart/form-data");

      const url = "/image/";

      const fetchData = async () => {
        setState({
          ...state,
          loading: true,
        });
        // 타이틀 로딩중으로 변경
        titleUpdater("Loading...");
        try {
          await axios({
            method: "post",
            url: url,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((response) => {
            setState({
              ...state,
              data: response.data,
            });
          });
        } catch (error) {
          console.log(error);
          NotificationManager.warning(
            "Request failed with status code 500.",
            "ERROR! BAD_RESPONSE!",
            5000
          );
        }
        setState({
          ...state,
          loading: false,
        });
        titleUpdater("K-Fashion Recomedation");
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.submitClick]);

  const handleClick = async (e) => {
    e.preventDefault();
    // input 이미지가 없을시 에러창을 띄워주고 이미지가 있다면 useEffect를 통한 axios 처리를 위해 submitClick state를 변경
    if (state.reqImage !== "") {
      setState({
        ...state,
        submitClick: !state.submitClick,
      });
    } else {
      NotificationManager.error("Input yout image!", "Warning!", 5000);
    }
  };

  return (
    <>
      <NotificationContainer />
      <Container>
        <div className="text-center">
          {state.fileImage && (
            <img
              src={state.fileImage}
              alt="preview-img"
              style={{ height: "80vh", width: "40vw" }}
            />
          )}
        </div>

        <div className="form-group">
          <label className="form-label mt-4">Select your file!</label>

          <Row>
            <Col xs={15} md={11}>
              <input
                className="form-control"
                type="file"
                id="formFile"
                accept="image/*"
                onChange={(e) => {
                  deleteFileImage();
                  saveFileImage(e);
                }}
              />{" "}
            </Col>
            <Col xs={1} md={1}>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </button>
            </Col>
          </Row>
        </div>
        <div>{state.loading && <Loading />}</div>
      </Container>
    </>
  );
};

export default InputImage;
