import logo from './photos/logo.png';
import main from './photos/main.png';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Hamburger from 'hamburger-react'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default value
  const handleLanguageChange = (event) => {
    const value = event.target.value;
    changeLanguage(value);

    setSelectedLanguage(value);  // Update the selected language
  };
  return (

    <div className="App">
      {/* <h1 style={{ color: '#fff' }}>{t("test")}</h1> */}
      {isOpen ?
        <Slide >
          <ul className='animate__backInRight' id='mobileMenu'>
            <li>
              <select
                onChange={handleLanguageChange}
                value={selectedLanguage}
                style={{ boxShadow: 'none', fontSize: '18px', padding: "8px 13px ", backgroundColor: '#000', color: '#fff', border: 'none', borderBottom: '2px solid white', outline: 'none' }}>
                <option value='az'>AZ</option>
                <option value='ru'>RU</option>
                <option selected value='en'>EN</option>
              </select>
            </li>
            <li><a onClick={() => { setOpen(false) }} href="#first">{t("menuHome")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#about">{t("menuAbout")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#galery">{t("menuGalery")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#servicesDiv">{t("menuServices")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#reviewsDiv">{t("menuReviews")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#team">{t("menuTeam")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#partners">{t("menuPartners")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#map">{t("menuMap")}</a></li>
          </ul>
        </Slide>
        : <></>}


      <header>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li><a href="#first">{t("menuHome")}</a></li>
          <li><a href="#about">{t("menuAbout")}</a></li>
          <li><a href="#galery">{t("menuGalery")}</a></li>
          <li><a href="#servicesDiv">{t("menuServices")}</a></li>
          <li><a href="#reviewsDiv">{t("menuReviews")}</a></li>
          <li><a href="#team">{t("menuTeam")}</a></li>
          <li><a href="#partners">{t("menuPartners")}</a></li>
          <li><a href="#map">{t("menuMap")}</a></li>
          <li>
            <select
              onChange={handleLanguageChange}
              value={selectedLanguage}
              style={{ fontSize: '16px', padding: "8px 13px ", backgroundColor: '#000', color: '#fff', border: 'none', borderBottom: '2px solid white', outline: 'none' }}>
              <option value='az'>AZ</option>
              <option value='ru'>RU</option>
              <option selected value='en'>EN</option>
            </select>
          </li>
        </ul>
        <div id='hamMenu'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

      </header>
      <div id='first'>

        <Fade triggerOnce={true}>
          <div id='mainBlock'>
            <img src={main} alt="" />
            <div className='cover'></div>
            <div id='mainTxt'>
              <h1>{t("mainTxt1")}</h1>
              <div></div>
              <p>{t("mainTxt2")}</p>
            </div>
          </div>
        </Fade >
      </div>

      {/* <Zoom> */}
        <div className='wow animate__animated animate__slideInUp' id='about'>
          <img src={main} alt="" />
          <div>
            <h1>{t("menuAbout")}</h1>
            <div id='line'></div>
            <p>
              {t("aboutTxt")}
            </p>
          </div>
        </div>
      {/* </Zoom> */}

      <div id='galery'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuGalery")}</h1>
        <div className='wow animate__animated animate__fadeInUp' id='lineInGalery'></div>
        <div className='wow animate__animated animate__slideInUp' style={{ borderRadius: '10px', overflow: 'hidden' }}>
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
          <h2 className='wow animate__animated animate__fadeInUp'>Преимущества нашей клиники</h2>
          <div className='wow animate__animated animate__fadeInUp' id='lineinBackDiv'></div>
          <p className='wow animate__animated animate__fadeInUp'>Лучшие врачи и современное оборудование</p>
        </div>
      </div>
      {/* </Fade> */}

      <div id='servicesDiv'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuServices")}</h1>
        <div className='wow animate__animated animate__fadeInUp' id='lineInServices'></div>
        <div id='services'>
          <div className='wow animate__animated animate__slideInUp'>
            <img src={main} alt="" />
            <h3>Лечение и терапия</h3>
            <p>Эффективные методики лечения, основанные на передовых медицинских исследованиях</p>
          </div>
          <div className='wow animate__animated animate__slideInUp'>
            <img src={main} alt="" />
            <h3>Диагностические услуги</h3>
            <p>Современные диагностические технологии для точных результатов</p>
          </div>
          <div className='wow animate__animated animate__slideInUp'>
            <img src={main} alt="" />
            <h3>Общие медицинские осмотры</h3>
            <p>Предлагаем комплексные медицинские осмотры для поддержания вашего здоровья</p>
          </div>
        </div>
      </div>

      <div id='reviewsDiv'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuReviews")}</h1>
        <div className='wow animate__animated animate__fadeInUp' id='lineInReviews'></div>
        <div className='wow animate__animated animate__slideInUp' id='reviews'>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            transitionDuration={1000}
            containerClass="carousel-container"
            responsive={responsiveSecond}
            infinite={true}>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i className="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i className="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i className="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i className="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i className="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i className="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
            <div style={{ position: 'relative' }} className='reviewDiv'>
              <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'transparent' }}></div>
              <p><i className="fa-solid fa-quote-left"></i>
                Потрясающая клиника с отличными специалистами. Очень довольна обслуживанием.
                <i className="fa-solid fa-quote-right"></i></p>
              <img src={main} alt="" />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p>Анна Иванова</p>
                <div style={{ margin: '10px 0' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>

            </div>
          </Carousel>

        </div>
      </div>

      <div id='team'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuTeam")}</h1>
        <div className='wow animate__animated animate__slideInUp' id='lineInTeam'></div>
        <Carousel
          // autoPlay={true}
          // autoPlaySpeed={2000}
          className='wow animate__animated animate__slideInUp'
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
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuPartners")}</h1>
        <div className='wow animate__animated animate__slideInUp' id='lineInpartners'></div>
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
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuMap")}</h1>
        <div className='wow animate__animated animate__fadeInUp' id='lineInMap'></div>
        <iframe className='wow animate__animated animate__fadeInUp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.98758440325756!2d49.83040338311861!3d40.36892887193947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d007fcf658b%3A0x600e0acc477acd77!2sBlack%20Dental!5e0!3m2!1sru!2saz!4v1727001739227!5m2!1sru!2saz" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <footer>
        <div className='ffooter'>
          <h3>Black Dental</h3>
          <p>{t("Copyright")}</p>
        </div>
        <div className='sfooter'>
          <ul>
            <li><a href="#first">{t("menuHome")}</a></li>
            <li><a href="#about">{t("menuAbout")}</a></li>
            <li><a href="#galery">{t("menuGalery")}</a></li>
            <li><a href="#servicesDiv">{t("menuServices")}</a></li>
          </ul>
          <ul>
            <li><a href="#reviewsDiv">{t("menuReviews")}</a></li>
            <li><a href="#team">{t("menuTeam")}</a></li>
            <li><a href="#partners">{t("menuPartners")}</a></li>
            <li><a href="#map">{t("menuMap")}</a></li>
          </ul>
        </div>
      </footer>

      <div id='contact'>
        <a target='_blank' href="https://wa.me/994552270932">
          <i style={{ color: '#fff', fontSize: 36 }} className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </div>

  );
}

export default App;
