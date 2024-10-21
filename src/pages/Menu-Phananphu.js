import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/Remove-bg.ai_1729435433531.png';
import img2 from '../img/Remove-bg.ai_1729435433531.png';
import img3 from '../img/Remove-bg.ai_1729435449421.png';
import img4 from '../img/Remove-bg.ai_1729435449421.png';
import img5 from '../img/ph_n_n_ph_-_5.png';
import img6 from '../img/ph_n_n_ph_-_6.png';
import img12 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';
function Menu(){
    return(
        <div className="box-menu ">
        <ul className="ulmenu ">
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
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img1} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Khoai tây lắc vị BBQ lớn</a>
                  <p className="price">1.39$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 2*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img2} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Khoai tây lắc vị BBQ vừa</a>
                  <p className="price">0.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 3*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img3} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Khoai tây chiên lớn</a>
                  <p className="price">0.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 4*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img4} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Khoai tây chiên vừa</a>
                  <p className="price">0.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 5*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img5} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Súp bí đỏ</a>
                  <p className="price">0.59$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 6*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img6} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Cơm Trắng</a>
                  <p className="price">0.39$</p>
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