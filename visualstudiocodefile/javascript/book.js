function validate(event) {
    event.preventDefault();
    var name = document.getElementById("name").value
    var errorName = document.getElementById("errorName");

    if (name === "") {
        errorName.innerText = "Hãy điền tên của bạn.";
    }
    else if (name.length > 50) {
        errorName.innerText = "Tên không dài quá 50 kí tự.";
    }
    else errorName.innerText = "";

    var sdt = document.getElementById("sdt").value;
    var phoneError = document.getElementById("errorPhone");
    if (sdt === "") {
        phoneError.innerText = "Hãy điền số điện thoại của bạn.";
    }
    else if (sdt.length > 50) {
        phoneError.innerText = "Số điện thoại không dài quá 50 kí tự.";
    }
    else phoneError.innerText = "";

    var khunggio = document.getElementById("khunggio").value;
    var khunggioError = document.getElementById("errorKhunggio");
    if (khunggio === "") {
        khunggioError.innerText = "Hãy chọn khung giờ muốn đặt sân.";
    }
    else khunggioError.innerText = "";

    var giothuesan = document.getElementById("giothuesan").value
    var giothuesanError = document.getElementById("giothuesanError");
    if (giothuesan === "") {
        giothuesanError.innerText = "Hãy nhập số giờ muốn đặt sân.";
    }
    else if (giothuesan < 0) {
        giothuesanError.innerText = "Chỉ được phép nhập số dương.";
    }
    else giothuesanError.innerText = "";

    var nguoichoi = document.getElementById("nguoichoi").value
    var nguoichoiError = document.getElementById("nguoichoiError")
    if (nguoichoi === "") {
        nguoichoiError.innerText = "Hãy nhập số người chơi."
    }
    else nguoichoiError = ""

    var doichoi = document.getElementById("doichoi").value
    var doichoiError = document.getElementById("doichoiError")
    if (doichoi == "") {
        doichoiError.innerText = "Hãy nhập số người chơi."
    }
    else if (doichoi < 0) {
        doichoiError.innerText = "Chỉ được phép nhập số nguyên dương."
    }
    else doichoiError.innerText = ""

    var dichvu = document.getElementById("dichvu").value
    var dongphuc = 0
    var trongtai = 0
    if (dichvu === "dongphuc") {
        dongphuc = 300000
    }
    else if (dichvu === "trongtai") {
        trongtai = 200000
    }
    khunggio = parseInt(khunggio)
    giothuesan = parseInt(giothuesan)
    doichoi = parseInt(doichoi)
    //calculation
    // Tiền sân = Giá tiền theo khung giờ * Số giờ.
    // Nếu chọn thuê Đồng phục thi đấu, tính Tiền đồng phục = Số đội chơi * Đồng phục thi đấu (300k/đội)
    // Nếu chọn thuê Trọng tài, tính Tiền thuê trọng tài = Số giờ * Thuê trọng tài (200k/h)
    // Tổng tiền = Tiền sân + Tiền đồng phục (nếu có) + Tiền thuê trọng tài (nếu có)
    var tiensan = khunggio * giothuesan
    var tiendongphuc = doichoi * dongphuc
    trongtai = khunggio * trongtai
    var tongtien = tiensan + tiendongphuc + trongtai
    document.getElementById("sotien").innerHTML = tongtien

}