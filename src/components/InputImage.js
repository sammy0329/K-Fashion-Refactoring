import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import axios from "axios";



const InputImage = () => {
  const navigate = useNavigate();
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    // Blob URL Image는 img 태그에 src에 넣으면 가져올 수 있음
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  const handleClick = () => {

    navigate('/result', {
      state: {
        fileImage: fileImage,
      },
    });
  }
  

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
            <label className="form-label mt-4">
              Select your file!
            </label>

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
              
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                  Submit
                </button>
                
              </Col>
            </Row>
          </div>
      </Container>
    </>
  );
};

export default InputImage;
