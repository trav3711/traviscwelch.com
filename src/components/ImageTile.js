import React from "react"

function ImageTile(props){

  return(
    <div className="p-5 text-center" fluid={true}>

      <img className="" src={props.src} alt={"photo"} width={"60%"} />
      <h3 className="">{props.title}</h3>
      <p>{props.location}</p>

    </div>
  )

}

export default ImageTile
