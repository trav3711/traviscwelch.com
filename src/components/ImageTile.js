import React from "react"

import Content from "../components/Content"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ImageTile(props){

  return(
    <div className="p-2 text-center" fluid={true}>

        <img className="p-5" src={props.src} alt={"photo"} width={"100%"} />

    </div>
  )

}

export default ImageTile
