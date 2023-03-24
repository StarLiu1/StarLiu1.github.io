import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../Assets/Liu, Star_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1500);
  const [pageNum, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  var N = 10; 
  const [arrayPageNum] = useState(Array.apply(null, {length: N}).map(Number.call, Number));
  const [arrayButtons, setArrayButtons] = useState(<button></button>);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess(pdf)  {
    // console.log('Document',pdf);
    setTotalPages(pdf?.numPages);
  }

  useEffect(() => {
    if(pageNum > totalPages){
      setPageNumber(pageNum - 1);
    }else if(pageNum < 0){
      setPageNumber(pageNum + 1);
    }else{
      setPageNumber(pageNum);
    }

  }, [totalPages, pageNum]);
  
  useEffect(() => {
    const array = []
    for(var p = 1; p <= totalPages; p++){
      const pageNumber = arrayPageNum[p]
      array.push(<Button key={pageNumber} onClick={()=>setPageNumber(pageNumber)}>{p}</Button>)
    }
    setArrayButtons(array);
  }, [totalPages, arrayPageNum]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume" style={{paddingTop: "0px"}}>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNum > totalPages ? totalPages : (pageNum < 1 ? 1 : pageNum)} scale={width > 900 ? 2.1 : 0.6} />
            {/* {pageNum.map(function(pageNum, i){
              return <Page pageNumber={pageNum} key={i} scale={width > 900 ? 2 : 0.5}/>;
            })} */}
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "20px"}}>
          <Button onClick={()=>setPageNumber(pageNum - 1)} style={{backgroundColor:"#495e8d"}}>
            Previous Page
          </Button>
          {arrayButtons}
          <Button onClick={()=>setPageNumber(pageNum + 1)} style={{backgroundColor:"#495e8d"}}>
            Next Page
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
