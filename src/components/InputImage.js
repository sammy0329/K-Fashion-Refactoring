import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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

        <form>
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
                  {/* submit 버튼 클릭시 어떻게 할지 생각해야함 */}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
