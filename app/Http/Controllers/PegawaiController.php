<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;

class PegawaiController extends Controller
{
    public function index()
    {
        $pegawais = Pegawai::all();
        // dd($pegawais);
        return view('pegawai.index', compact('pegawais'));
    }

    public function create()
    {
        $pegawais = Pegawai::all();
        // dd($pegawais);
        return view('pegawai.create');
    }

    public function store(Request $request)
    {
        Pegawai::create([
            'Nik_pegawai' => $request->Nik_pegawai,
            'Nama_pegawai' => $request->Nama_pegawai,
            'Jabatan' => $request->Jabatan,
            'Tgl_Lahir' => $request->Tgl_Lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
        ]);
        return redirect('/pegawais');
        // dd($request->all());

    }

    public function edit($id)
    {
        $pegawai = Pegawai::find($id); // Menggunakan find() untuk mencari berdasarkan ID

        if (!$pegawai) {
            abort(404); // Jika pegawai tidak ditemukan, tampilkan error 404
        }

        return view('pegawai.edit', compact('pegawai')); // Mengirimkan variabel $pegawai ke view
    }

    public function update(Request $request)
    {
        Pegawai::where('id', $request->id)->update([
            'Nik_pegawai' => $request->Nik_pegawai,
            'Nama_pegawai' => $request->Nama_pegawai,
            'Jabatan' => $request->Jabatan,
            'Tgl_Lahir' => $request->Tgl_Lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
        ]);
        return redirect('/pegawais');
    }

    public function destroy($id)
    {
        $product = Pegawai::destroy($id);
        return redirect('/pegawais');
    }

    public function show($id)
    {
        $pegawai = Pegawai::find($id); // Mengambil data pegawai berdasarkan ID

        return view('pegawai.show', compact('pegawai')); // Mengirim data pegawai ke view 'pegawai.show'
    }
}
