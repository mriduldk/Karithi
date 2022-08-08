@extends('layouts/contentLayoutMaster')

@section('title', 'Udalguri District')

@section('vendor-style')
{{-- vendor css files --}}
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/dataTables.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/responsive.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/buttons.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/tables/datatable/rowGroup.bootstrap5.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/pickers/flatpickr/flatpickr.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/maps/leaflet.min.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/charts/apexcharts.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/forms/select/select2.min.css')) }}">

@endsection

@section('page-style')
{{-- vendor css files --}}
<link rel="stylesheet" href="{{ asset(mix('css/base/plugins/maps/map-leaflet.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('css/base/plugins/charts/chart-apex.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('css/base/plugins/forms/form-validation.css')) }}">

@endsection


@section('content')
<section id="basic-datatable">

    <div class="row">
        <div class="col-lg-6 d-flex align-items-stretch">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">About Udalguri</h4>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>

        <div class="col-lg-6 align-items-stretch">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Udalguri District Map</h4>
                </div>
                <div class="card-body">
                    <div class="leaflet-map" id="geojson-udalguri"></div>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-4 col-sm-6 col-12">
            <div class="card">
                <div class="card-header flex-column align-items-start pb-0">
                    <div class="avatar bg-light-primary p-50 m-0">
                        <div class="avatar-content">
                            <i data-feather="users" class="font-medium-5"></i>
                        </div>
                    </div>
                    <h2 class="fw-bolder mt-1">501</h2>
                    <p class="card-text">Total Schools</p>
                </div>
                <div id="line-area-chart-1"></div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-12">
            <div class="card">
                <div class="card-header flex-column align-items-start pb-0">
                    <div class="avatar bg-light-success p-50 m-0">
                        <div class="avatar-content">
                            <i data-feather="credit-card" class="font-medium-5"></i>
                        </div>
                    </div>
                    <h2 class="fw-bolder mt-1">10,966</h2>
                    <p class="card-text">Total students</p>
                </div>
                <div id="line-area-chart-2"></div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-12">
            <div class="card">
                <div class="card-header flex-column align-items-start pb-0">
                    <div class="avatar bg-light-danger p-50 m-0">
                        <div class="avatar-content">
                            <i data-feather="shopping-cart" class="font-medium-5"></i>
                        </div>
                    </div>
                    <h2 class="fw-bolder mt-1">1,985</h2>
                    <p class="card-text">Total Teachers</p>
                </div>
                <div id="line-area-chart-3"></div>
            </div>
        </div>
    </div>


    <!-- <div class="row" id="basic-table">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">School Table</h4>
                </div>
                <div class="card-body">
                    <div class="card-datatable table-responsive pt-0">
                        <table class="user-list-table table">
                            <thead class="table-light">
                                <tr>
                                    <th>SL No</th>
                                    <th>UDICE CODE</th>
                                    <th>School Name</th>
                                    <th>Regional Details</th>
                                    <th>Basic Details</th>
                                    <th>Schol status</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div> -->

    <div class="card">
        <div class="card-body border-bottom">
            <h4 class="card-title">School Table</h4>
            <div class="row">
                <div class="col-md-3">
                    <label class="form-label" for="UserRole">School Name</label>
                    <input class="form-control" type="text" placeholder="School Name" id="school_name"
                        name="school_name">
                </div>
                <div class="col-md-3">
                    <label class="form-label" for="UserRole">UDICE Code</label>
                    <input class="form-control" type="number" placeholder="UDICE Code" id="udice_code"
                        name="udice_code">
                </div>
                <div class="col-md-3">
                    <label class="form-label" for="UserRole">PIN</label>
                    <input class="form-control" type="number" placeholder="PIN Code" id="pin"
                        name="pin">
                </div>
                <div class="col-md-3 mt-2">
                    <a class="btn btn-primary" onclick="searchBtnClicked()">Search</a>
                </div>
            </div>
        </div>
        <div class="card-datatable table-responsive pt-0">
            <table class="school-list-table table">
                <thead class="table-light">
                    <tr>
                        <th>SL No</th>
                        <th>UDICE CODE</th>
                        <th>School Name</th>
                        <th>Regional Details</th>
                        <th>Basic Details</th>
                        <th>Schol status</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>





</section>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />

<!-- <script>
//$('#myTable').DataTable();
var dt_basic_table = $('.datatables-basic');
var dt_basic = dt_basic_table.DataTable();
</script> -->

