function upDate(previewPic) {
    // b. In thông tin mô tả và link ảnh ra tab Console để kiểm tra thử
    console.log("Đang di chuột vào ảnh: " + previewPic.alt);
    console.log("Đường dẫn ảnh là: " + previewPic.src);

    // c. Tìm phần tử có id là "image"
    let imageDiv = document.getElementById("image");

    // d. Đổi văn bản bên trong thành alt của ảnh nhỏ
    imageDiv.innerHTML = previewPic.alt;

    // e. Thay đổi ảnh nền bằng src của ảnh nhỏ
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");

    // 4.a Cập nhật lại ảnh nền về trạng thái trống ban đầu
    imageDiv.style.backgroundImage = "url('')";

    // 4.b Cập nhật lại chữ hướng dẫn mặc định
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
