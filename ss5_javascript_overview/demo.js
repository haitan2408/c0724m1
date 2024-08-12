function clickMe() {
   // alert("Bạn đã like bài viết")
    // lệnh bên dưới dùng để thay đổi màu nền cho thẻ có id là like
    document.getElementById("like").style.backgroundColor="blue";
    // Lệnh bên dưới dùng để thay đổi màu chữ cho thẻ có id là like
    document.getElementById("like").style.color = "white";
    /* Lệnh bên dưới dùng để thay đổi nội dung của thẻ có id là like */
    document.getElementById("like").innerText = "dislike";


}