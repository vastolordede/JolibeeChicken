import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/g_gi_n_vui_v_-_1_1.png';
import img2 from '../img/g_gi_n_vui_v_-_2.png';
import img3 from '../img/g_gi_n_vui_v_-_3.png';
import img4 from '../img/g_gi_n_vui_v_-_4.png';
import img5 from '../img/g_gi_n_vui_v_-_5.png';
import img6 from '../img/g_gi_n_vui_v_-_6_7.png';
import img7 from '../img/g_gi_n_vui_v_-_6_7_1.png';
import img8 from '../img/g_gi_n_vui_v_-_8_1.png';
import img9 from '../img/g_gi_n_vui_v_-_9.png';
import img10 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';

function Menu(){
    return(
        <><div className="box-menu">
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
      </div><div className="box ">
          {/*khung 1*/}
          <ul className="grid-list-menu">
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img1} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">2 Gà Giòn Vui Vẻ + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">3.59$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 2*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img2} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Gà Giòn Vui Vẻ + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">2.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 3*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img3} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Giòn Vui Vẻ + 1 Súp bí đỏ + 1 Nước ngọt</a>
                  <p className="price">2.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 4*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img4} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Giòn Vui Vẻ + 1 Nước ngọt</a>
                  <p className="price">2.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 5*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img5} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Cơm Gà Giòn Vui Vẻ</a>
                  <p className="price">1.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 6*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img6} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">6 miếng Gà Giòn Vui Vẻ</a>
                  <p className="price">7.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 7*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img7} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">4 miếng Gà Giòn Vui Vẻ</a>
                  <p className="price">4.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 8*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img8} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">2 miếng Gà Giòn Vui Vẻ</a>
                  <p className="price">2.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 9*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent"> 
                <img src={img10} className="menuimg-bg"></img>
                  <img src={img9} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 miếng Gà Giòn Vui Vẻ</a>
                  <p className="price">1.29$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>

          </ul>
        </div></>
    );
}
export default Menu;    