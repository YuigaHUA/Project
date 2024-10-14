// routes/user.js
const express = require('express');
const router = express.Router();

// 模拟的用户数据库
const users = [];

// 用户注册
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    // 检查用户是否已存在
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('用户已存在');
    }

    // 添加新用户到数据库
    users.push({ username, password });
    res.send('注册成功'); 
});

// 用户登录
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // 检查用户凭据
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(400).send('用户名或密码错误');
    }

    res.send('登录成功');
});

module.exports = router;
