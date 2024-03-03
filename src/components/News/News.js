import React from "react";
import { Row, Col, Carousel, Card, Button, Container } from "react-bootstrap";

const News = () => {
  return (
    <section className=" News" id="news">

      <div style={{ height: "150px", overflow: "hidden" }}
      ><svg viewBox="0 0 500 150" preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}>
          <path d="M0.00,50.10 C150.00,150.33 271.29,-50.10 500.00,50.10 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: "none", fill: "#0072ff" }}></path></svg></div>
      <Container>
        <Row className="text-center mb-3">
          <h2 className="text text-primary fw-bold">اخبار</h2>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Card style={{ width: "22rem", margin: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="./assets/images/news/news1.jpg "
                    style={{ height: "50", width: "300" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text text-primary fw-bold">محصول  رنگ روغنی شرکت رنگین کمان</Card.Title>
                    <Card.Text className="text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحگرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "22rem", margin: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="./assets/images/news/news2.jpg "
                    style={{ height: "50", width: "300" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text text-primary fw-bold">محصول  رنگ ورزین شرکت رنگین کمان</Card.Title>
                    <Card.Text className="text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "22rem", margin: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="./assets/images/news/news3.jpg "
                    style={{ height: "50", width: "300" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text text-primary fw-bold">محصول رنگ روغنی شرکت رنگین کمان</Card.Title>
                    <Card.Text className="text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: "22rem", margin: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="./assets/images/news/news4.jpg "
                    style={{ height: "50", width: "300" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text text-primary fw-bold">محصول رنگ ورزین شرکت رنگین کمان</Card.Title>
                    <Card.Text className="text  text-right">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>


              {/* Add more Carousel.Items as needed */}
            </Carousel>
            <Button
              variant="primary"
              style={{
                position: "relative",
                top: "-50%",
                right: "-5%",
                zIndex: "1",

              }}
              onClick={() =>
                document.querySelector(".carousel-control-prev").click()
              }
            >
              {"<"}
            </Button>

            <Button
              variant="primary"
              style={{
                position: "relative",
                top: "-50%",
                left: "80%",
                zIndex: "1",

              }}
              onClick={() =>
                document.querySelector(".carousel-control-next").click()
              }
            >
              {">"}
            </Button>
          </Col>
        </Row>
      </Container>
      <div style={{ height: '150px', overflow: 'hidden', position: 'relative' }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%', position: 'absolute', bottom: 0 }}>
          <path d="M-0.00,50.10 C150.00,150.33 271.29,-50.10 500.00,50.10 L500.00,150.00 L-0.00,150.00 Z" style={{ stroke: 'none', fill: '#08f' }}></path>
        </svg>
      </div>
    </section>
  );
};

export default News;
