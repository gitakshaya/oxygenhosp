import React from 'react'
import { Carousel, Card } from "antd";
import intl from 'react-intl-universal';

function Home() {
    return (
        <div className="row">
        <Card className="p-3 mb-5 rounded bg-light col-sm-6 font-weight-bold text-monospace text-para font-family">
          <div className="my-2"></div>
         {intl.get("HOME_PARA_1")}
          <div className="my-2"></div>
         {intl.get("HOME_PARA_2")}
          <div className="my-2"></div>
          {intl.get("HOME_PARA_3")}
          <div className="my-2"></div>
          {intl.get("HOME_PARA_4")}
        </Card>
        {/* Small Slider Section */}
        <div className="col-sm-6">
          <Carousel autoPlay>
            <img src="/images/dr.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-2.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-3.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-4.jpeg" className="slider-img" alt="test"/>
          </Carousel>
        </div>

        {/* Features Section */}
        <div className="row w-100">

          <div className="bg-light offset-md-1 col-md-10 font-family">
            <h1>{intl.get("FEATURES")}</h1>
            <h4>In house Oxygen Plant</h4>
            <h4>Fully equipped ICU</h4>
            <h4>Central Suvillance on ICU beds</h4>
            <h4>HDU, Deluxe Rooms, General Ward</h4>
            <h4>X-Ray, Ultrasound</h4>
            <h4>Pathalogy Lab</h4>
            <h4>In house Drug Store</h4>
            <h4>Ambulance Service</h4>
            <h4>Billing as per Government rules</h4>
          </div>
          <Carousel autoPlay>
        </Carousel>
        </div>
      </div>
    )
}

export default Home
