import React from "react";
import { Link } from 'react-router-dom';
import img1 from '../img/ga_gion_vui_ve.png';
import img2 from '../img/ga_sot_cay.png';
import img3 from '../img/my_y_sot_bo_bam.png';
import img4 from '../img/mon_trang_mieng.png';
import img5 from '../img/pngtree-wood-wood-texture-pattern-desktop-picture-image_1429737.jpg';

function Home(){
    return(
      <div>
      <div className="box-home ">
        <ul className="grid-list-home">
          {/*Khung 1*/}
        <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img5} className="menuimg-bg"></img>
            <img src={img1} className="menuimg"></img>
            
          </div>
          <div className="card-text">
            <Link className="font nounderline" to="/Menu-gagion">Gà Giòn Vui Vẻ</Link>
            <p className="price">3.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
        {/*Khung 2*/}
        <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img5} className="menuimg-bg"></img>
            <img src={img2} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Gà Sốt Cay</a>
            <p className="price">3.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
        {/*Khung 3*/}
        <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img5} className="menuimg-bg"></img>
            <img src={img3} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Mỳ Ý Sốt Bò Bằm</a>
            <p className="price">3.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
        {/*Khung 4*/}
        <li>
      <div className="card-content">
        <div className="card-imgcontent" >
            <img src={img5} className="menuimg-bg"></img>
            <img src={img4} className="menuimg"></img>
          </div>
          <div className="card-text">
            <a className="font nounderline" href="#">Món Tráng Miệng</a>
            <p className="price">3.49$</p>
            <button className="font addcart">Add To cart</button>
          </div>
        </div>
        </li>
        </ul>
      </div>
      <Link className="font home-menubox-text" to="/Menu-combo"><div className="home-menubox">View More Menu</div></Link>
      </div>
    );
}
export default Home;