# Business Rules

## Multi Cabang

- Satu Optical mempunyai banyak cabang.
- Setiap cabang mempunyai stok sendiri.
- Setiap cabang mempunyai transaksi sendiri.
- Setiap cabang mempunyai kas sendiri.
- Owner dapat melihat seluruh cabang.

---

## Customer

Customer dapat melakukan pembelian tanpa pemeriksaan mata.

Contoh:

- Frame
- Lensa
- Accessories
- Sunglasses

---

## Pemeriksaan Mata

- Pemeriksaan bersifat opsional.
- Satu pemeriksaan hanya dapat digunakan untuk satu transaksi.
- Setelah digunakan status resep menjadi USED.

---

## Produk

Produk dijual secara terpisah.

Contoh:

- Frame
- Lensa Kanan
- Lensa Kiri
- Coating
- Jasa

---

## Inventory

- Tidak menggunakan Batch.
- Inventory dikelola per Cabang.
- Owner dapat melihat stok seluruh cabang.
- Antar cabang dapat melakukan transfer stok.

---

## Penjualan

Satu transaksi hanya memiliki satu resep.

Resep bersifat optional.

---

## Pembayaran

Pembayaran dapat berupa

- Lunas
- DP
- Angsuran

Jika pembayaran kurang dari total transaksi maka otomatis menjadi Piutang.

---

## Angsuran

- Angsuran dilakukan per bulan.
- Customer boleh membayar lebih cepat.
- Customer boleh langsung melunasi seluruh sisa hutang.

---

## Pengambilan

Status READY_PICKUP diubah manual oleh petugas.

Karena terdapat proses:

- PO Frame
- PO Lensa
- Pemasangan
- QC

---

## Distributor

Distributor memiliki informasi:

- Nama
- Kontak
- Alamat
- Bank
- Nomor Rekening
- Nama Pemilik Rekening

---

## Status Penjualan

- Draft
- Open
- Waiting Payment
- Processing
- Ready Pickup
- Completed
- Cancelled