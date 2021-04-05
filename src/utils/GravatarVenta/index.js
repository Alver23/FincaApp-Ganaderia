import React from "react";
import md5 from "md5";
import Avatar from "./styles";

const Gravatar = (props) => {
  const email = props.email;
  const hash = md5(email || "example");
  const avatarUrl = `https://res.cloudinary.com/imagesfull/image/upload/v1613760020/FincaAppGanado/Imagen55_vj74ap.png`;

  return <Avatar className={props.className} src={avatarUrl} alt="Avatar" />;
};

export default Gravatar;
