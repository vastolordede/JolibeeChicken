import React from "react";
import {link} from 'react-router-dom';
function About(){
    return(
        <div className="box-location">
            {/*Khung 1*/}
            <h1 className="font header-About">History of establishment</h1>
            <p className="p-About">Jollibee is an extraordinary success story that began with just two small
             ice cream shops established in 1975, specializing in hot meals and sandwiches.
             By 1978, it had grown into a company with seven stores focused on burgers, eventually
             becoming a corporation that revolutionized the fast-food industry in the Philippines.<br></br>
             Today, Jollibee has over 1,000 stores in the Philippines and more than 300 locations
             across the globe, including the USA, Hong Kong, the United Arab Emirates, Qatar, Brunei, China, and Vietnam.</p>
             {/*Khung 2*/}
            <h1 className="font header-About">VietNam Jolibee</h1>
            <p className="p-About">The first Jollibee store in Vietnam opened in 2005. Since then, Jollibee has made every effort to provide Vietnamese
                families with delicious meals at affordable prices.<br></br>
                Today, Jollibee has over 100 stores across Vietnam. Jollibee not only serves high-quality fast food following strict
                auditing processes but also offers a warm and elegant space for everyone to enjoy a joyful and comfortable dining
                experience with family and friends.<br></br>
                From these foundations, Jollibee Vietnam aspires to become a fast-food brand that delivers delicious meals with
                flavors tailored to the Vietnamese palate, alongside the goal of creating a dining venue that strengthens family
                bonds through good food. This also serves as the basis for Jollibee to consolidate and develop sustainably in the
                long term.</p>
            {/*Khung 3*/}
            <h1 className="font header-About">About Us</h1>
            <p className="p-About">All we have to do is bring great flavors to every dish, delivering culinary joy to everyone</p>
            {/*Khung 4*/}
            <h1 className="font header-About">FSC standards</h1>
            <p className="p-About">The remarkable growth of Jollibee™ is due to the strict and dedicated adherence to high
                standards referred to as “F.S.C”:
                Food: The food served to the public must meet the company’s exceptional standards;
                otherwise, we will not launch it in the market.
                Service: Service must be prompt and courteous.
                Cleanliness: From the kitchen to the utensils, everything must always be kept clean.<br></br>
                Jollibee takes great pride in its employees, who are always dedicated to their work.
                Jollibee recognizes them by providing the best benefits in the fast-food industry and supporting
                them with comprehensive and modern training programs. Managers are regularly updated on the latest
                operational systems in stores regarding people management skills tailored to their needs. Service
                teams are trained in various stores, and food service is continuously innovated. Jollibee also offers
                career opportunities for quality and skilled team members to advance to management positions in the food
                service industry.<br></br>
                Store operations are effectively supported by experienced professionals in the fields of Marketing,
                Engineering, and Information Technology Management.</p>
        </div>
    );
}
export default About;