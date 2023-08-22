import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
        <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <p className="mt-4"> <i>Updated: 27th June, 2023</i></p>
        <h2 className="text-center mt-5">Privacy Policy</h2>
          <p className="text-justify mt-4">
            Protecting your privacy is our top priority. 
            We collect and use your personal information solely for order processing, customer support, and improving our services. 
            Rest assured, we do not sell or share your information with third parties. 
            Your data is securely stored and we employ industry-standard measures to prevent unauthorized access. 
            By using our website, you agree to our privacy practices.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;