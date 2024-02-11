import { useState } from "react";

import "./index.css";
import { MainLayout } from "./layout/main-layout";
import { ImgCard } from "./components/imgCard/imgCard";
import { SubCard } from "./components/subscribeCard/subCard";
import andor from "./assets/andor.png";
import wakanda from "./assets/wakanda.png";
import turning from "./assets/turningRed.png";
import fire from "./assets/fire.png";
import encanto from "./assets/encanto.png";
import zoo from "./assets/zootopia.png";
import img1 from "./assets/hero1.png";
import img2 from "./assets/hero2.png";
import watchImg from "./assets/watch.png";
import tv from "./assets/tv.svg";
import comp from "./assets/comp.svg";
import phone from "./assets/phone.svg";
import game from "./assets/game.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <section id="tabs">
          <div className="container">
            <ul className="tabs__name">
              <li className="tabs__item">
                <a href="#" className="tabs__link active">
                  TRENDING
                </a>
              </li>
              <li className="tabs__item">
                <a href="#" className="tabs__link">
                  NEW ON DISNEY+
                </a>
              </li>
              <li className="tabs__item">
                <a href="#" className="tabs__link">
                  COMING SOON
                </a>
              </li>
            </ul>
            <div className="tabs__cards">
              <ImgCard img={wakanda} />
              <ImgCard img={andor} />
              <ImgCard img={turning} />
              <ImgCard img={fire} />
              <ImgCard img={encanto} />
              <ImgCard img={zoo} />
            </div>
          </div>
        </section>
        <section id="choose">
          <div className="container">
            <div className="choose__box">
              <h2 className="choose__title">Choose Your Plan</h2>
              <p className="choose__cab">Switch or cancel* anytime.</p>
              <div className="choose__btnBox">
                <button className="choose__btn blue">Disney Bundle</button>
                <button className="choose__btn ">Disney+</button>
              </div>
            </div>
            <div className="choose__cards">
              <SubCard img={img1}>
                <div className="card__des">
                  <h3 className="cards__title">Duo Basic</h3>
                  <p className="cards__text">With Ads</p>
                  <ul className="cards__list">
                    <li className="cards__item">
                      <p className="cards__cab">
                        Thousands of shows, movies, and Originals on Disney+ and
                        Hulu
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="cards__end">
                  <p className="cards__price">
                    $9.99 <span>/month</span>
                  </p>
                  <button className="cards__btn">SELECT</button>
                </div>
              </SubCard>
              <SubCard img={img2}>
                <div className="card__des">
                  <h3 className="cards__title">Trio Basic</h3>
                  <p className="cards__text">With Ads</p>
                  <ul className="cards__list">
                    <li className="cards__item">
                      <p className="cards__cab">
                        Thousands of shows, movies, and Originals on Disney+ and
                        Hulu
                      </p>
                    </li>
                    <li className="cards__item">
                      <p className="cards__cab">
                        Live sports and Originals on ESPN+
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="cards__end">
                  <p className="cards__price">
                    $12.99 <span>/month</span>
                  </p>
                  <button className="cards__btn">SELECT</button>
                </div>
              </SubCard>
              <SubCard img={img2}>
                <div className="cards__des">
                  <h3 className="cards__title">Trio Premium</h3>
                  <p className="cards__text">No Ads on Disney+ & Hulu</p>
                  <ul className="cards__list">
                    <li className="cards__item">
                      <p className="cards__cab">
                        Thousands of shows, movies, and Originals on Disney+ and
                        Hulu
                      </p>
                    </li>
                    <li className="cards__item">
                      <p className="cards__cab">
                        Live sports and Originals on ESPN+
                      </p>
                    </li>
                    <li className="cards__item">
                      <p className="cards__cab">Downloads to watch on-the-go</p>
                    </li>
                  </ul>
                </div>
                <div className="cards__end">
                  <p className="cards__price">
                    $19.99 <span>/month</span>
                  </p>
                  <button className="cards__btn">SELECT</button>
                </div>
              </SubCard>
            </div>
          </div>
          <p className="choose__text">
            *Effective at the end of the billing period.
          </p>
          <a href="#" className="choose__link">
            Terms apply.
          </a>
        </section>
        <section id="watch">
          <div className="container watch__box">
            <div className="watch__imgbox">
              <img src={watchImg} alt="img" className="watch__img" />
            </div>
            <div className="watch__content">
              <h2 className="watch__title">Watch the way you want</h2>
              <ul className="watch__list">
                <li className="watch__item">
                  <p className="watch__text">
                    Host virtual movie nights with GroupWatch. Pause, rewind,
                    and react with up to six friends. To invite or be invited to
                    join GroupWatch, subscription is required.
                  </p>
                </li>
                <li className="watch__item">
                  <p className="watch__text">
                    Download any movie or series and watch it on the go.
                  </p>
                </li>
                <li className="watchitem">
                  <p className="watch__text">
                    Keep your family safe with easy parental controls.
                  </p>
                </li>
                <li className="watch__item">
                  <p className="watch__text">
                    An ever-growing range of titles in stunning 4K UHD and Dolby
                    Atmos sound on compatible devices.
                  </p>
                </li>
                <li className="watch__item">
                  <p className="watch__text">
                    Stream on up to four devices at the same time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="bundle">
          <div className="container bundle__content">
            <div className="bundle__box">
              <p className="bundle__text">
                Get your favorite stories, originals and live sports with
                Disney+, Hulu, and ESPN+
              </p>
              <button className="bundle__btn">GET ALL THREE</button>
              <br />
              <a href="#" className="bundle__link">
                Terms Apply
              </a>
            </div>
          </div>
        </section>
        <section id="devices">
          <div className="container">
            <h2 className="devices__title">
              Available on your favorite devices
            </h2>
            <ul className="devices__list">
              <li className="devices__item">
                <img src={tv} alt="device" className="devices__img" />
                <h3 className="devices__sub">TV</h3>
                <ul className="devices__name">
                  <li className="tv__item">
                    <p className="tv__devices">Amazon Fire TV</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Android TV devices</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">AppleTV</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Chromecast</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">LG TV</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Roku</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Samsung</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Xfinity X1 & Flex</p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Hisense </p>
                  </li>
                  <li className="tv__item">
                    <p className="tv__devices">Panasonic</p>
                  </li>
                </ul>
              </li>
              <li className="devices__item">
                <img src={comp} alt="device" className="devices__img" />
                <h3 className="devices__sub">Computer</h3>
                <ul className="devices__name">
                  <li className="comp__item">
                    <p className="tv__devices">Chrome OS</p>
                  </li>
                  <li className="comp__item">
                    <p className="tv__devices">MacOS</p>
                  </li>
                  <li className="comp__item">
                    <p className="tv__devices">Windows PC</p>
                  </li>
                </ul>
              </li>
              <li className="devices__item">
                <img src={phone} alt="device" className="devices__img" />
                <h3 className="devices__sub">Mobile & Tablet</h3>
                <ul className="devices__name">
                  <li className="mobile__item">
                    <p className="tv__devices">Amazon Fire Tablets</p>
                  </li>
                  <li className="mobile__item">
                    <p className="tv__devices">Android Phones & Tablets</p>
                  </li>
                  <li className="mobile__item">
                    <p className="tv__devices">iPhone and iPad</p>
                  </li>
                </ul>
              </li>
              <li className="devices__item">
                <img src={game} alt="device" className="devices__img" />
                <h3 className="devices__sub">Game Consoles</h3>
                <ul className="devices__name">
                  <li className="game__item">
                    <p className="tv__devices">PS4</p>
                  </li>
                  <li className="game__item">
                    <p className="tv__devices">PS5</p>
                  </li>
                  <li className="game__item">
                    <p className="tv__devices">Xbox One</p>
                  </li>
                  <li className="game__item">
                    <p className="tv__devices">Xbox Series X</p>
                  </li>
                  <li className="game__item">
                    <p className="tv__devices">Xbox Series S</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section id="quest">
          <div className="container">
            <h2 className="quest__link">Frequently Asked Questions</h2>
            <ul className="quest__list">
              <li className="quest__item">
                <p className="quest__text">What is Disney+?</p>
                <button className="quest__btn">+</button>
              </li>
              <li className="quest__item">
                <p className="quest__text">How much does Disney+ cost?</p>
                <button className="quest__btn">+</button>
              </li>
              <li className="quest__item">
                <p className="quest__text">What can I watch on Disney+?</p>
                <button className="quest__btn">+</button>
              </li>
              <li className="quest__item">
                <p className="quest__text">Where can I watch Disney+?</p>
                <button className="quest__btn">+</button>
              </li>
              <li className="quest__item">
                <p className="quest__text">
                  What's included on the Disney+ plans with and without ads?
                </p>
                <button className="quest__btn">+</button>
              </li>
              <li className="quest__item">
                <p className="quest__text">What is the Disney Bundle?</p>
                <button className="quest__btn">+</button>
              </li>
            </ul>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
