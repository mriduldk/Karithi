@extends('layouts/contentLayoutMaster')

@section('title', 'Schools & Colleges Statistics')

@section('vendor-style')
<!-- vendor css files -->
<link rel="stylesheet" href="{{ asset(mix('vendors/css/charts/apexcharts.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('vendors/css/pickers/flatpickr/flatpickr.min.css')) }}">
@endsection

@section('page-style')
<link rel="stylesheet" href="{{ asset(mix('css/base/plugins/forms/pickers/form-flat-pickr.css')) }}">
<link rel="stylesheet" href="{{ asset(mix('css/base/plugins/charts/chart-apex.css')) }}">
@endsection

@section('content')

<section id="apexchart">


    <section id="carousel-crossfade">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="{{ asset(mix('images/banner/banner-1.jpg')) }}"
                                        class="img-fluid d-block w-100" alt="cf-img-1" />
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset(mix('images/banner/banner-2.jpg')) }}"
                                        class="img-fluid d-block w-100" alt="cf-img-2" />
                                </div>
                                <div class="carousel-item">
                                    <img src="{{ asset(mix('images/banner/banner-3.jpg')) }}"
                                        class="img-fluid d-block w-100" alt="cf-img-3" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleFade" role="button"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleFade" role="button"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="content-body">

        <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
                <!-- Donut Chart Starts-->
                <div class="col-12">
                    <div class="card">
                        <div class="card-header flex-column align-items-start">
                            <h4 class="card-title mb-75">Number of Schools</h4>
                            <span class="card-subtitle text-muted">Spending on various categories </span>
                        </div>
                        <div class="card-body">
                            <div id="donut-chart-1"></div>
                        </div>
                    </div>
                </div>
                <!-- Donut Chart Ends-->
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <!-- Donut Chart Starts-->
                <div class="col-12">
                    <div class="card">
                        <div class="card-header flex-column align-items-start">
                            <h4 class="card-title mb-75">Number of Teachers</h4>
                            <span class="card-subtitle text-muted">Spending on various categories </span>
                        </div>
                        <div class="card-body">
                            <div id="donut-chart-2"></div>
                        </div>
                    </div>
                </div>
                <!-- Donut Chart Ends-->
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <!-- Donut Chart Starts-->
                <div class="col-12">
                    <div class="card">
                        <div class="card-header flex-column align-items-start">
                            <h4 class="card-title mb-75">Students Strengths</h4>
                            <span class="card-subtitle text-muted">Spending on various categories </span>
                        </div>
                        <div class="card-body">
                            <div id="donut-chart-3"></div>
                        </div>
                    </div>
                </div>
                <!-- Donut Chart Ends-->
            </div>
            <div class="col-12 col-md-6 col-lg-3">
                <!-- Donut Chart Starts-->
                <div class="col-12">
                    <div class="card">
                        <div class="card-header flex-column align-items-start">
                            <h4 class="card-title mb-75">Non Teaching Staff</h4>
                            <span class="card-subtitle text-muted">Spending on various categories </span>
                        </div>
                        <div class="card-body">
                            <div id="donut-chart-4"></div>
                        </div>
                    </div>
                </div>
                <!-- Donut Chart Ends-->
            </div>
        </div>
        <!-- apex charts section start -->
        <section id="apexchart">

            <div class="row">

                <!-- Column Chart Starts -->
                <div class="col-12">
                    <div class="card">
                        <div
                            class="card-header d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start">
                            <h4 class="card-title">Enrolment by Level of Education & Genders</h4>
                            <div class="d-flex align-items-center mt-md-0 mt-1">
                                <i class="font-medium-2" data-feather="calendar"></i>
                                <input type="text" class="form-control flat-picker bg-transparent border-0 shadow-none"
                                    placeholder="YYYY-MM-DD" />
                            </div>
                        </div>
                        <div class="card-body">
                            <div id="column-chart"></div>
                        </div>
                    </div>
                </div>
                <!-- Column Chart Ends -->

                <!-- Polar Area Chart Starts -->
                <div class="col-lg-12 col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Medium</h4>
                            <div class="dropdown">
                                <i data-feather="more-vertical" class="cursor-pointer" role="button" id="heat-chart-dd"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </i>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="heat-chart-dd">
                                    <a class="dropdown-item" href="#">Last 28 Days</a>
                                    <a class="dropdown-item" href="#">Last Month</a>
                                    <a class="dropdown-item" href="#">Last Year</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <canvas class="polar-area-chart-ex chartjs" data-height="350"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Polar Area Chart Ends-->


                <div class="col-lg-12 col-12">
                    <div class="row match-height">
                        <!-- Sales Line Chart Card -->
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="card">
                                <div class="card-header align-items-start">
                                    <div>
                                        <h4 class="card-title mb-25">Sales</h4>
                                        <p class="card-text mb-0">2020 Total Sales: 12.84k</p>
                                    </div>
                                    <i data-feather="settings" class="font-medium-3 text-muted cursor-pointer"></i>
                                </div>
                                <div class="card-body pb-0">
                                    <div id="sales-line-chart"></div>
                                </div>
                            </div>
                        </div>
                        <!--/ Sales Line Chart Card -->
                    </div>
                </div>


                <!-- Apex charts section end -->
            </div>

        </section>

    </div>




</section>

<script>

</script>


@endsection

@section('vendor-script')
<!-- vendor files -->
<script src="{{ asset(mix('vendors/js/charts/apexcharts.min.js')) }}"></script>
<script src="{{ asset(mix('vendors/js/pickers/flatpickr/flatpickr.min.js')) }}"></script>
@endsection

@section('page-script')
<!-- Page js files -->
<!-- <script src="{{ asset(mix('js/scripts/charts/chart-apex.js')) }}"></script> -->
<script src="{{ asset(mix('js/scripts/charts/karithi.js')) }}"></script>
<script
    src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/js/scripts/cards/card-analytics.js?id=ead6f2040d41b5dbf6af">
</script>

<!-- <script src="{{ asset(mix('js/scripts/charts/chart-apex.js')) }}"></script> -->
<script src="{{ asset(mix('js/scripts/charts/chart-chartjs.js')) }}"></script>

<script
    src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/js/scripts/cards/card-analytics.js?id=ead6f2040d41b5dbf6af">
</script>
<script src="{{ asset(mix('js/scripts/cards/card-analytics.js')) }}"></script>

@endsection