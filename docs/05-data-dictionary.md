# Table : opticals

Menyimpan data perusahaan pemilik aplikasi.

| Field | Type | Nullable | Keterangan |
|--------|------|----------|------------|
| id | UUID | No | Primary Key |
| code | VARCHAR(20) | No | Kode Optical |
| name | VARCHAR(150) | No | Nama Optical |
| phone | VARCHAR(30) | Yes | Telepon |
| email | VARCHAR(100) | Yes | Email |
| address | TEXT | Yes | Alamat |
| logo_url | TEXT | Yes | Logo |
| created_at | TIMESTAMP | No | |
| updated_at | TIMESTAMP | No | |
| created_by | UUID | Yes | |
| updated_by | UUID | Yes | |
| is_active | BOOLEAN | No | Default TRUE |
# Table : branches

Cabang toko.

| Field | Type | Nullable | Keterangan |
|--------|------|----------|------------|
| id | UUID | No | PK |
| optical_id | UUID | No | FK opticals |
| code | VARCHAR(20) | No | Kode Cabang |
| name | VARCHAR(100) | No | Nama Cabang |
| phone | VARCHAR(30) | Yes | |
| email | VARCHAR(100) | Yes | |
| address | TEXT | Yes | |
| city | VARCHAR(100) | Yes | |
| province | VARCHAR(100) | Yes | |
| postal_code | VARCHAR(10) | Yes | |
| created_at | TIMESTAMP | No | |
| updated_at | TIMESTAMP | No | |
| created_by | UUID | Yes | |
| updated_by | UUID | Yes | |
| is_active | BOOLEAN | No | |
# Table : customers

| Field | Type | Nullable | Keterangan |
|--------|------|----------|------------|
| id | UUID | No | PK |
| customer_code | VARCHAR(20) | No | Unique |
| name | VARCHAR(150) | No | |
| gender | VARCHAR(10) | Yes | |
| birth_date | DATE | Yes | |
| phone | VARCHAR(30) | Yes | |
| email | VARCHAR(100) | Yes | |
| address | TEXT | Yes | |
| identity_number | VARCHAR(50) | Yes | KTP/SIM |
| institution_id | UUID | Yes | FK |
| notes | TEXT | Yes | |
| created_at | TIMESTAMP | No | |
| updated_at | TIMESTAMP | No | |
| created_by | UUID | Yes | |
| updated_by | UUID | Yes | |
| is_active | BOOLEAN | No | |