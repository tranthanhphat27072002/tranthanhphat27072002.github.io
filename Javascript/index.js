document.getElementById("thongbao-tel").style.display = "none";
document.getElementById("dang-nhap").style.display = "none";
document.getElementById("dang-ky").style.display = "none";
function showthongbaotel(){
    document.getElementById("thongbao-tel").style.display = "block";
}
function dongthongbaotel(){
    document.getElementById("thongbao-tel").style.display = "none";
}
function guisodienthoai(){
    var sodienthoai = document.getElementById("guisodienthoai").value;
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(sodienthoai == ""){
        alert('Vui lòng điền số điện thoại của bạn!');
    }
    else{
        if(vnf_regex.test(sodienthoai)){
            alert('Số điện thoại của bạn đã được gửi!');
            dongthongbaotel();
            document.getElementById("guisodienthoai").value = "";
        }
        else{
            alert('Số điện thoại của bạn không hợp lệ, vui lòng nhập lại!');
        }
    }
}
function showformdangnhap(){
    document.getElementById("dang-nhap").style.display = "block";
}
function dongformdangnhap(){
    document.getElementById("dang-nhap").style.display = "none";
}
function showformdangky(){
    document.getElementById("dang-ky").style.display = "block";
}
function dongformdangky(){
    document.getElementById("dang-ky").style.display = "none";
}
function check_dangky(){
    var tendangnhap = document.getElementById("ip_tendangnhap").value;
    var matkhau = document.getElementById("ip_matkhau").value;
    var nhaplaimatkhau = document.getElementById("ip_nhaplaimatkhau").value;
    var email = document.getElementById("ip_email").value;
    var tel = document.getElementById("ip_tel").value;
    if (tendangnhap == "" || matkhau == "" || nhaplaimatkhau == "" || email == "" || tel == ""){
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }
    if (matkhau != nhaplaimatkhau){
        alert("Mật khẩu không trùng khớp!");
        return;
    }
    if(matkhau.length < 6){
        alert("Mật khẩu ít nhất phải có 6 ký tự!");
        return;
    }
    var count = 0;
    for(var i = 0; i < matkhau.length; i++){
        if(isNaN(s=matkhau[i])){
            count ++;
        }
    }
    if(count == 0 || count == matkhau.length){
        alert("Mật khẩu phải có cả chữ cái và chữ số!");
        return;
    }
    dongformdangky();
    alert("Đăng ký thành công!");
}

function check_dangnhap(){
    var user = ['CongBinh', 'CongLinh', 'PhanTiep', 'ThanhPhat', 'NgocTuan'];
    var password = 'nhom05';
    var tendangnhap = document.getElementById("ip_tendangnhap_dangnhap").value;
    var matkhau = document.getElementById("ip_matkhau_dangnhap").value;
    if (tendangnhap == "" || matkhau == ""){
        alert("Vui lòng điền tên đăng nhập hoặc mật khẩu!");
        return;
    }
    var count = 0;
    for (var i = 0; i < 5; i++){
        if (tendangnhap == user[i]){
            count++;
        }
    }
    if (count != 1){
        alert("Tên đăng nhập không chính xác! Vui lòng thử lại");
        return;
    }
    if (matkhau != password){
        alert("Mật khẩu không chính xác! Vui lòng thử lại");
        return;
    }
    alert("Đăng nhập thành công!");
    dongformdangnhap();
}
