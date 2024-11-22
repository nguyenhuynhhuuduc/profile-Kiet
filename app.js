const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Đặt thư mục 'documents' làm thư mục tĩnh để truy cập trực tiếp các file HTML
app.use(express.static(path.join(__dirname, 'documents')));

// Route cho trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents', 'index.html'));
});

// Route cho trang contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents', 'contact.html'));
});

// Lắng nghe trên cổng được chỉ định
app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});
