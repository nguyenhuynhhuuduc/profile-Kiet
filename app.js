const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Đặt thư mục 'documents' làm thư mục tĩnh để truy cập trực tiếp các file HTML
app.use(express.static(path.join(__dirname, 'documents/html')));

// Route cho trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/html', 'index.html'));
});

// Route cho trang contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/html', 'contact.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/html', 'skills.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents/html', 'about.html'));
});
// Lắng nghe trên cổng được chỉ định
app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});
