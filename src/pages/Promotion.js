import React from "react";
import {Link} from 'react-router-dom';
import img1 from '../img/Pick_up_16x9-compressed.jpg';
import img2 from '../img/B_a_tr_a_tr_n_v_-_16x9-compressed.jpg';
import img3 from '../img/1st_order-16x9-compressed.jpg';
import img4 from '../img/BANNER_APP_16-9_FREQUENCY_PROMOTION_2024-02.jpg';
import img5 from '../img/79K_Trade_Sept_-_16x9-compressed.jpg';
function Promotion(){
    return(
        <div>
        <div className="box-home ">
          <ul className="grid-list-promotion">
            {/*Khung 1*/}
          <li>
        <div className="card-content-promotion">
          <div className="card-imgcontent-promotion" >
              <img src={img1} className="Promotion-img"></img>            
            </div>
            <div className="card-text-promotion">
              <Link className="font nounderline" to="/Menu-gagion">Đặt Món Tại App Ngay</Link>
            </div>
          </div>
          </li>
          {/*Khung 2*/}
          <li>
        <div className="card-content-promotion">
          <div className="card-imgcontent-promotion" >
              <img src={img2} className="Promotion-img"></img>
            </div>
            <div className="card-text-promotion">
              <a className="font nounderline promotion-text" href="#">Ăn Trưa Tròn Vị - Giá hợp ví</a>
            </div>
          </div>
          </li>
          {/*Khung 3*/}
          <li>
        <div className="card-content-promotion">
          <div className="card-imgcontent-promotion" >
              <img src={img3} className="Promotion-img"></img>
            </div>
            <div className="card-text-promotion">
              <a className="font nounderline" href="#">Tải App Nhận Ngay Mỳ JoLLy</a>
            </div>
          </div>
          </li>
          {/*Khung 4*/}
          <li>
        <div className="card-content-promotion">
          <div className="card-imgcontent-promotion" >
              <img src={img4} className="Promotion-img"></img>
            </div>
            <div className="card-text-promotion">
              <a className="font nounderline" href="#">Đặt Càng Nhiều, Nhận Đơn Càng Hấp Dẫn</a>
            </div>
          </div>
          </li>
          {/*Khung 5*/}
          <li>
        <div className="card-content-promotion">
          <div className="card-imgcontent-promotion" >
              <img src={img5} className="Promotion-img"></img>
            </div>
            <div className="card-text-promotion">
              <a className="font nounderline" href="#">Deal Cực Đã - Ăn Cực Đã</a>
            </div>
          </div>
          </li>
          </ul>
        </div>
        </div>
    );
}
export default Promotion;