<script>
    var dtUserTable = $('.school-list-table');

    function searchBtnClicked() {

        var schoolName = $('#school_name').val();
        var udice_code = $('#udice_code').val();
        var pin = $('#pin').val();

        GetSchoolData(schoolName, udice_code, pin);

    }

    function GetSchoolData(schoolName, udice_code, pin) {

        dtUserTable.DataTable({
        // ajax: assetPath + 'data/user-list.json', // JSON file to add data

            responsive: true,
            searchDelay: 500,
            destroy: true,
            ajax: {
                url: "{{url('searchedSchoolData')}}",
                data : { 'district' : 'Udalguri', 'school_name': schoolName, 'udice_code': udice_code, 'pin': pin },
                type: 'GET',
                dataSrc: ''
            },
            success: function(data) {
                debugger;
            },
            error: function(a, b, c) {
                debugger;
            },

            columns: [{
                    data: 'id',
                    title: 'id',
                },
                {
                    data: null,
                    responsivePriority: -1
                },
                {
                    data: 'udice_code',
                    title: 'udice code',
                },
                {
                    data: null,
                    title: 'School Address',
                },
                {
                    data: null,
                    title: 'Basic Details',
                },
                {
                    data: null,
                    title: 'School status',
                }
            ],
            columnDefs: [{
                    targets: 1,
                    title: 'School Name',
                    orderable: false,
                    render: function(data, type, full, meta) {

                        var url = '{{ route("searchSchoolDetails", ":id") }}';
                        url = url.replace(':id', data.school_id);

                        return (
                            "<a href='" + url + "' class=''>" + data.school_name + " " +
                            feather.icons['external-link'].toSvg({
                                class: 'font-small-4 me-50'
                            }) +
                            '</a>'
                        );
                    }
                },
                {
                    targets: 3,
                    title: 'School Address',
                    orderable: false,
                    render: function(data, type, full, meta) {

                        return (
                            "<span>Village : " + data.village + "<br>" +
                            "Cluster : " + data.cluster + "<br>" +
                            "Block : " + data.block + "<br>" +
                            "District : " + data.district + "<br>" +
                            "State : " + data.state + "<br>" +
                            "PIN : " + data.pin + "</span>"
                        );
                    }
                },
                {
                    targets: 4,
                    title: 'Basic Details',
                    orderable: false,
                    render: function(data, type, full, meta) {

                        return (
                            "<span>State Mgmt : " + data.state_management + "<br>" +
                            "National Mgmt : " + data.national_management + "<br>" +
                            "School Category : " + data.school_category + "<br>" +
                            "School Type : " + data.school_type + "</span>"
                        );
                    }
                },
                {
                    targets: 5,
                    title: 'School status',
                    orderable: false,
                    render: function(data, type, full, meta) {

                        return (
                            "<span class='badge rounded-pill badge-light-success p-1'>State Mgmt : " +
                            data
                            .status + "</span>"
                        );
                    }
                }
            ],
            order: [
                [1, 'desc']
            ],
            dom: '<"d-flex justify-content-between align-items-center header-actions mx-2 row mt-75"' +
                '<"col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start" l>' +
                '<"col-sm-12 col-lg-8 ps-xl-75 ps-0"<"dt-action-buttons d-flex align-items-center justify-content-center justify-content-lg-end flex-lg-nowrap flex-wrap"<"me-1"f>B>>' +
                '>t' +
                '<"d-flex justify-content-between mx-2 row mb-1"' +
                '<"col-sm-12 col-md-6"i>' +
                '<"col-sm-12 col-md-6"p>' +
                '>',
            language: {
                sLengthMenu: 'Show _MENU_',
                search: 'Search',
                searchPlaceholder: 'Search..'
            },
            lengthMenu: [10, 25, 50, 75, 100],
        });


    }

    GetSchoolData('', '', '')

</script>


@endsection

@section('vendor-script')
{{-- vendor files --}}
<script src="{{ asset(mix('vendors/js/forms/select/select2.full.min.js')) }}"></script>

<script src="{{ asset(mix('vendors/js/tables/datatable/jquery.dataTables.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.bootstrap5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.responsive.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/responsive.bootstrap5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/datatables.checkboxes.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/datatables.buttons.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/jszip.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/pdfmake.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/vfs_fonts.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/buttons.html5.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/buttons.print.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/tables/datatable/dataTables.rowGroup.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/pickers/flatpickr/flatpickr.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/maps/leaflet.min.js'))}}"></script>
<script src="{{ asset(mix('vendors/js/charts/apexcharts.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/forms/validation/jquery.validate.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/forms/cleave/cleave.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/forms/cleave/addons/cleave-phone.us.js')) }}"></script>

@endsection
@section('page-script')
{{-- Page js files --}}
<!-- <script src="{{ asset(mix('js/scripts/tables/table-datatables-basic.js')) }}"></script> -->
<script src="{{ asset(mix('js/scripts/maps/map-leaflet.js'))}}"></script>
<script src="{{ asset(mix('js/scripts/cards/card-statistics.js')) }}"></script>
<script src="{{ asset(mix('js/scripts/pages/app-user-list.js')) }}"></script>

@endsection