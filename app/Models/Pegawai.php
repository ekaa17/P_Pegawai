<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pegawai extends Model
{
    use HasFactory;

    protected $table = 'pegawais'; // Sesuaikan nama tabel dengan yang ada di database

    protected $fillable = [
        'Nik_pegawai',
        'Nama_pegawai',
        'Jabatan',
        'Tgl_Lahir',
        'jenis_kelamin',
        'alamat',
        'no_hp',
        'foto',
        'created_at',
        'updated_at'
    ];

    // Optionally, you can define the primary key if it's different from the default 'id'
    // protected $primaryKey = 'id';

    // Optionally, if you want timestamps (created_at and updated_at) to be handled by Laravel
    public $timestamps = true; // This is true by default, so you can omit this line if not necessary
}
