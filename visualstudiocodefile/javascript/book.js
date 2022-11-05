function validate(e) {
    e.preventDefault();
    var name = document.getElementById("name").value
    var errorName = document.getElementById("errorName");

    if (name == "") {
        errorName.innerText = "Hãy điền tên của bạn.";
    }
    else if (name.length > 50) {
        errorName.innerText = "Tên không dài quá 50 kí tự.";
    }
    else errorName.innerText = "";

    var sdt = document.getElementById("sdt").value;
    var phoneError = document.getElementById("errorPhone");
    if (sdt == "") {
        phoneError.innerText = "Hãy điền số điện thoại của bạn.";
    }
    else if (sdt.length > 50) {
        phoneError.innerText = "Số điện thoại không dài quá 50 kí tự.";
    }
    else phoneError.innerText = "";

    var khunggio = document.getElementById("khunggio").value;
    var khunggioError = document.getElementById("errorKhunggio");
    if (khunggio == "") {
        khunggioError.innerText = "Hãy chọn khung giờ muốn đặt sân.";
    }
    else khunggioError.innerText = "";

    var giothuesan = document.getElementById("giothuesan").value
    var giothuesanError = document.getElementById("giothuesanError");
    if (giothuesan == "") {
        giothuesanError.innerText = "Hãy nhập số giờ muốn đặt sân.";
    }
    else if (giothuesan < 0) {
        giothuesanError.innerText = "Chỉ được phép nhập số dương.";
    }
    else giothuesanError.innerText = "";

    var nguoichoi = document.getElementById("nguoichoi").value
    var nguoichoiError = document.getElementById("nguoichoiError")
    if (nguoichoi == "") {
        nguoichoiError.innerText = "Hãy nhập số người chơi."
    }
    else nguoichoiError = ""
    
    var doichoi = document.getElementById("doichoi").value
    var doichoiError = document.getElementById("doichoiError").value
    if (doichoi == "") {
        doichoiError.innerText = "Hãy nhập số người chơi."
    }
    else if (doichoi < 0) {
        doichoiError.innerText = "Chỉ được phép nhập số nguyên dương."
    }
    else doichoiError.innerText = ""
    
    console.log ("Chỉ được phép nhập số nguyên dương.")
}