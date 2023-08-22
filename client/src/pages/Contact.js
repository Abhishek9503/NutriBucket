import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiSupport, BiPhoneCall, BiMailSend} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contact us ">
        <div className="col-md-6">
          <img
            src="/images/contact us.png"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-3 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-5">
          Got a question or need assistance? We're here to help! 
          Reach out to us and we'll be happy to assist you.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@nutribucket.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;