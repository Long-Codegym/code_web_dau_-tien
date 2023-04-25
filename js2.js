let arrayPoduct =[
    ["STT", "Tên xe","Mã xe","Ảnh xe","Giá bán"],
    [1,"kawasagki zx10r","28645","https://my-test-11.slatic.net/p/48c18b3e7d42fd0ad683a5892f97040e.jpg","6000 USD"],
    [2,"Yamaha r1","31042","https://vcdn-vnexpress.vnecdn.net/2015/07/07/Yamaha-R1M-VN-3-2566-1436280048.jpg","8000 USD"],
];
hienthi();

function hienthi() {
    let table ="";
    for (let j = 0; j < 1; j++) {
        table += "<tr>"+
            "<td>" + arrayPoduct[j][0] + "</td>"+
            "<td>" + arrayPoduct[j][1] + "</td>"+
            "<td>" + arrayPoduct[j][2] + "</td>"+
            "<td>"+ arrayPoduct[j][3]+ "</td>"+
            "<td>" + arrayPoduct[j][4] + "</td>"+
            "</tr>";
    }
    for (let i = 1; i < arrayPoduct.length; i++) {
        table += "<tr>"+
            "<td>" + arrayPoduct[i][0] + "</td>"+
            "<td>" + arrayPoduct[i][1] + "</td>"+
            "<td>" + arrayPoduct[i][2] + "</td>"+
            "<td> <img src=' " + arrayPoduct[i][3]+ "'width='300' height='300'></td>"+
            "<td>" + arrayPoduct[i][4] + "</td>"+
            "<td><input id='suaten' type='text' placeholder='nhập tên cần sửa'> <button onclick='edit("+ i +")'>edit</button></td>"+
            "<td> <button onclick='del("+i+")'>xóa</button></td>"+
            "</tr>";
    }
    document.getElementById("displays").innerHTML = table;
}

function themSanPham() {
    let sp = document.getElementById("nameSp").value;
    let ma  = document.getElementById("productCode").value;
    let img = document.getElementById("imgProduct").value;
    let gia = document.getElementById("priceProduct").value;
    arrayPoduct.push([arrayPoduct.length,sp,ma,img,gia]);
    hienthi();
    luudanhsach();
    document.getElementById("nameSp").value= "";
    document.getElementById("productCode").value= "";
    document.getElementById("imgProduct").value= "";
    document.getElementById("priceProduct").value= "";
}

function edit(t) {
    document.getElementById("nameSp").value= arrayPoduct[t][1];
    document.getElementById("productCode").value= arrayPoduct[t][2];
    document.getElementById("imgProduct").value= arrayPoduct[t][3];
    document.getElementById("priceProduct").value= arrayPoduct[t][4];
    document.getElementById("nut").innerHTML = '<button onclick="sua(' + t + ')">sửa sản phẩm</button>';
    localStorage.setItem('arrayPoduct', JSON.stringify(arrayPoduct));
}

function del(t) {
    arrayPoduct.splice(t, 1);
    hienthi();
    luudanhsach()
}

function sua(t) {
    let suaTenSp = document.getElementById("nameSp").value;
    let suaMaSp  = document.getElementById("productCode").value;
    let suaImgSp = document.getElementById("imgProduct").value;
    let suaGiaSp = document.getElementById("priceProduct").value;
    arrayPoduct[t][1]= suaTenSp;
    arrayPoduct[t][2]= suaMaSp;
    arrayPoduct[t][3]= suaImgSp;
    arrayPoduct[t][4]= suaGiaSp;
    hienthi();
    luudanhsach();
    localStorage.setItem('arrayPoduct', JSON.stringify(arrayPoduct));
    document.getElementById("nameSp").value= "";
    document.getElementById("productCode").value= "";
    document.getElementById("imgProduct").value= "";
    document.getElementById("priceProduct").value= "";
    document.getElementById("nut").innerHTML = '<button onclick="themSanPham()">thêm sản phẩm</button>';
}
function luudanhsach() {
    localStorage.setItem('arrayPoduct', JSON.stringify(arrayPoduct));
}





