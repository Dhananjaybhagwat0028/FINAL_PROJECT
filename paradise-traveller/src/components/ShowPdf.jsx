import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Col, Divider, Row } from "antd";

const ShowPdf = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let item = JSON.parse(localStorage.getItem("key"));
  //   const [inputs, setInputs] = useState([{}]);
  let evnt = location.state.eve;

  console.log(evnt);

  // const viewEvent = async () => {
  //   await axios
  //     .get(`http://localhost:8083/event/find.paradise2/${evnt}`)
  //     .then((response) => {
  //       setInputs(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

  //   useEffect(() => {
  //     viewEvent();
  //   }, []);

  const generateInvoicePdf = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10);
      pdf.save("ticket.pdf");
      navigate("/");
    });
  };

  return (
    <>
      <h1>Welcome to Details page</h1>

      <div style={{ padding: 20 }}>
        <div id="divToPrint" className="mt4 height=100% width=75% container">
          <Row>
            <Col span={12}>
              <Divider style={{ textAlign: "center" }}>
                <h4>Invoice</h4>
              </Divider>
            </Col>
          </Row>

          <h5>Invoice</h5>
          {
            <>
              <div>
                <h6>Name : {item.data.name}</h6>
              </div>
              <div>
                <h6>Event Name : {evnt.eventName}</h6>
              </div>
              <div>
                <h6>Event Cost : {evnt.eventCost}</h6>
              </div>
              <div>
                <h6>Event Duration : {evnt.eventDate}</h6>
              </div>
            </>
          }

          <Row
            style={{ marginTop: 48, textAlign: "left" }}
            className="text-primary">
            {new Date().getHours() +
              ":" +
              new Date().getMinutes() +
              ":" +
              new Date().getSeconds()}
          </Row>

          <Row style={{ marginTop: 48, textAlign: "center" }}></Row>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => generateInvoicePdf()}>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
};
export default ShowPdf;
