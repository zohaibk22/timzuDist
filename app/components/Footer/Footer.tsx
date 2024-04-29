"use client";
import Image from "next/image";
import React from "react";
import {
  Icon,
  List,
  ListItem,
  Menu,
  MenuItem,
  MenuMenu,
  Segment,
} from "semantic-ui-react";

import "./Footer.scss";

const Footer = () => {
  return (
    <Segment
      className="w-full bottom-0 m-0 bg-blue-500"
      style={{
        // position: "fixed",
        bottom: "0",
        margin: "0",
        // backgroundColor: "#C3E5FF",
      }}
    >
      {/* <Image src="/images/wireframe/media-paragraph.png" alt="" /> */}
      <List celled horizontal>
        <ListItem className="list-item">
          <Icon
            name="phone"
            circular
            style={{ position: "relative", bottom: "1vh", right: ".5vh" }}
          />
          Phone: 347-307-6212
        </ListItem>
        <ListItem className="list-item">
          <Icon
            name="mail outline"
            circular
            style={{ position: "relative", bottom: "1vh", right: ".5vh" }}
          />
          Email: timzu.distributors@gmail.com
        </ListItem>
        <ListItem className="list-item">
          <Icon
            name="home"
            circular
            style={{ position: "relative", bottom: "1vh", right: ".5vh" }}
          />
          PO Box 294, Yonkers NY 10710
        </ListItem>
      </List>
    </Segment>
  );
};

export default Footer;
