import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import usePromise from "../lib/usePromise";

import axios from "axios";

const InputImage = () => {
  const navigate = useNavigate();
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  const [reqImage, setReqImage] = useState("");
  const [submitClick, setSubmitClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    // Blob URL Image는 img 태그에 src에 넣으면 가져올 수 있음
    setReqImage(e.target.files[0]);
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    setReqImage("");
  };

  useEffect(() => {
    if (data !== "") {
      navigate("/result", {
        state: {
          fileImage: fileImage,
          resultData: data,
        },
      });
    }
  }, [data]);

  useEffect(() => {
    if (reqImage) {
      const formData = new FormData();
      formData.append("image", reqImage);
      formData.append("enctype", "multipart/form-data");

      const url = "/image/";

      const fetchData = async () => {
        setLoading(true);
        try {
          await axios({
            method: "post",
            url: url,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((response) => {
            setData(response.data);
          });
        } catch (error) {
          console.log(error);
        }
        setLoading(false);

       
      };
      
      fetchData();
    }
  }, [submitClick]);

  const handleClick = async (e) => {
    e.preventDefault();
    setSubmitClick(!submitClick);
  };

  return (
    <>
      <Container>
        <div className="text-center">
          {fileImage && (
            <img
              src={fileImage}
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
        <h1>{loading && "로딩중"}</h1>
      </Container>
    </>
  );
};

export default InputImage;
