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

        <ImageTile src={images['photo5.jpg']} title={'Snack Time'} location={'Sellwood, OR'}/>
        <ImageTile src={images['photo2.jpg']} title={'Dragon'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo13.jpg']} title={'Pops'} location={'Lake Almanor, CA'}/>
        <ImageTile src={images['photo14.jpg']} title={''} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo3.jpg']} title={'Stuck'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo1.jpg']} title={'Big Lil'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo4.jpg']} title={'Morning Kitty Pool'} location={'Sellwood, OR'}/>
        <ImageTile src={images['photo6.jpg']} title={'Spook'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo7.jpg']} title={'Retirement'} location={'Lake Almanor, CA'}/>
        <ImageTile src={images['photo8.jpg']} title={'Mt. Jefferson'} location={'Mt. Jefferson Wilderness, OR'}/>
        <ImageTile src={images['photo9.jpg']} title={'Palette'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo10.jpg']} title={'Festival of Light'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo11.jpg']} title={'Walk'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo12.jpg']} title={'Abstract'} location={'SE Portland, OR'}/>
        <ImageTile src={images['photo15.jpg']} title={'Abstract'} location={'SE Portland, OR'}/>

      </Content>
    </div>
  );

}

export default PhotoPage;
