<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\PatientRequest;
use App\Models\Patient;
use Illuminate\Support\Facades\Input;
use Laracasts\Flash\Flash;
use Carbon\Carbon;
use Yajra\Datatables\Datatables;
use Illuminate\Http\Request;
use App\Models\VendorType;
use App\Models\Food;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;

class PatientController extends Controller
{

    public function __construct()
    {
        /* *
         *-------------------------------------------------------
         *
         *-------------------------------------------------------
         */

        \JavaScript::put([
            'minDate' => '2016/03/04'
        ]);
    }

    public function index(Request $request)
    {

        if($request->ajax()){

            $patient = Patient::select( [ 'id', 'name', 'mobile', 'date_of_birth', 'image' ])->get();

            return Datatables::of($patient)
                ->addColumn('Image', function($item){
                    return '<img src="' . $item->image . ' " alt="Smiley face" height="42" width="42">';
                })
                ->addColumn('Operations', function($item){
                        $form  = \Form::open(['method' => 'DELETE', 'url' => 'patient/' . $item->id, 'class' => 'table-form-inline', 'data-bb' => 'confirm']);
                        $form .= \Form::hidden('id', $item->id);
                        $form .= \Form::button('<i class="glyphicon glyphicon-trash"></i> Delete', ['class' => 'btn btn-danger btn-xs', 'type'=> 'submit']);
                        $form .= \Form::close();

                        $form .= ' ' . link_to('patient/'. $item->id .'/edit', $title = "Edit", $attributes = [ 'class' => 'btn btn-primary btn-xs glyphicon glyphicon-edit' ], $secure = null);

                    return $form;
                })
                ->removeColumn('id')
                ->removeColumn('image')
                ->make();
        }


        return view('patient.list');
    }


    public function create()
    {
        $vendorTypeLists = VendorType::lists('name', 'id');
        $foods = Food::lists('name', 'id');
        $image = 'images/pp_size.png';

        return view('patient.create', compact('vendorTypeLists','foods', 'image') );
    }

    public function store(PatientRequest $request)
    {

      if($request->hasFile('photo')){

        /* *
         * ------------------------------------------------------------------
         * Image Upload By Intervention, JCrop Image Crop
         * ------------------------------------------------------------------
         *
         * 360px / 360px Passport Size Photo
         * custom.js file $('#output').Jcrop({ aspectRatio 2 / 2 })
         * view file patient/_form max-width & max-height
         * controller PatientController $img->resize
         */


        /* *
         * Make Image Directory By User if not exists
         */

        $filePath = 'images/categories/' . auth()->user()->id . '/' . date('d.m.Y') . '/';

        File::exists( $filePath ) or File::makeDirectory($filePath, 0777, true);

        /* *
         * --------------------------------------------
         * Image Processing Start
         * --------------------------------------------
         */
        $img = Image::make( Input::file('photo') );

        $img->resize( 360, 360, function ($constraint) {
            $constraint->aspectRatio();
        });

        $img->crop( intval(Input::get('w')), intval(Input::get('h')), intval(Input::get('x')), intval(Input::get('y')) );

        $pathWithFile =  $filePath . time() . '.jpg';

        $img->save($pathWithFile);



        /* *
         * -------------------------------------------------------
         * Save All Text Information
         * -------------------------------------------------------
         * Add Image With Path in Image Field
         */


        $request->merge([
            'image' => $pathWithFile
        ]);

      }/* Image File End */

        $patient = Patient::create( $request->all() );


        /* *
         * -------------------------------------------------------
         * Save Many To Many Relationship Data
         * -------------------------------------------------------
         */

        $patient->foods()->attach( $request->input('food_list') );



        /* *
         * --------------------------------------------------------
         * Flash Message After Successfully Saved
         * --------------------------------------------------------
         */
        Flash::success('Successfully Created Patient.');


        return redirect('patient');
    }

    public function edit($id)
    {
        $info = Patient::findOrFail($id);

        $vendorTypeLists = VendorType::lists('name', 'id');

        $foods = Food::lists('name', 'id');
        $image = $info->image;

        return view('patient.edit', compact( 'info', 'vendorTypeLists','foods','selectedFoodList', 'image' ) );
    }

    public function update($id, PatientRequest $request)
    {
        $patient = Patient::findOrFail($id);

        $patient->update( $request->all() );

        $patient->foods()->sync( $request->input('food_list') );

        return redirect('patient');
    }



    public function destroy($id)
    {
        $result = Patient::findOrFail($id);

        $result->delete();

        return redirect('patient');

    }


}
