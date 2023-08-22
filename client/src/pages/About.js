import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - NutriBucket"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h3>Our Mission</h3>
          To help people live a better, healthier, 
          and wholesome life by providing them with 100% certified, authentic organic and nutritious products.
          </p>
          <h3>Our Vision</h3>
          <p>To be the leading brand of Organic and Nutritious products in India.
             To give back to the environment and advance on a path to sustainability.
             To make consumers aware of the benefits of organic and nutrition by giving them choices of healthy lifestyle and eating.
             To create a big movement that would lead people to switch to organic and nutrition 
             and take up a healthier lifestyle just like it used to be hundreds of years ago, 
             when pesticides were not introduced and everything we consumed was natural and chemical free.
             </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;