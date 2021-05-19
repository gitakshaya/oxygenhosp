import { Card } from 'antd'
import React from 'react'
import Iframe from 'react-iframe'

function ContactUs() {
    return (
        <div className="row mt-2">
            <div className=" col-md-5 col-sm-12 my-2">
                <Card className="h-100cc">
                <h6 className="text-muted">You can find us on Google</h6>
                <Iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3732.094054972724!2d77.01396021492727!3d20.7064049361739!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d20.7064235!2d77.01618739999999!4m5!1s0x3bd72f8f4b5a640f%3A0xf363bf9cd733d44c!2sdr%20sumit%20agrawal%20akola%20embed%20map!3m2!1d20.7063718!2d77.0161704!5e0!3m2!1sen!2sin!4v1618058020833!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></Iframe>
                </Card>
            </div>
            <div className="col-md-5 col-sm-12">
                <Card className="mt-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className="text-first">Contact Info</h2>
                        <h5>For Booking an appointment – Please call on  :</h5>
                        <h5>+91 9970284068(Timing – 8:00 AM to 10:00 PM)</h5>
                        <h5>Website :https://care-and-cure.herokuapp.com/</h5>
                        <h5>E-Mail : dr.sumitagrawal12@gmail.com</h5>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default ContactUs
