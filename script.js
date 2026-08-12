// Hàm xử lý khi di chuột HOẶC khi nhấn phím Tab trúng vào ảnh (onmouseover & onfocus)
function upDate(previewPic) {
    console.log("Sự kiện kích hoạt thành công!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm xử lý khi rời chuột HOẶC khi nhấn Tab chuyển sang vật thể khác (onmouseout & onblur)
function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Bước 8 & 9: Hàm tự động chạy khi trang web tải xong (onload) để thêm tabindex cho ảnh
function addTabFocusAttribute() {
    console.log("Hàm onload 'addTabFocusAttribute' đã kích hoạt!");

    // Bước 9.b: Tìm tất cả các bức ảnh nhỏ có class là 'preview'
    let images = document.querySelectorAll(".preview");

    // Bước 9.b & 9.c: Chạy vòng lặp qua từng bức ảnh để tự động thêm thuộc tính tabindex="0"
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex cho ảnh thứ: " + (i + 1));
    }
}
