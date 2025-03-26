const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2'); // import mysql2 untuk koneksi MariaDB

const app = express();
app.use(express.json()); // Middleware untuk meng-parse request body

// Koneksi ke MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',  // Gantilah dengan password yang baru kamu buat
    database: 'authApp'
  });
  

db.connect((err) => {
  if (err) throw err;
  console.log('Terhubung ke MariaDB');
});

// Pendaftaran
// Pendaftaran (signup)
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Cek apakah email sudah terdaftar
      const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
  
      if (rows.length > 0) {
        return res.status(400).json({ success: false, message: 'Email sudah terdaftar' });
      }
  
      // Hash password sebelum disimpan
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Simpan ke database
      const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
      await db.promise().query(query, [email, hashedPassword]);
  
      res.json({ success: true, message: 'Akun berhasil dibuat' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
    }
  });
  

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: 'Email atau password salah' });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Email atau password salah' });
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
  }
});

// Menjalankan server
app.listen(5000, () => console.log('Server berjalan di port 5000'));
