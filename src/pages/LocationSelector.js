import React,{useState} from "react";

const Province = [
    { id: 1, name: "Hà Nội", District: ["Ba Đình", "Ba Vì", "Bắc Từ Liêm", "Cầu Giấy", "Chương Mỹ", "Hai Bà Trưng", "Hoàn Kiếm", "Hoàn Mai"]},
    { id: 2, name: "Ninh Bình", District: ["Gia Viễn", "Hoa Lư", "Kim Sơn", "Nho Quan", "Ninh Bình", "Tam Điệp", "Yên Khánh", "Yên Mô"]},
    { id: 3, name: "Hải Phòng", District: ["An Dương", "An Lão", "Bạch Long Vĩ", "Cát Hải", "Dương Kinh", "Đồ Sơn", "Hải An", "Hồng Bàn"]},
    { id: 4, name: "Đà Nẵng", District: ["Cẩm Lệ", "Hải Châu", "Hòa Vang", "Hoàng Sa", "Liên Chiếu", "Ngũ Hành Sơn", "Sơn Trà", "Thanh Khê"]},
    { id: 5, name: "Hồ Chí Minh", District: ["1 District", "2 District", "3 District", "4 District", "5 District", "10 District", "Tân Bình District"]},
    { id: 6, name: "Cần thơ", District: ["Thới Lai", "Bình Thủy", "Cái Răng", "Cờ Đỏ", "Ninh Kiều", "Ô Môn", "Phong Điền", "Thốt Nốt", "Vĩnh Thạnh"]},
    { id: 7, name: "Thừa Thiên Huế", District: ["A Lưới", "Huế", "Hương Thủy", "Hương Trà", "Nam Đông", "Phong Điền", "Phú Lộc", "Phú Vang"]},
    { id: 8, name: "Lâm Đồng", District: ["Bảo Lâm", "Bảo Lộc", "Cát Tiên","Di Linh","Đà Lạt","Đam Rông","Đơn Dương","Đức Trọng","Lạc Dương","Lâm Hà"]},
    { id: 9, name: "Nam Định", District: ["Giao Thủy", "Hải Hậu", "Mỹ Lộc","Nam Định","Nam Trực","Nghĩa Hưng","Trực Ninh","Vụ Bản","Xuân Trường"]},
    { id: 10, name: "Ninh Thuận", District: ["Bác Ái", "Ninh Hải", "Ninh Phước","Ninh Sơn","Phan Rang - Tháp Chàm","Thuận Bắc","Thuận Nam"]},
    { id: 11, name: "Quảng Trị", District: ["Cam Lộ", "Đa Krông", "Đảo Cồn Cỏ","Đông Hà","Gio Linh","Hải Lăng","Hướng Hóa","Quảng Trị","Triệu Phong"]},
    { id: 12, name: "An Giang", District: ["An Phú", "Châu Đốc", "Châu Phú", "Châu Thành", "Chợ Mới", "Long Xuyên", "Tân Châu", "Thoại Sơn"]},
]

const LocationSelector = () => {
    const[ selectedprovince, setselectedprovince] = useState('');
    const[ selecteddistrict, setselecteddistrict] = useState('');

    const handleProvinceChange = (e) => {
        setselectedprovince(e.target.value);
        setselecteddistrict(''); //reset khi đổi tỉnh
    };

    const selectedprovinceObj = Province.find(p => p.id === parseInt(selectedprovince));
    return (
        <div>
            <div>
              
                <select className="select-city" id="province" onChange={handleProvinceChange}>
                    <option  value="">Province/City</option>
                    {Province.map(province => (
                        <option key={province.id} value={province.id}>
                            {province.name}
                        </option>
                    ))}
                </select>
            </div>
            
            <div>
                
                <select className="select-city" id="District" onChange={(e) => setselecteddistrict(e.target.value)} value={selecteddistrict} disabled={!selectedprovince}>
                    <option  value="">District</option>
                    {selectedprovinceObj?.District.map((Distric, index) => (
                        <option key={index} value={Distric}>
                            {Distric}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
export default LocationSelector;