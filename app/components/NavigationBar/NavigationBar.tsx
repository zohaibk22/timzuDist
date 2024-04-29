"use client";

import React, { Component } from "react";
import {
  Header,
  Icon,
  Menu,
  MenuItem,
  MenuMenu,
  Segment,
} from "semantic-ui-react";
import "./NavigationBar.scss";

export default class NavigationBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    console.log(this.state, "state");
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Icon name="heartbeat" circular />
          <h1
            className="title"
            style={{ marginTop: ".2vh", marginLeft: "1vh", fontSize: "2vh" }}
          >
            Timzu Distributors
          </h1>
          <MenuMenu position="right">
            <MenuItem
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            {/* <MenuItem
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            /> */}
          </MenuMenu>
        </Menu>
      </div>
    );
  }
}
