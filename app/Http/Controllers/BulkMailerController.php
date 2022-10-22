<?php

namespace App\Http\Controllers;

use App\Models\bulkMailer;
use App\Http\Requests\StorebulkMailerRequest;
use App\Http\Requests\UpdatebulkMailerRequest;

class BulkMailerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StorebulkMailerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorebulkMailerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\bulkMailer  $bulkMailer
     * @return \Illuminate\Http\Response
     */
    public function show(bulkMailer $bulkMailer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\bulkMailer  $bulkMailer
     * @return \Illuminate\Http\Response
     */
    public function edit(bulkMailer $bulkMailer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatebulkMailerRequest  $request
     * @param  \App\Models\bulkMailer  $bulkMailer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatebulkMailerRequest $request, bulkMailer $bulkMailer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\bulkMailer  $bulkMailer
     * @return \Illuminate\Http\Response
     */
    public function destroy(bulkMailer $bulkMailer)
    {
        //
    }
}
