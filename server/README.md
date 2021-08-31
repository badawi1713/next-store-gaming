# Tutorial Membangun Server dengan Express.js

## Konfigurasi dan Setup

### Cara Installasi Express.js dengan Express Generator

- `npm i -g expres-generator`
- `npx express-generator  --view=ejs [nama_projek]`
- `npm i`
- menjalankan aplikasi dengan `npm start`

### Struktur Folder Express.js

- File app.js sebagai root direktori untuk mendaftarkan routing dan middleware
- File bin/www berisikan kode untuk menjalankan aplikasi dan berisikan PORT yang digunakan
- Folder public berisikan assets untuk styling
- Folder views berisikan file-file untuk tampilan seperti HTML tergantung menggunakan view engine apa
- routes terdapat sekumpulan kode untuk routing atau sebagai path sebuah service

### Setup Routes, Controller, dan Model

### Setup Koneksi MongoDB dan .env

### Konfigurasi Template AdminLTE

- installasi: `npm i admin-lte`
- ke app.js tambahkan `('/adminlte', express.static(path.join(__dirname, '/node_modules/admin-lte/')))`
