"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import {
  Button,
  Header,
  Icon,
  List,
  ListItem,
  Segment,
  SegmentInline,
} from "semantic-ui-react";
import flyer from "../public/flyer.pdf";
import homeImg from "../public/home-page.jpg";
import img from "../public/story.jpg";
import BootstrapCarousel from "./components/Carousels/Carousel";
import Footer from "./components/Footer/Footer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./home.scss";

export default function Home() {
  const formSubmit = (e: any) => {
    console.log("is this working");
    e.preventDefault();
    emailjs.sendForm(
      "service_ufs1e6o",
      "template_qutkzhv",
      e.target,
      "9nWQOVU4rO9hTXtNI"
    );
    // e.target = "";
  };
  return (
    <>
      <div className="w-full h-40 relative parent">
        <Image src={homeImg} alt="" style={{ filter: "brightness(50%)" }} />
        <div className="company-name">
          <p>
            Nestled in the heart of our community, we pride ourselves on being
            more than just a supplier; we&apos;re your partners in health care
            excellence.
          </p>
          {/* <span className=".timzu">Timzu</span>
          <span className="distributors ml-10">Distributors</span> */}
        </div>
        <div
          style={{ marginLeft: "10vw", marginTop: "5vh" }}
          className="ui placeholder segment w-3/4 ml-16"
        >
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">Or</div> */}
            <div className="middle aligned row">
              <div className="column">
                <p
                  style={{ fontSize: "x-large", color: "#9c9c99" }}
                  className="glove-title"
                >
                  At Timzu Distributors, we understand the importance of
                  reliable, high-quality medical supplies for practitioners and
                  patients alike. Whether you&apos;re a small clinic, a bustling
                  hospital, or an individual in need, we&apos;re here to provide
                  personalized service and top-notch products tailored to your
                  unique requirements.
                </p>
              </div>
              <div className="column">
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ marginLeft: "10vw", marginTop: "5vh" }}
          className="ui placeholder segment w-3/4 ml-16"
        >
          <div className="ui two column stackable  aligned grid">
            {/* <div className="ui vertical divider">Or</div> */}
            <div className="middle  row">
              <div className="column">
                <BootstrapCarousel />
              </div>
              <div className="column">
                <h1
                  style={{ fontSize: "xxx-large", color: "#a0ccd9" }}
                  className="mb-8 text-center glove-title"
                >
                  Derma Nitrile Examination Gloves
                </h1>
                <p
                  className="glove-title"
                  style={{ fontSize: "x-large", color: "#9c9c99" }}
                >
                  Derma Nitrile gloves are examination grade and offer a
                  superior barrier protection. They are most suitable for
                  medical industries or in food handling, where the wearer is
                  prone to skin allergies and irritation.
                </p>
                <div
                  className="flex flex-wrap mt-4"
                  style={{ justifyContent: "space-around" }}
                >
                  <div>
                    <h2
                      style={{ fontSize: "x-large", color: "#a0ccd9" }}
                      className="mt-4 glove-title "
                    >
                      Industry Application:
                    </h2>
                    <List className="bulleted label-detail">
                      <ListItem
                        style={{ fontSize: "large" }}
                        className="label-detail"
                      >
                        Dental and Medical
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Food Handling
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Mechanical/Engineering
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Hygiene
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        General Purpose
                      </ListItem>
                    </List>
                  </div>
                  <div>
                    <h2
                      style={{ fontSize: "x-large", color: "#a0ccd9" }}
                      className="mt-4 glove-title "
                    >
                      Why Derma Nitrile:
                    </h2>
                    <List className="bulleted label-detail">
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Protects against skin allergies
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Textured Fingertips for added grip
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Low Dermatitis Potential
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        Medical Examination Grade (AQL 1.5)
                      </ListItem>
                      <ListItem
                        className="label-detail"
                        style={{ fontSize: "large" }}
                      >
                        3 ML thickness for Dexterity
                      </ListItem>
                    </List>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "large",
                    color: "#9c9c99",
                  }}
                  className="mt-12 glove-title"
                >
                  For more information, inquire below about our extensive range
                  of medical glove products. Our dedicated team is ready to
                  provide detailed specifications, pricing options, and
                  assistance tailored to your requirements. Don&apos;t hesitate
                  to reach out to us for expert guidance on selecting the most
                  suitable gloves for your medical needs.
                </p>
                <div className="App mt-24" style={{ textAlign: "center" }}>
                  <a
                    href={flyer}
                    target="_blank"
                    className="relative glove-title"
                    style={{ fontSize: "large" }}
                  >
                    Click Here for Spec Sheet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Segment placeholder>
          <SegmentInline>
            <h2
              className="ui label-detail center mb-4"
              style={{ fontSize: "xx-large", color: "#a0ccd9" }}
            >
              Inquire Information
            </h2>

            <form className="ui form  flex flex-wrap" onSubmit={formSubmit}>
              <div>
                <div
                  className="field flex-item"
                  style={{ marginRight: "10vh" }}
                >
                  <p className="label-detail" style={{ color: "#9c9c99" }}>
                    First Name
                  </p>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    style={{ borderRadius: ".5rem" }}
                  />
                </div>
                <div
                  className="field flex-item"
                  style={{ marginRight: "10vh" }}
                >
                  <p className="label-detail" style={{ color: "#9c9c99" }}>
                    Last Name
                  </p>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    style={{ borderRadius: ".5rem" }}
                  />
                  <div className="mt-8">
                    <button
                      className="ui button"
                      style={{ marginRight: "5vh", display: "inline-block" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="field flex-item"
                  style={{ marginRight: "10vh" }}
                >
                  <p className="label-detail" style={{ color: "#9c9c99" }}>
                    Email
                  </p>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="First Name"
                    style={{ borderRadius: ".5rem" }}
                  />
                </div>
                <div
                  className="field flex-item"
                  style={{ marginRight: "10vh" }}
                >
                  <p
                    className="label-detail"
                    style={{ color: "#9c9c99", borderRadius: ".5rem" }}
                  >
                    Message
                  </p>
                  <textarea
                    name="message"
                    placeholder="Message"
                    style={{ borderRadius: ".5rem" }}
                  />
                </div>
              </div>
            </form>
          </SegmentInline>
        </Segment>
        <Footer />
      </div>
    </>
  );
}
