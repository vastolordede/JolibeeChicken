import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/Remove-bg.ai_1729432705491.png';
import img2 from '../img/Remove-bg.ai_1729432716155.png';
import img3 from '../img/burger_-_1.png';
import img4 from '../img/burger_-_2.png';
import img5 from '../img/burger_-_3.png';
import img6 from '../img/burger_-_4.png';
import img7 from '../img/burger_-_5.png';
import img8 from '../img/burger_-_6.png';
import img9 from '../img/burger_-_7.png';
import img10 from '../img/burger_-_8.png';
import img11 from '../img/burger_-_9.png';
import img12 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';
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
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img1} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Cơm Gà Mắm Tỏi</a>
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
                  <a className="font nounderline" href="#">1 Cơm gà mắm tỏi + 1 Pepsi vừa</a>
                  <p className="price">1.59$</p>
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
                  <a className="font nounderline" href="#">1 Burger Tôm + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">2.59$</p>
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
                  <a className="font nounderline" href="#">1 Burger Tôm + 1 Nước ngọt</a>
                  <p className="price">1.99$</p>
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
                  <a className="font nounderline" href="#">1 Jolly Hotdog + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">1.99$</p>
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
                  <a className="font nounderline" href="#">1 Jolly Hotdog + 1 Nước ngọt</a>
                  <p className="price">1.39$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 7*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img7} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Sandwich Gà Giòn + 1 Khoai tây chiên vừa + 1 Nước ngọt</a>
                  <p className="price">2.19$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 8*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img8} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">1 Sandwich Gà Giòn + 1 Nước ngọt</a>
                  <p className="price">1.59$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 9*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img9} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Burger Tôm</a>
                  <p className="price">1.59$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 10*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img10} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Sandwich Gà Giòn</a>
                  <p className="price">1.19$</p>
                  <button className="font addcart">Add To cart</button>
                </div>
              </div>
            </li>
            {/*khung 11*/}
            <li>
              <div className="card-content">
                <div className="card-imgcontent">
                <img src={img12} className="menuimg-bg"></img>
                  <img src={img11} className="menuimg"></img>
                </div>
                <div className="card-text">
                  <a className="font nounderline" href="#">Jolly Hotdog</a>
                  <p className="price">0.99$</p>
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