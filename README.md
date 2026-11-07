# Project-TheWildOasis

## 1. Giới thiệu dự án 
Đây là 2 dự án đc tạo ra trong quá học tập react nhằm thể hiện các kĩ năng đã học, không phải sản phẩm cá nhân<br>
These are two learning projects developed during my React studies to showcase the skills I've learned, They are not personal projects.<br>
The Wild Oasis có 2 folder là 1 dựa án dùng để quản lý phòng và các đơn đăng ký,khách hàng có thể đăng ký ngày tới và ngày về với các căn phòng, giao diện thân thiện dễ sử dụng.

## 2. Hình ảnh giao diện

## 3. Chức năng
the-wild-oasis
 .Là giao diện dành cho chủ sở hữu wed(admin), để quản lý các giao dịch <br>
 .Có thể tạo thêm các căn phòng mới, điều chỉnh thông số các phòng cũ <br>
 .Có sử dụng biểu để để theo dõi số lượng phòng được đặt trước trong tuần hoặc tháng <br>
 .Theo dõi và quan sát các giao dịch xem đã thanh toán hay chưa <br>
 .Theo dõi được chi tiết từng các phòng đã được đặt trước <br>

the-wild-oasis-wedsite
 .Là giao diện dành cho các khách hàng muốn tới đặt phòng <br>
 .Hệ thống đăng nhập bằng google <br>
 .Đặt những căn phòng dễ dàng bằng lịch được tạo sẵn <br>
 .Quản lý các đơn đặt phòng của mình <br>
 .Điều chỉnh thông tin profile của bản thân

## 4. Công nghệ sử dụng
the-wild-oasis
 . React<br>
 . React-query<br>
 . React-router<br>
 . React-error-boundary<br>
 . React-hook-form <br>
 . React-hot-toast<br>
 . React-icons<br>
 . Recharts<br>
 . Styled-components<br>
 . JavaScript<br>
 . Date-fns<br>
 . Supabase (PostgreSQL)<br>
 . Authentical bằng Supabase<br>

the-wild-oasis-wedsite
 . Next.js<br>
 . React<br>
 . Heroicons/react<br>
 . JavaScript<br>
 . Tailwind CSS<br>
 . Auth.js<br>
 . Date-fns<br>
 . Supabase (PostgreSQL)<br>

## 5. Cách cài đặt
 ### B1:
 git clone https://github.com/kothichdangky/Project-TheWildOais.git<br>
 cd the-wild-oasis<br>
 hoặc<br>
 cd the-wild-oasis-wedsite<br>
 ### B2:    
 npm install
 ### B3: Biến môi trường
### trong folder the-wild-oasis
Tới folder src/services, bên trong có supabase.js, có 2 cột key cần chèn vào 
export const supabaseUrl = ""
export const supabaseKey = ""

### trong folder the-wild-oasis-wedsite
Tạo file `.env.local` ở ngoài cùng.

Yêu cầu các key:<br>
 . AUTH_SECRET:<br>
 . AUTH_GOOGLE_ID:<br>
 . AUTH_GOOGLE_SECRET:<br>
 . NEXT_PUBLIC_SUPABASE_URL:<br>
 . NEXT_PUBLIC_SUPABASE_ANON_KEY:<br>

 ### B4: 
npm run dev
Truy cập http://localhost:3000 để sử dụng ứng dụng.

## 6. Cấu trúc database
Bảng database dùng chung cho cả 2 wedsite
| Bảng | Mô tả 
|:---|:---|
| bookings | lưu trữ các thông tin về các đơn đặt phòng | 
| cabins | lưu trữ các căn phòng, tình trạng của chúng |
| guests | lưu trữ các users những người đã đăng nhập để đăng ký phòng |
| settings | Lưu trữ các thông tin như số phòng tối đa hoặc số khách tối đa|

## 7. Cấu trúc thư mục
cấu trúc the-wild-oasis<br>
src/<br>
├── context/<br>
├── data/<br>
├── features/<br>
    ├── authentication/<br>
    ├── bookings/<br>
    ├── cabins/<br>
    ├── check-in-out/<br>
    ├── dashboard/<br>
    ├── settings/<br>
├── hooks/<br>
├── pages/<br>
├── services/<br>
├── styles/<br>
├── ui/<br>
├── utils/<br>
public/<br>

cấu trúc the-wild-oasis-wedsite<br>
app/<br>
├── account/<br>
│   ├── profile/<br>
│   └── reservations/<br>
│       └── edit/<br>
├── login/<br>
├── about/<br>
├── cabins/<br>
├── api/<br>
├── _Components/<br>
└── _lib/<br>
public/<br>

## 8. Nguồn gốc và phát triển

Original Design & Course: Jonas Schmedtmann
Developed by: Dương Thắng trong quá trình học tập
GitHub: kothichdangky<br>