# Route Demo - Express.js

## 📌 Deskripsi

Project ini merupakan implementasi dasar routing menggunakan Express.js pada Node.js.
Lab ini bertujuan untuk memahami konsep server-side JavaScript, routing, middleware, serta penanganan error (404).

---

## 🚀 Fitur

* Basic Routing (`/`, `/about`)
* Dynamic Routing (`/products/:id`)
* Query String (`/search?q=...`)
* Middleware Logger (menampilkan request di terminal)
* Handling 404 (Page Not Found)

---

## 🛠️ Teknologi

* Node.js
* Express.js

---

## 📂 Struktur Folder

```id="j7y8gk"
route-demo/
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

---

## ⚙️ Instalasi & Menjalankan Project

1. Clone atau download project
2. Install dependencies:

```id="g4l9dw"
npm install
```

3. Jalankan server:

```id="dph2dl"
node server.js
```

4. Buka di browser:

```id="o0xvpk"
http://localhost:3000
```

---

## 🌐 Endpoint / Route

| Method | Endpoint        | Deskripsi                                |
| ------ | --------------- | ---------------------------------------- |
| GET    | `/`             | Menampilkan "Welcome to Route Handling!" |
| GET    | `/about`        | Menampilkan halaman About                |
| GET    | `/products/:id` | Menampilkan ID produk                    |
| GET    | `/search?q=...` | Menampilkan hasil pencarian              |
| ALL    | `*`             | Menampilkan "Page Not Found" (404)       |

---

## 🧪 Contoh Penggunaan

* Home:

```id="7gslbh"
http://localhost:3000/
```

* About:

```id="yx9nho"
http://localhost:3000/about
```

* Product:

```id="1fg2xm"
http://localhost:3000/products/10
```

* Search:

```id="s2y0dz"
http://localhost:3000/search?q=sepatu
```

---

## 📌 Middleware

Project ini menggunakan middleware untuk mencatat setiap request:

* Method (GET, POST, dll)
* URL yang diakses

Contoh output di terminal:

```id="p7tv7l"
GET /about
GET /products/5
```

---

## ❗ Handling Error

Jika user mengakses route yang tidak tersedia, server akan menampilkan:

```id="a4o9uj"
Page Not Found
```

---

## 👩‍💻 Author

Yuna
