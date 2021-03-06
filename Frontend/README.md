# Tutorial Membangun Aplikasi dengan Next.js

## Sumber Belajar Next.js Dasar

Terima kasih untuk playlist tutorial NextJS Indonesia yang dibuat oleh Prawito Hudoro:
[https://www.youtube.com/watch?v=HNXYveOJPio&list=PLU4DS8KR-LJ3-zouYHHknPq1G5VTB8PRf&ab_channel=prawitohudoro](https://www.youtube.com/watch?v=HNXYveOJPio&list=PLU4DS8KR-LJ3-zouYHHknPq1G5VTB8PRf&ab_channel=prawitohudoro)

## Rangkuman Materi

Next.js merupakan framework dari React yang siap untuk production

### Mengapa Next.js?

- Mudah untuk setup project
- Routing yang mudah
- Performa yang baik dengan code splitting (Next.js hanya akan me-render file JS saat page yang diakses saja), client-side navigation (Fitur Link (komponen Next.js) membuka link di Apps tersebut tanpa reload), dan pre-fetching (Semua page yang dimuat akan disiapkan sebelum page tersebut tampil)
- Mudah untuk di-deploy
- SEO yang baik
- Pre-Rendering Page (Static Generation dan Server Side Render): "File HTML dimuat terlebih dahulu sebelum halaman selesai dimuat."

### Membuat Projek Baru dengan Next.js

```bash
npx create-next-app [nama_projek]
# atau
yarn create-next-app [nama_projek]
```

```bash
npx create-next-app [nama_projek] --typescript
# atau
yarn create-next-app [nama_projek] --typescript
```

### Struktur Projek Next.js

- Folder Pages sebagai routing pada apps Nextjs, karena apapun filesnya akan otomatis terdaftar sebagai Link
- Folder Public sebagai penyimpanan statik files
- Folder Styles sebagai penyimpanan file untuk styling; css, css.module

### Installasi Storybook

- Desain sistem untuk komponen app React
- Installasi Storybook (storybook.js.org): npx sb init
- Storybook hanya dapat digunakan untuk projek yang sudah terinisialisasi
- Menjalankan storybook: npm run storybook

### Setup Eslint di Next.js

- Install Eslint di projek dengan perintah: eslint --init
- Pilih opsi: esm, react, menggunakan typescript, berjalan di browser, style guide dari airbnb, dan disimpan dalam format json, serta pilih yes untuk dapat menginstall library dengan npm
- Tambahkan rule berikut pada key rules di file eslintrc.json: "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx", ".ts", ".tsx"]}]
- Eslint supaya kode yang diketik rapi, terstruktur, dan standar

### Konversi HTML ke React

- File HTML terdapat di assets
- HTML dikoneversi sebagai pages, kemudian dipecah menjadi komponen-komponen yang dapat di-reuse

### Struktur Desain Atomik

- Alasan: untuk memecah komponen menjadi lebih terstruktur dan mudah untuk di-maintenance
- Membuat folder "components" di root projek
- components/atom: komponen terkecil, dan dibuat apabila digunakan >= 2 kali
- components/molecule: sekumpulan komponen atom
- components/organism: untuk 1 grouping komponen/section, bersifat independen, bisa ditambahkan logic dan state di dalamnya
- kemudian semuanya digabungkan dalam pages

### Storybook

- Mengumpulkan/mendokumentasikan komponen yang sudah dibuat untuk design system
- yarn storybook (perintah untuk menjalankan storybook)
- Buka folder stories,
- *Styling untuk story, sesungguhnya styling yang baik untuk style berbasis komponen adalah styling yg terisolasi hanya untuk komponen tersebut
- Untuk setup Global styling di storybook: *jika menggunakan library seperti bootstrap dan googlefonts, CDNnya dapat disimpan di file preview-head.html, kemudian untuk global stylenya import css di file preview.js, lalu restart storybook dan jalankan kembali

## Library yang Digunakan

- Storybook
- Classnames: untuk dapat memberikan kondisi/logic pada className/styling

## Memulai Aplikasi

Menjalankan aplikasi:

```bash
npm run dev
# atau
yarn dev
```

Buka dengan browser ke url berikut [http://localhost:3000](http://localhost:3000)

## Pelajari lebih lanjut

Untuk belajar mengenai Next.js, bisa klik link berikut:

- [Next.js Documentation](https://nextjs.org/docs) - Fitur Next.js & API.
- [Learn Next.js](https://nextjs.org/learn) - interaktif tutorial Next.js.

## Deploy Aplikasi di Vercel

Untuk caranya dapat dilihat di link berikut [Next.js deployment documentation](https://nextjs.org/docs/deployment)
