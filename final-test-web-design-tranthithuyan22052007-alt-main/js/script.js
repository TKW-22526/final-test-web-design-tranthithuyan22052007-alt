// Chuyển hướng sang trang chi tiết nằm trong thư mục html/
function xemChiTiet(id, name, brand, price, img) {
    const product = { id, name, brand, price, img };
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'html/chitiet.html'; 
}

// Đọc dữ liệu cục bộ đổ vào trang chi tiết
document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('product-detail-data');
    if (detailContainer) {
        const productData = localStorage.getItem('selectedProduct');
        if (productData) {
            const product = JSON.parse(productData);
            detailContainer.innerHTML = `
                <div class="detail-img">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="detail-content">
                    <span class="brand">${product.brand}</span>
                    <h2>${product.name}</h2>
                    <p class="detail-price">${product.price}</p>
                    <p>Dòng nước hoa nữ cao cấp mang phong cách thượng lưu Pháp. Sự hòa quyện hương hoa lôi cuốn giúp phái đẹp luôn tỏa sáng tự tin và kiêu sa.</p>
                    <button class="btn-buy" onclick="alert('Đã thêm sản phẩm vào giỏ hàng!')">Mua Ngay</button>
                </div>
            `;
        } else {
            detailContainer.innerHTML = '<p>Không tìm thấy sản phẩm này.</p>';
        }
    }
});
