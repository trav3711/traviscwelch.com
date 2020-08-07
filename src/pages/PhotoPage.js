import React from "react";

import Hero from "../components/Hero"
import Content from "../components/Content"
import ImageTile from "../components/ImageTile"

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../content/photos/', false, /\.(png|jpe?g|svg)$/));

function PhotoPage(props){

  return(
    <div>
      <Hero title={props.title} text={props.text} />

      <Content>

        <ImageTile src={images['photo8.jpg']} title={'Mt. Jefferson'} location={'Mt. Jefferson Wilderness, OR'}/>
        <ImageTile src={images['photo1.jpg']} title={'Big Lil'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo2.jpg']} title={'Mik'} location={'Forest Park, Portland, OR'}/>
        <ImageTile src={images['photo3.jpg']} title={'Lines'} location={'Sellwood, OR'}/>
        <ImageTile src={images['photo4.jpg']} title={'Morning Kitty Pool'} location={'Sellwood, OR'}/>
        <ImageTile src={images['photo5.jpg']} title={'Snack Time'} location={'Sellwood, OR'}/>
        <ImageTile src={images['photo6.jpg']} title={'Dragon'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo7.jpg']} title={'Retirement'} location={'Lake Almanor, CA'}/>

      </Content>
    </div>
  );

}

export default PhotoPage;
