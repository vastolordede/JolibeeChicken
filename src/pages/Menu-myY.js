import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/Remove-bg.ai_1729431290382.png';
import img2 from '../img/Remove-bg.ai_1729431300588.png';
import img3 from '../img/m_jolly_-_3.png';
import img4 from '../img/Remove-bg.ai_1729431798274.png';
import img5 from '../img/Remove-bg.ai_1729431813088.png';
import img6 from '../img/Remove-bg.ai_1729431823018.png';
import img7 from '../img/Remove-bg.ai_1729431823018.png';
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
                  <a className="font nounderline" href="#">1 Mì Ý Jolly vừa + 1 Gà Giòn Vui Vẻ + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">3.69$</p>
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
                  <a className="font nounderline" href="#">1 Mì Ý Jolly vừa + 2 Gà không xương + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">3.19$</p>
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
                  <a className="font nounderline" href="#">1 Mì Ý Jolly vừa + 2 Gà không xương + 1 Nước ngọt</a>
                  <p className="price">2.79$</p>
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
                  <a className="font nounderline" href="#">1 Mì Ý Jolly vừa + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">2.39$</p>
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
                  <a className="font nounderline" href="#">1 Mì Ý Jolly vừa + 1 Nước ngọt</a>
                  <p className="price">1.79$</p>
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
                  <a className="font nounderline" href="#">Mì Ý Jolly lớn</a>
                  <p className="price">1.79$</p>
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
                  <a className="font nounderline" href="#">Mì Ý Jolly vừa</a>
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