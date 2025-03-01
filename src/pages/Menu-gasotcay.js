import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/Remove-bg.ai_1729431036048.png';
import img2 from '../img/Remove-bg.ai_1729431061149.png';
import img3 from '../img/Remove-bg.ai_1729431078181.png';
import img4 from '../img/Remove-bg.ai_1729431122678.png';
import img5 from '../img/Remove-bg.ai_1729431132699.png';
import img6 from '../img/Remove-bg.ai_1729431142460.png';
import img7 from '../img/Remove-bg.ai_1729431149687.png';
import img8 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';

function Menu(){
    return(
        <div className="box-menu">
        <ul className="ulmenu">
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-combo">Combo</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-gagion">Gà Giòn Vui Vẻ</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-gasotcay">Gà Sốt Cay</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-myY">Mỳ Ý Jolly</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-burgercom">Burger/Cơm</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-phananphu">Phần Ăn Phụ</Link> 
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-trangmieng">Món Tráng Miệng</Link>
          </li>
          <li className="limenu">
            <Link className="font nav-nounderline" to="/Menu-thucuong">Thức Uống</Link>
          </li>
        </ul>
        <div className="box ">
          {/*khung 1*/}
          <ul className="grid-list-menu">
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img1} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">2 Gà Sốt Cay + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">3.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 2*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img2} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Gà Sốt Cay + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">2.39$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 3*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img3} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Sốt Cay + 1 Súp bí đỏ + 1 Nước ngọt</a>
                  <p className="price">2.59$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 4*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img4} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Sốt Cay + 1 Nước ngọt</a>
                  <p className="price">2.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 5*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img5} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Sốt Cay</a>
                  <p className="price">1.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 6*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img6} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">2 miếng Gà Sốt Cay</a>
                  <p className="price">2.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 7*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img8} className="menuimg-bg"></img>
                  <img src={img7} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 miếng Gà Sốt Cay</a>
                  <p className="price">1.39$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>

          </ul>
        </div>
        </div>

    );
}
export default Menu;   