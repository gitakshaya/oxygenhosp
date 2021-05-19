import { Card, List, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

function AboutUs() {
  return (
    <div className="mt-2">
      <h1 className="text-first">About Us</h1>

      <div className="row mt-2">
        <Card
          className="col-sm-12 col-md-5 offset-md-1"
          cover={
            <img
              className="card-img-top"
              src="/images/dr-4.jpeg"
              alt="Dr. Sumit Agrawal"
            />
          }
        >
          <Meta
            title="Dr. Sumit Agrawal"
            description={
              <p className="card-text">
                <p className="mb-0">MBBS, MD</p>
                <p className="mb-0">
                  (Consultant Intensivist &amp; Anaesthesiologist)
                </p>
                <p className="mb-0">J.J.Hospital, Mumbai</p>
                <p className="mb-0">Ex. Senior Intesivist</p>
                <p className="mb-0"></p>(BKC COVID Facility, Mumbai)
                <p className="mb-0"></p>Ex. Intensivist (FORTIS, Mumbai)
                <p className="mb-0">Ex. Specialist Medical Officer</p>
                <p className="mb-0">(E.S.I.S Hospital, Mumbai)</p>
                <p className="mb-0">Ex. Medical Officer (BMC, Mumbai)</p>
                <p className="mb-0">Reg. No.: MCI-1245495</p>
                <p className="mb-0">(M): 9970284068</p>
              </p>
            }
          />
        </Card>

        <Card
          className="col-sm-12 col-md-5"
          cover={
            <img
              className="card-img-top"
              src="/images/dr-4.jpeg"
              alt="Dr. Neha Agrawal"
            />
          }
        >
          <Meta
            title="Dr. Neha Agrawal"
            description={
              <p className="card-text">
                <p className="mb-0">MBBS, MD Medicine</p>
                <p className="mb-0">(Consultant Physician)</p>
                <p className="mb-0">Ex Physician (AIIMS, Jodhpur)</p>
                <p className="mb-0">Ex. Assistant Professor (Dr. S.N.M.C)</p>
                <p className="mb-0">Reg. No.: RMC-15317</p>
                <p className="mb-0">(M): 8425845856</p>
              </p>
            }
          />
        </Card>

        <Row className="mt-3" type={"flex"} justify={"center"}>
          <Col md={20} sm={24}>
            <Card
              title={
                <h4 className="text-first font-family">Objectives of Oxygen</h4>
              }
            >
              <h6 className="text-muted font-family">
                To provide a high quality personalized complete medical care to
                the family (excluding the pediatric age group). We believe in –
                Early diagnosis and adequate treatment to prevent further
                complications
              </h6>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3" type={"flex"} justify={"center"}>
          <Col md={20} sm={24}>
            <Card
              title={<h4 className="text-first font-family">Our Mission</h4>}
            >
              <h6 className="text-muted font-family">
                To provide healthcare of international standards through a team
                of qualified professionals and at a cost affordable to the
                community. We are also committed to maintain clinical excellence
                by focusing on healthcare academics with the use of latest
                technology
              </h6>

              <h6 className="text-muted font-family">
                To provide best quality : 1. Preventive 2. Primary 3. Secondary
                – Health Care
              </h6>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 font-family w-100" type={"flex"} justify={"center"}>
          <Col md={20} sm={24}>
            <Card title={<h4 className="text-first font-family">Vision</h4>}>
              <h6>
                To prevent the progression of disease by intervening at early
                stages
              </h6>
              <h6>
                Patient awareness regarding early and timely intervention to
                avoid disease complication.
              </h6>
              <h6>
                Achieving health of our patients in all dimensions – Physical,
                Mental and Spiritual.
              </h6>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 font-family w-100" type={"flex"} justify={"center"}>
          <Col md={20} sm={24}>
            <Card title={<h4 className="text-first font-family">Values</h4>}>
            <div className="text-muted">
              <h6>Perfection – Quality care through trained professionals.</h6>
              <h6>
                Politeness – Realising the sufferings of our patients, we take
                proper care in understanding their pain and providing them, the
                utmost, gentle, polite and motherly care.
              </h6>
              <h6>
                Technology – Using the latest technology to improve patient
                care, easy communication, easy reproducibility and paperless,
                fast and portable health care facility.
              </h6>
              <h6>
                Environment – To provide calm, clean, pleasant and safe
                environment to expedite the healing process.
              </h6></div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUs;
