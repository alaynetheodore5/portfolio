import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollEvent = e => {
    console.log(e.target.scrollTop);
    if(e.target.scrollTop > 850) {
      document.getElementById("header").style.backgroundColor="#CB997E";
      document.getElementById("header").style.opacity=".75";
      if(e.target.scrollTop > 3000) {
        document.getElementById("navportfolio").style.color="#F0EFEB";
        document.getElementById("navabout").style.color="#F0EFEB";
        document.getElementById("navhome").style.color="#F0EFEB";
        document.getElementById("navcontact").style.color="black";
      } 
      else if(e.target.scrollTop > 1700) {
        document.getElementById("navportfolio").style.color="black";
        document.getElementById("navabout").style.color="#F0EFEB";
        document.getElementById("navhome").style.color="#F0EFEB";
        document.getElementById("navcontact").style.color="#F0EFEB";
      }
      else if(e.target.scrollTop > 880) {
        document.getElementById("navportfolio").style.color="#F0EFEB";
        document.getElementById("navabout").style.color="black";
        document.getElementById("navhome").style.color="#F0EFEB";
        document.getElementById("navcontact").style.color="#F0EFEB";
      }  else {
        document.getElementById("navhome").style.color="#F0EFEB";
      }
    } else {
      document.getElementById("header").style.backgroundColor="transparent";
    }
  // const scrollEvent = $ => {
  // !(function($) {
  //   "use strict";
  //     // Navigation active state on scroll
  // var nav_sections = $('section');
  // var main_nav = $('.nav-menu, .mobile-nav');

  // $(window).on('scroll', function() {
  //   var cur_pos = $(this).scrollTop() + 200;

  //   nav_sections.each(function() {
  //     var top = $(this).offset().top,
  //       bottom = top + $(this).outerHeight();

  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       if (cur_pos <= bottom) {
  //         main_nav.find('li').removeClass('active');
  //       }
  //       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
  //     }
  //     if (cur_pos < 300) {
  //       $(".nav-menu ul:first li:first").addClass('active');
  //     }
  //   });
  // });
}

  
  return (
    <div className="main" onScroll={scrollEvent}>
      <Header />
      <Main />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
