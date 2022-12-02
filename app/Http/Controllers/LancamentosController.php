<?php

namespace App\Http\Controllers;

use App\Models\ChLancamentos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LancamentosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Lancamentos/Index', [
            'lancamentos' => ChLancamentos::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([

            'value' => 'required',
            'title' => 'required',
            'description' => 'required',
            'type' => 'required'

        ]);
        $request->user()->lancamentos()->create($validated);
        return redirect(route('lancamentos.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ChLancamentos  $chLancamentos
     * @return \Illuminate\Http\Response
     */
    public function show(ChLancamentos $chLancamentos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ChLancamentos  $chLancamentos
     * @return \Illuminate\Http\Response
     */
    public function edit(ChLancamentos $chLancamentos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ChLancamentos  $chLancamentos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ChLancamentos $chLancamentos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ChLancamentos  $chLancamentos
     * @return \Illuminate\Http\Response
     */
    public function destroy(ChLancamentos $chLancamentos)
    {
        //
    }
}
