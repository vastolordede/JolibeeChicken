import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/th_c_u_ng_-_1.png';
import img2 from '../img/th_c_u_ng_-_11_12.png';
import img3 from '../img/th_c_u_ng_-_11_12_1.png';
import img4 from '../img/th_c_u_ng_-_1th_c_u_ng_-_2.png';
import img5 from '../img/th_c_u_ng_-_3_4.png';
import img6 from '../img/th_c_u_ng_-_3_4_1.png';
import img7 from '../img/th_c_u_ng_-_5_6.png';
import img8 from '../img/th_c_u_ng_-_5_6_1.png';
import img9 from '../img/th_c_u_ng_-_7_8.png';
import img10 from '../img/th_c_u_ng_-_7_8_1.png';
import img11 from '../img/th_c_u_ng_-_9_10.png';
import img12 from '../img/th_c_u_ng_-_9_10_1.png';
import img13 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';
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
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img1} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Nước ép xoài đào</a>
                  <p className="price">0.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 2*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img2} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Cacao sữa đá lớn</a>
                  <p className="price">0.99$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 3*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img3} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Cacao sữa đá vừa</a>
                  <p className="price">0.79$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 4*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img4} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Nước suối</a>
                  <p className="price">0.29$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 5*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img5} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Pepsi không calo lớn</a>
                  <p className="price">0.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 6*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img6} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Pepsi không calo vừa</a>
                  <p className="price">0.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 7*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img7} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Pepsi lớn</a>
                  <p className="price">0.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 8*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img8} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Pepsi vừa</a>
                  <p className="price">0.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 9*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img9} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Mirinda lớn</a>
                  <p className="price">0.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 10*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img10} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Mirinda vừa</a>
                  <p className="price">0.49$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 11*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img11} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">7Up lớn</a>
                  <p className="price">0.69$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 12*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img13} className="menuimg-bg"></img>
                  <img src={img12} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">7UP vừa</a>
                  <p className="price">0.49$</p>
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