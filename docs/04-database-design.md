# Database Design

## Database

PostgreSQL (Supabase)

---

## Design Principles

- UUID Primary Key
- Soft Delete (is_active)
- Audit Fields
- Multi Branch
- Row Level Security
- Foreign Key Constraint
- Index Optimization

---

## Standard Columns

Semua tabel mempunyai field berikut.

| Field | Type |
|--------|------|
| id | UUID |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |
| created_by | UUID |
| updated_by | UUID |
| is_active | BOOLEAN |

---

## Naming Convention

Table

snake_case

Contoh

customers

sale_items

stock_movements

Columns

snake_case

Foreign Key

branch_id

customer_id

product_id

doctor_id

sale_id

---

## UUID

Semua Primary Key menggunakan UUID.

---

## Audit

created_at

updated_at

created_by

updated_by

---

## Multi Branch

Semua tabel transaksi memiliki

branch_id

---

## Status

Status menggunakan ENUM PostgreSQL jika memungkinkan.