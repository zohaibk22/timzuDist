import React from "react";
import "./introductionMessage.css";

const IntroductionMessage = () => {
  return (
    <div>
      <h1 className="message-header">
        Introducing Timzu Distributors: Your Local Medical Supplier
      </h1>
      <wbr />
      <p>
        Welcome to Timzu Distributors, your trusted source for all your medical
        supply needs. Nestled in the heart of our community, we pride ourselves
        on being more than just a supplier; we're your partners in health care
        excellence.{" "}
      </p>
      <wbr />
      <p>
        At Timzu Distributors, we understand the importance of reliable,
        high-quality medical supplies for practitioners and patients alike.
        Whether you're a small clinic, a bustling hospital, or an individual in
        need, we're here to provide personalized service and top-notch products
        tailored to your unique requirements.
      </p>
      <wbr />
      {/* <p>
        With a commitment to excellence and a dedication to customer
        satisfaction, Timzu Distributors is your go-to destination for all
        things medical. Experience the convenience of local expertise and the
        assurance of premium quality. Welcome to the Timzu family, where your
        health is our priority.
      </p> */}
    </div>
  );
};

export default IntroductionMessage;
