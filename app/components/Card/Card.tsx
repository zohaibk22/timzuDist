import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";
import imageTest from "../../../public/next.svg";

interface ICardProps {
  imgLocation: string;
  img: any;
  height: string;
  width: string;
  children: any;
}

const Card = ({ imgLocation, img, height, width, children }: ICardProps) => {
  return (
    // <>
    //   <Container
    //     maxWidth="sm"
    //     style={{
    //       position: "relative",
    //       top: "2rem",
    //       right: "15%",
    //       height,
    //       width,
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         bgcolor: "#cfe8fc",
    //         height,
    //         width,
    //         borderRadius: "2%",
    //       }}
    //     >
    //       <div
    //         style={{ width: "50%", height: "100%", float: `${imgLocation}` }}
    //       >
    //         <Image src={img} alt={""} style={{ height: "100%" }} />
    //       </div>
    //       <div>{children}</div>
    //     </Box>
    //   </Container>
    // </>
  );
};

export default Card;
