<?php

namespace Database\Seeders;

use App\Models\Pegawai;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PegawaiTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pegawai::create([
            'Nik_pegawai' => '3672040000',
            'Nama_pegawai' => 'Eka Pratama',
            'Jabatan' => 'Direktur',
            'Tgl_Lahir' => ' 1990-01-01',
            'jenis_kelamin' => 'laki-laki',
            'alamat' => 'warungkara',
            'no_hp' => '087780776114',
            'foto' => '1.jpeg',
        ]);
        Pegawai::create([
            'Nik_pegawai' => '3672040000',
            'Nama_pegawai' => 'Nita',
            'Jabatan' => 'Sekertaris',
            'Tgl_Lahir' => ' 1990-01-01',
            'jenis_kelamin' => 'laki-laki',
            'alamat' => 'warungkara',
            'no_hp' => '087780776114',
            'foto' => '2.jpg',
        ]);


        Pegawai::create([
            'Nik_pegawai' => '3672040000',
            'Nama_pegawai' => 'Arnelia',
            'Jabatan' => 'Admin',
            'Tgl_Lahir' => '1990-01-01',
            'jenis_kelamin' => 'laki-laki',
            'alamat' => 'warungkara',
            'no_hp' => '087780776114',
            'foto' => '3.jpg',
        ]);
    }
}
