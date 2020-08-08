import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
      <div>
          <Hero title={props.title} />

          <Content>
            <p>Hello There! My name’s Travis and I’m currently twenty-three year old software developer, photographer, hiker, and Japan enthusiast living in Portland, Oregon.</p>

            <p>For those of you who are reading this for hiring purposes, I’ll get my technical qualifications out of the way first. I recently graduated from Lewis & Clark College with a degree in Computer Science and Mathematics, and I am a software developer by trade. I’m proficient in Python, Java, C, React, Flask, SQL, Linux/Unix, and Windows operating systems. I have two years of professional IT experience as well six years of general work experience which is all detailed in my resume, <a className="link" href="https://www.linkedin.com/in/travis-welch-004b63107/">LinkedIn</a>, and <a className="link" href="https://github.com/trav3711">Github</a>.</p>

            <p>Now, for the more interesting and exciting parts of myself. </p>

            <p>I’d like to think that I’m an amateur photographer and you can see a portfolio of my work on my <Link className="link" to="/photography">photography page</Link>, or god forbid, my <a className="link" href="https://www.instagram.com/theweirdwelch/?hl=en">Instagram</a>. I enjoy both digital photography and film photography, and I would like to eventually show more of my film images, but access to a darkroom right now is fairly limited. I enjoy street photography, and would love to one day learn about photographing in a studio, but for now, I photograph my friends in my backyard. </p>

            <p>I also formally study Japanese culture, society, and language in my spare time. I’ve spent the last three years studying the Japanese language inside and outside of a formal classroom. I’ve studied abroad in Osaka, Japan where I lived with several Japanese students and built a wonderful community of friends in the Kansai region. </p>

            <p>Lastly, I’ve become an avid solo hiker, biker, and backpacker with Covid-19 enveloping everyone’s life. You can see most of my activity on my <a className="link" href="https://www.strava.com/athletes/2639049">Strava</a>. </p>
          </Content>
      </div>
    );

}

export default AboutPage;
