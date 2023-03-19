import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function InputImage() {
  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const desc = e.target[0].value;

    // event로 file 객체 얻기
    const upload_file = e.target[1].files[0];

    const formData = new FormData();
    // formData.append("description", desc);
    formData.append("files", upload_file);
    formData.append("enctype", "multipart/form-data");

    // 파일을 업로드 시킬 Server 주소
    const URL = "http://127.0.0.1:8000/image";
    console.log(upload_file)
    axios({
      method: "post",
      url: URL,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(function (response) {
      console.log(response);
    });
  };

  return (
    <>
      <Container>
        <div className="text-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="preview-img"
              style={{ height: "auto", width: "auto" }}
            />
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="formFile" className="form-label mt-4">
                Select your file!
              </label>

              <Row>
                <Col xs={15} md={11}>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) => {
                      encodeFileToBase64(e.target.files[0]);
                    }}
                  />{" "}
                </Col>
                <Col xs={1} md={1}>
                  {/* submit 버튼 클릭시 어떻게 할지 생각해야함 보여주기식으로 바로 result로 넘어가도록 설정 */}
                  {/* <LinkContainer to="/result"> */}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  {/* </LinkContainer> */}
                </Col>
              </Row>
            </div>
          </fieldset>
        </form>
      </Container>
    </>
  );
}

export default InputImage;
