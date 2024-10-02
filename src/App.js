import logo from './photos/logo.png';
import main from './photos/main.png';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fade, Zoom, Slide  } from 'react-awesome-reveal';
import Hamburger from 'hamburger-react'
import React, { useState } from 'react';
import { GhostNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsiveSecond = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 720 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1
  }
};

const responsiveThird = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4
  }
};
function App() {
  const [isOpen, setOpen] = useState(false)
  return (

    <div className="App">

      {isOpen ?
        <Slide >
          <ul className='animate__backInRight' id='mobileMenu'>
            <li><a onClick={() => { setOpen(false) }} href="#first">Главная</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#about">О Нас</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#galery">Галерея</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#servicesDiv">Услуги</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#reviewsDiv">Отзывы</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#team">Команда</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#partners">Партнеры</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#map">Карта</a></li>
          </ul>
        </Slide>
        : <></>}


      <header>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><a href="#first">Главная</a></li>
          <li><a href="#about">О Нас</a></li>
          <li><a href="#galery">Галерея</a></li>
          <li><a href="#servicesDiv">Услуги</a></li>
          <li><a href="#reviewsDiv">Отзывы</a></li>
          <li><a href="#team">Команда</a></li>
          <li><a href="#partners">Партнеры</a></li>
          <li><a href="#map">Карта</a></li>
        </ul>
        <div id='hamMenu'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {/* <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "black",
          listHoverColor: ["transparent", "#fff"],
          floatButtonX: 87,
          floatButtonY: 15,
          navigationButton: {
            borderRadius: "5px",
            width: "50px",
            backgroundColor: "black",
          },
          navigationBackground: {
            backgroundColor: "black",
          },
          iconColor: "#fff",
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif',
          }}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar> */}
        </div>

      </header>
      <div id='first'>

        <Fade triggerOnce={true}>
          <div id='mainBlock'>
            <img src={main} alt="" />
            <div className='cover'></div>
            <div id='mainTxt'>
              <h1>Добро пожаловать в <br /> клинику</h1>
              <div></div>
              <p>Мы заботимся о вашем здоровье</p>
            </div>
          </div>
        </Fade >
      </div>

      <Zoom>
        <div id='about'>
          <img src={main} alt="" />
          <div>
            <h1>О нас</h1>
            <div id='line'></div>
            <p>
              Наша клиника предлагает первоклассное медицинское обслуживание с командой высококвалифицированных специалистов. Мы стремимся предоставлять индивидуализированный уход каждому нашему пациенту.
            </p>
          </div>
        </div>
      </Zoom>

      <div id='galery'>
        <h1>Галерея</h1>
        <div id='lineInGalery'></div>
        <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={1000}
            containerClass="carousel-container"
            responsive={responsive}
            infinite={true}>
            <div className='galeryDiv'>
              <div className='cover'></div>
              <img src={main} alt="" />
            </div>
            <div className='galeryDiv'>
              <div className='cover'></div>
              <img src={main} alt="" />
            </div>
            <div className='galeryDiv'>
              <div className='cover'></div>
              <img src={main} alt="" />
            </div>
            <div className='galeryDiv'>
              <div className='cover'></div>
              <img src={main} alt="" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* <Fade> */}
      <div id='backDivImg'>
        <div>
          <h2>Преимущества нашей клиники</h2>
          <div id='lineinBackDiv'></div>
          <p>Лучшие врачи и современное оборудование</p>
        </div>
      </div>
      {/* </Fade> */}

      <div id='servicesDiv'>
        <h1>Услуги</h1>
        <div id='lineInServices'></div>
        <div id='services'>
          <div>
            <img src={main} alt="" />
            <h3>Лечение и терапия</h3>
            <p>Эффективные методики лечения, основанные на передовых медицинских исследованиях</p>
          </div>
          <div>
            <img src={main} alt="" />
            <h3>Диагностические услуги</h3>
            <p>Современные диагностические технологии для точных результатов</p>
          </div>
          <div>
            <img src={main} alt="" />
            <h3>Общие медицинские осмотры</h3>
            <p>Предлагаем комплексные медицинские осмотры для поддержания вашего здоровья</p>
          </div>
        </div>
      </div>

      <div id='reviewsDiv'>
        <h1>Отзывы</h1>
        <div id='lineInReviews'></div>
        <div id='reviews'>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={1000}
            containerClass="carousel-container"
            responsive={responsiveSecond}
            infinite={true}>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i class="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i class="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i class="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i class="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i class="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i class="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i class="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i class="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
          </Carousel>

        </div>
      </div>

      <div id='team'>
        <h1>Команда</h1>
        <div id='lineInTeam'></div>
        <Carousel
          // autoPlay={true}
          // autoPlaySpeed={2000}
          transitionDuration={1000}
          containerClass="carousel-container"
          responsive={responsiveSecond}
          infinite={true}>
          <div className='teamwDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={main} alt="" />
            <p style={{ margin: '25px 0', textAlign: 'center' }}>
              Эффективные методики лечения, основанные на передовых медицинских исследованиях
            </p>
            <p style={{ marginTop: '35px', marginBottom: '20px', fontSize: 18, fontWeight: '600' }}>Байрам Байрамов</p>
            <p>Директор</p>
          </div>
          <div className='teamwDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={main} alt="" />
            <p style={{ margin: '25px 0', textAlign: 'center' }}>
              Эффективные методики лечения, основанные на передовых медицинских исследованиях
            </p>
            <p style={{ marginTop: '35px', marginBottom: '20px', fontSize: 18, fontWeight: '600' }}>Байрам Байрамов</p>
            <p>Директор</p>
          </div>
          <div className='teamwDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={main} alt="" />
            <p style={{ margin: '25px 0', textAlign: 'center' }}>
              Эффективные методики лечения, основанные на передовых медицинских исследованиях
            </p>
            <p style={{ marginTop: '35px', marginBottom: '20px', fontSize: 18, fontWeight: '600' }}>Байрам Байрамов</p>
            <p>Директор</p>
          </div>
          <div className='teamwDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={main} alt="" />
            <p style={{ margin: '25px 0', textAlign: 'center' }}>
              Эффективные методики лечения, основанные на передовых медицинских исследованиях
            </p>
            <p style={{ marginTop: '35px', marginBottom: '20px', fontSize: 18, fontWeight: '600' }}>Байрам Байрамов</p>
            <p>Директор</p>
          </div>
        </Carousel>
      </div>

      <div id='partners'>
        <h1>Партнеры</h1>
        <div id='lineInpartners'></div>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={0}
          transitionDuration={2500}
          infinite={true}
          customTransition={'transform 3s linear'}
          containerClass="carousel-container"
          responsive={responsiveThird}
          arrows={false}>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={logo} alt="" />
          </div>
        </Carousel>
      </div>

      <div id='map'>
        <h1>Карта</h1>
        <div id='lineInMap'></div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.98758440325756!2d49.83040338311861!3d40.36892887193947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d007fcf658b%3A0x600e0acc477acd77!2sBlack%20Dental!5e0!3m2!1sru!2saz!4v1727001739227!5m2!1sru!2saz" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <footer>
        <div className='ffooter'>
          <h3>Black Dental</h3>
          <p>Авторские права © 2024 Все права защищены</p>
        </div>
        <div className='sfooter'>
          <ul>
            <li><a href="#first">Главная</a></li>
            <li><a href="#about">О Нас</a></li>
            <li><a href="#galery">Галерея</a></li>
            <li><a href="#servicesDiv">Услуги</a></li>
          </ul>
          <ul>
            <li><a href="#reviewsDiv">Отзывы</a></li>
            <li><a href="#team">Команда</a></li>
            <li><a href="#partners">Партнеры</a></li>
            <li><a href="#map">Карта</a></li>
          </ul>
        </div>
      </footer>

      <div id='contact'>
        <a target='_blank' href="https://wa.me/994552270932">
          <i style={{ color: '#fff', fontSize: 36 }} class="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </div>

  );
}

export default App;
