import React from "react";
import { Container } from "../styles/styles";
import { MadeByContainer } from "./styles";

function MadeBy() {
  return (
    <MadeByContainer>
      <span className="right">All rights Reserved 2022</span>
      <span className="made-by"> <br />
        made by <a id="link-to-site" href="http://space21.io/">space21</a>
      </span>
    </MadeByContainer>
  );
}

export default MadeBy;
