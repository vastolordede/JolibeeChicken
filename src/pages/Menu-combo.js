import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/combo_79k-15.jpg';
import img2 from '../img/m_n_ngon_ph_i_th_-_1.png';
import img3 from '../img/m_n_ngon_ph_i_th_-_2_2__1.png';
import img4 from '../img/m_n_ngon_ph_i_th_-_3.png';
import img5 from '../img/m_n_ngon_ph_i_th_-_4_2.png';
import img6 from '../img/m_n_ngon_ph_i_th_-_5.png';
import img7 from '../img/m_n_ngon_ph_i_th_-_6.png';
import img8 from '../img/m_n_ngon_ph_i_th_-_7.png';
function Menu(){
    return(
    <div>
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
    </div>  
    <div className="box ">
      {/*khung 1*/}
      <ul className="grid-list-menu">
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img1} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Deal cực đã - Ăn thả ga 79K</a>
            <p className="price">3.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 2*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img2} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Combo Một Mình Ăn Ngon</a>
            <p className="price">3.29$</p>
            <button className=" font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 3*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img3} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Cặp đôi ăn ý</a>
            <p className="price">5.99$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 4*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img4} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Combo Cả Nhà No Nê</a>
            <p className="price">7.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
        {/*khung 5*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img5} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Combo Bạn Bè Tụ Tập</a>
            <p className="price">12.99$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 6*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img6} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Tiệc Kiểu Mới, Quà Chuẩn Gu 1</a>
            <p className="price">19.99$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 7*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img7} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Tiệc Kiểu Mới, Quà Chuẩn Gu 2</a>
            <p className="price">25.99$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
      {/*khung 8*/}
      <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img8} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Tiệc Kiểu Mới, Quà Chuẩn Gu 3</a>
            <p className="price">29.99$</p>
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