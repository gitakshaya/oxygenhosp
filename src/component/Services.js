import { Card, List, Row, Col, Icon } from 'antd'
import React from 'react'

function Services() {
    return (
        <Row className=" d-flex justify-content-center" type="flex" gutter={[32, 8]}>
            <Col md={10} sm={24}>
                <Card className="service-card h-100" title={<h3><Icon className="icon-wrapper mr-2" type="home" />Home Visits</h3>}>

                    <p>We provide first of its kind, M.D. Doctor's home visitations service.</p>
                    <List>
                        <List.Item>Daily report analysis</List.Item>
                        <List.Item>Proper sanitary measures</List.Item>
                        <List.Item>Diagnosis instruments are provided by us</List.Item>
                        <List.Item></List.Item>
                    </List>
                </Card>
            </Col>

            <Col md={10} sm={24}>
                <Card className="service-card" title={<h3><Icon className="icon-wrapper mr-2" type="plus" />Patient care</h3>}>
                    <p>We deal with patients with utmost care &amp; offer them the best possible healthcare.</p>
                    <List>
                        <List.Item>Nebulisation</List.Item>
                        <List.Item>Blood sugar monitoring – Glucometer.</List.Item>
                        <List.Item>Pulse Oxymeter.</List.Item>
                        <List.Item>Suction machine,Syringe Pumps.</List.Item>
                        <List.Item>Oxygen,Defibrillator</List.Item>
                    </List>
                </Card>
            </Col>




        </Row>
    )
}

export default Services
