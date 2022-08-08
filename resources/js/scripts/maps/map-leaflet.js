/*=========================================================================================
  File Name: map-leaflet.js
  Description: Leaflet Maps
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
  'use strict';

  var assetsPath = '../../../app-assets/',
    statesData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: '01',
          properties: { name: 'Kokrajhar', density: 94.65 },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ 89.862015,26.703072,0.0 ], 
                [ 89.860642,26.734965,0.0 ], 
                [ 89.864075,26.736192,0.0 ], 
                [ 89.870598,26.733432,0.0 ], 
                [ 89.883988,26.729139,0.0 ], 
                [ 89.901497,26.723006,0.0 ], 
                [ 89.968445,26.722086,0.0 ], 
                [ 90.016167,26.732512,0.0 ], 
                [ 90.045006,26.729752,0.0 ], 
                [ 90.190232,26.767769,0.0 ], 
                [ 90.190232,26.772060,0.0 ], 
                [ 90.192292,26.775432,0.0 ], 
                [ 90.193322,26.778803,0.0 ], 
                [ 90.194695,26.780642,0.0 ], 
                [ 90.195038,26.782481,0.0 ], 
                [ 90.191262,26.787079,0.0 ], 
                [ 90.185082,26.790143,0.0 ], 
                [ 90.183365,26.799644,0.0 ], 
                [ 90.200815,26.834745,0.0 ], 
                [ 90.219011,26.849449,0.0 ], 
                [ 90.247850,26.859557,0.0 ], 
                [ 90.301065,26.850674,0.0 ], 
                [ 90.342950,26.873032,0.0 ], 
                [ 90.346384,26.878851,0.0 ], 
                [ 90.346727,26.882526,0.0 ], 
                [ 90.347070,26.888037,0.0 ], 
                [ 90.352907,26.895080,0.0 ], 
                [ 90.354280,26.901510,0.0 ], 
                [ 90.416422,26.905490,0.0 ], 
                [ 90.483422,26.860299,0.0 ], 
                [ 90.498626,26.849980,0.0 ], 
                [ 90.480773,26.817507,0.0 ], 
                [ 90.469122,26.819753,0.0 ], 
                [ 90.454702,26.823123,0.0 ], 
                [ 90.447836,26.830782,0.0 ], 
                [ 90.437536,26.836909,0.0 ], 
                [ 90.435819,26.819140,0.0 ], 
                [ 90.436163,26.805351,0.0 ], 
                [ 90.430669,26.799222,0.0 ], 
                [ 90.418996,26.792174,0.0 ], 
                [ 90.409383,26.796158,0.0 ], 
                [ 90.404577,26.803819,0.0 ], 
                [ 90.402517,26.812093,0.0 ], 
                [ 90.403547,26.820059,0.0 ], 
                [ 90.388441,26.824348,0.0 ], 
                [ 90.375738,26.822204,0.0 ], 
                [ 90.363721,26.816076,0.0 ], 
                [ 90.368185,26.808109,0.0 ], 
                [ 90.370245,26.794013,0.0 ], 
                [ 90.386381,26.783593,0.0 ], 
                [ 90.385694,26.773171,0.0 ], 
                [ 90.369215,26.764282,0.0 ], 
                [ 90.365291,26.758983,0.0 ], 
                [ 90.360141,26.749172,0.0 ], 
                [ 90.357051,26.734149,0.0 ], 
                [ 90.357738,26.721883,0.0 ], 
                [ 90.362201,26.698575,0.0 ], 
                [ 90.368037,26.684158,0.0 ], 
                [ 90.376277,26.674955,0.0 ], 
                [ 90.373005,26.669445,0.0 ], 
                [ 90.373005,26.663923,0.0 ], 
                [ 90.373348,26.648274,0.0 ], 
                [ 90.373348,26.637227,0.0 ], 
                [ 90.383991,26.626486,0.0 ], 
                [ 90.398411,26.612060,0.0 ], 
                [ 90.407589,26.605065,0.0 ], 
                [ 90.421322,26.593093,0.0 ], 
                [ 90.433681,26.588488,0.0 ], 
                [ 90.442264,26.567302,0.0 ], 
                [ 90.450504,26.551947,0.0 ], 
                [ 90.459774,26.535976,0.0 ], 
                [ 90.464237,26.513244,0.0 ], 
                [ 90.455002,26.503292,0.0 ], 
                [ 90.439552,26.490080,0.0 ], 
                [ 90.439833,26.483235,0.0 ], 
                [ 90.438460,26.443895,0.0 ], 
                [ 90.442580,26.409461,0.0 ], 
                [ 90.446700,26.387319,0.0 ], 
                [ 90.445327,26.375199,0.0 ], 
                [ 90.450820,26.351820,0.0 ], 
                [ 90.448073,26.337052,0.0 ], 
                [ 90.431594,26.323513,0.0 ], 
                [ 90.386275,26.319821,0.0 ], 
                [ 90.367049,26.335822,0.0 ], 
                [ 90.351943,26.360434,0.0 ], 
                [ 90.340956,26.355512,0.0 ], 
                [ 90.336837,26.338283,0.0 ], 
                [ 90.327224,26.312435,0.0 ], 
                [ 90.310744,26.293968,0.0 ], 
                [ 90.239333,26.302586,0.0 ], 
                [ 90.205001,26.317359,0.0 ], 
                [ 90.169295,26.333360,0.0 ], 
                [ 90.136336,26.353051,0.0 ], 
                [ 90.111617,26.346898,0.0 ], 
                [ 90.088271,26.339514,0.0 ], 
                [ 90.058059,26.324744,0.0 ], 
                [ 90.056685,26.317359,0.0 ], 
                [ 90.040206,26.296431,0.0 ], 
                [ 90.019606,26.296431,0.0 ], 
                [ 90.014113,26.313666,0.0 ], 
                [ 89.985274,26.313666,0.0 ], 
                [ 89.968795,26.300124,0.0 ], 
                [ 89.944075,26.290275,0.0 ], 
                [ 89.905623,26.293968,0.0 ], 
                [ 89.893264,26.297662,0.0 ], 
                [ 89.864424,26.297662,0.0 ], 
                [ 89.843825,26.277962,0.0 ], 
                [ 89.794387,26.276730,0.0 ], 
                [ 89.762801,26.290275,0.0 ], 
                [ 89.744948,26.300124,0.0 ], 
                [ 89.733962,26.309973,0.0 ], 
                [ 89.749068,26.317359,0.0 ], 
                [ 89.766640,26.321135,0.0 ], 
                [ 89.793762,26.323597,0.0 ], 
                [ 89.809212,26.336829,0.0 ], 
                [ 89.801659,26.344213,0.0 ], 
                [ 89.806122,26.355288,0.0 ], 
                [ 89.815735,26.365132,0.0 ], 
                [ 89.820198,26.375591,0.0 ], 
                [ 89.821572,26.388201,0.0 ], 
                [ 89.832901,26.397734,0.0 ], 
                [ 89.848694,26.410957,0.0 ], 
                [ 89.859680,26.421411,0.0 ], 
                [ 89.864830,26.428790,0.0 ], 
                [ 89.861740,26.440165,0.0 ], 
                [ 89.858446,26.467588,0.0 ], 
                [ 89.857073,26.476500,0.0 ], 
                [ 89.853640,26.483261,0.0 ], 
                [ 89.859820,26.501083,0.0 ], 
                [ 89.857416,26.510914,0.0 ], 
                [ 89.858103,26.526889,0.0 ], 
                [ 89.847460,26.531496,0.0 ], 
                [ 89.850550,26.544397,0.0 ], 
                [ 89.856386,26.547775,0.0 ], 
                [ 89.851923,26.560059,0.0 ], 
                [ 89.846430,26.560674,0.0 ], 
                [ 89.847117,26.567122,0.0 ], 
                [ 89.857416,26.571728,0.0 ], 
                [ 89.860510,26.581595,0.0 ], 
                [ 89.860167,26.590192,0.0 ], 
                [ 89.857420,26.609225,0.0 ], 
                [ 89.862570,26.616591,0.0 ], 
                [ 89.866003,26.634086,0.0 ], 
                [ 89.871153,26.642985,0.0 ], 
                [ 89.872870,26.653725,0.0 ], 
                [ 89.875960,26.659862,0.0 ], 
                [ 89.876615,26.674839,0.0 ], 
                [ 89.877988,26.683736,0.0 ], 
                [ 89.878332,26.693551,0.0 ], 
                [ 89.865629,26.699379,0.0 ], 
                [ 89.862015,26.703072,0.0 ], 
              ]
            ]
          }
        }
      ]
    };

    var statesData2 = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: '01',
          properties: { name: 'Chirang', density: 94.65 },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ 90.502026,26.847737,0.0], 
                [ 90.584424,26.806070,0.0], 
                [ 90.633862,26.796264,0.0], 
                [ 90.644848,26.782779,0.0], 
                [ 90.676434,26.787683,0.0], 
                [ 90.701153,26.772971,0.0], 
                [ 90.727246,26.769293,0.0], 
                [ 90.736859,26.776649,0.0], 
                [ 90.790417,26.774197,0.0], 
                [ 90.815136,26.776649,0.0], 
                [ 90.889294,26.780327,0.0], 
                [ 90.934613,26.786457,0.0], 
                [ 90.946972,26.780327,0.0], 
                [ 90.918133,26.699383,0.0], 
                [ 90.900280,26.687113,0.0], 
                [ 90.875561,26.641706,0.0], 
                [ 90.881054,26.611014,0.0], 
                [ 90.870068,26.591368,0.0], 
                [ 90.843976,26.553292,0.0], 
                [ 90.823376,26.528721,0.0], 
                [ 90.841229,26.497999,0.0], 
                [ 90.838482,26.479563,0.0], 
                [ 90.811017,26.466040,0.0], 
                [ 90.817883,26.442680,0.0], 
                [ 90.762951,26.435302,0.0], 
                [ 90.721753,26.438991,0.0], 
                [ 90.677807,26.458664,0.0], 
                [ 90.654461,26.482021,0.0], 
                [ 90.648968,26.504144,0.0], 
                [ 90.607769,26.462352,0.0], 
                [ 90.513012,26.446369,0.0], 
                [ 90.430615,26.454976,0.0], 
                [ 90.458081,26.500458,0.0], 
                [ 90.471814,26.534864,0.0], 
                [ 90.442975,26.565576,0.0], 
                [ 90.400403,26.597507,0.0], 
                [ 90.385296,26.609786,0.0], 
                [ 90.375683,26.655207,0.0], 
                [ 90.374310,26.694475,0.0], 
                [ 90.371563,26.732503,0.0], 
                [ 90.359204,26.761936,0.0], 
                [ 90.368817,26.788909,0.0], 
                [ 90.385296,26.784005,0.0], 
                [ 90.411389,26.777875,0.0], 
                [ 90.426495,26.785231,0.0], 
                [ 90.436108,26.829356,0.0], 
                [ 90.469067,26.820778,0.0], 
                [ 90.497906,26.846511,0.0], 
                [ 90.502026,26.847737,0.0],
              ]
            ]
          }
        }
      ]
    };

    var statesData3 = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: '01',
          properties: { name: 'Udalguri', density: 94.65 },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ 91.705674,26.813469],
                [ 91.715287,26.787727],
                [ 91.730394,26.757075],
                [ 91.730394,26.730095],
                [ 91.737260,26.698201],
                [ 91.738633,26.672433],
                [ 91.740007,26.639295],
                [ 91.756486,26.612287],
                [ 91.781205,26.585272],
                [ 91.801805,26.564392],
                [ 91.803178,26.526308],
                [ 91.815538,26.501731],
                [ 91.840257,26.475920],
                [ 91.871843,26.475920],
                [ 91.918535,26.493128],
                [ 91.936387,26.515249],
                [ 91.958360,26.554565],
                [ 91.988572,26.569306],
                [ 92.033891,26.577903],
                [ 92.109422,26.596324],
                [ 92.131395,26.608603],
                [ 92.139634,26.631930],
                [ 92.169847,26.646660],
                [ 92.234391,26.644205],
                [ 92.253618,26.628247],
                [ 92.270097,26.622109],
                [ 92.304429,26.631930],
                [ 92.323655,26.652797],
                [ 92.334642,26.671206],
                [ 92.348375,26.698201],
                [ 92.352494,26.723962],
                [ 92.334642,26.793857],
                [ 92.327775,26.835528],
                [ 92.340135,26.861258],
                [ 92.347001,26.898006],
                [ 92.347001,26.905354],
                [ 92.320909,26.901680],
                [ 92.259111,26.893107],
                [ 92.208299,26.891882],
                [ 92.175340,26.893107],
                [ 92.127275,26.889432],
                [ 92.099809,26.872284],
                [ 92.050370,26.856358],
                [ 91.996812,26.856358],
                [ 91.973466,26.877184],
                [ 91.950120,26.893107],
                [ 91.908921,26.918824],
                [ 91.888322,26.918824],
                [ 91.856736,26.918824],
                [ 91.851243,26.901680],
                [ 91.834764,26.878409],
                [ 91.811418,26.864934],
                [ 91.779832,26.849006],
                [ 91.746873,26.831852],
                [ 91.708421,26.819597],
                [ 91.705674,26.813469]
              ]
            ]
          }
        }
      ]
    };

    var statesData4 = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: '01',
          properties: { name: 'Tamulpur', density: 94.65 },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ 91.362352,26.791405] , 
                [ 91.369218,26.768111] , 
                [ 91.391191,26.743586] , 
                [ 91.417283,26.720282] , 
                [ 91.424150,26.710469] , 
                [ 91.433763,26.669979] , 
                [ 91.457109,26.647887] , 
                [ 91.509294,26.619653] , 
                [ 91.565599,26.609831] , 
                [ 91.588945,26.598780] , 
                [ 91.604051,26.570534] , 
                [ 91.610917,26.532452] , 
                [ 91.667222,26.532452] , 
                [ 91.709794,26.520164] , 
                [ 91.752366,26.539823] , 
                [ 91.783952,26.554565] , 
                [ 91.812791,26.570534] , 
                [ 91.760606,26.590184] , 
                [ 91.735887,26.614742] , 
                [ 91.744127,26.633157] , 
                [ 91.742753,26.668752] , 
                [ 91.733140,26.700654] , 
                [ 91.740007,26.735001] , 
                [ 91.723527,26.764433] , 
                [ 91.705674,26.791405] , 
                [ 91.700181,26.815920] , 
                [ 91.671342,26.814694] , 
                [ 91.632890,26.825724] , 
                [ 91.610917,26.819597] , 
                [ 91.576585,26.807340] , 
                [ 91.534013,26.801212] , 
                [ 91.501054,26.799986] , 
                [ 91.473588,26.803663] , 
                [ 91.448869,26.819597] , 
                [ 91.425523,26.833077] , 
                [ 91.411790,26.841655] , 
                [ 91.403550,26.828175] , 
                [ 91.391191,26.812243] , 
                [ 91.381578,26.803663] , 
                [ 91.367845,26.796308] , 
                [ 91.362352,26.791405] 
              ]
            ]
          }
        }
      ]
    };

    var statesData5 = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          id: '01',
          properties: { name: 'Baksa', density: 94.65 },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [ 90.960705,26.782779], 
                [ 90.955212,26.725144], 
                [ 90.963452,26.671161], 
                [ 90.974438,26.630658], 
                [ 90.986798,26.619609], 
                [ 90.968105,26.607093], 
                [ 90.962611,26.584989], 
                [ 90.942012,26.543226], 
                [ 90.935146,26.527254], 
                [ 90.920039,26.514966], 
                [ 90.921413,26.492845], 
                [ 90.965358,26.491616], 
                [ 90.991450,26.486699], 
                [ 91.032649,26.487928], 
                [ 91.051875,26.507593], 
                [ 91.109554,26.519881], 
                [ 91.154872,26.523568], 
                [ 91.185085,26.537083], 
                [ 91.233150,26.554282], 
                [ 91.277095,26.541998], 
                [ 91.318294,26.546912], 
                [ 91.312801,26.570251], 
                [ 91.364986,26.566566], 
                [ 91.408931,26.560424], 
                [ 91.433650,26.561653], 
                [ 91.472102,26.581305], 
                [ 91.474849,26.607093], 
                [ 91.466609,26.634102], 
                [ 91.469356,26.666015], 
                [ 91.444637,26.700372], 
                [ 91.422664,26.721226], 
                [ 91.410304,26.765376], 
                [ 91.384212,26.802155], 
                [ 91.374599,26.798478], 
                [ 91.352626,26.787445], 
                [ 91.312801,26.787445], 
                [ 91.272975,26.805832], 
                [ 91.234523,26.816863], 
                [ 91.178218,26.820540], 
                [ 91.142512,26.816863], 
                [ 91.108180,26.826668], 
                [ 91.090327,26.826668], 
                [ 91.075221,26.800929], 
                [ 91.050502,26.783767], 
                [ 90.988704,26.791123], 
                [ 90.965358,26.786219], 
                [ 90.960705,26.782779]
              ]
            ]
          }
        }
      ]
    };




  if ($('body').attr('data-framework') === 'laravel') {
    assetsPath = $('body').attr('data-asset-path');
  }
  // Basic
  // --------------------------------------------------------------------
  if ($('#basic-map').length) {
    var basicMap = L.map('basic-map').setView([42.35, -71.08], 10);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(basicMap);
  }

  // Markers
  // --------------------------------------------------------------------
  if ($('#shape-map').length) {
    var markerMap = L.map('shape-map').setView([51.5, -0.09], 12);
    var marker = L.marker([51.5, -0.09]).addTo(markerMap);
    var circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(markerMap);
    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(markerMap);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(markerMap);
  }

  // Drag and popup
  // --------------------------------------------------------------------
  if ($('#drag-map').length) {
    var draggableMap = L.map('drag-map').setView([48.817152, 2.455], 12);
    var markerLocation = L.marker([48.817152, 2.455], {
      draggable: 'true'
    }).addTo(draggableMap);
    markerLocation.bindPopup("<b>You're here!</b>").openPopup();
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(draggableMap);
  }

  // User location
  // --------------------------------------------------------------------
  if ($('#user-location').length) {
    var userLocation = L.map('user-location').setView([42.35, -71.08], 10);
    userLocation.locate({
      setView: true,
      maxZoom: 16
    });

    function onLocationFound(e) {
      var radius = e.accuracy;
      L.marker(e.latlng)
        .addTo(userLocation)
        .bindPopup('You are somewhere around ' + radius + ' meters from this point')
        .openPopup();
      L.circle(e.latlng, radius).addTo(userLocation);
    }
    userLocation.on('locationfound', onLocationFound);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(userLocation);
  }

  // Custom Icons
  // --------------------------------------------------------------------
  if ($('#custom-icons').length) {
    var customIcons = L.map('custom-icons').setView([51.5, -0.09], 10);
    var greenLeaf = L.icon({
      iconUrl: assetsPath + 'images/misc/leaf-green.png',
      shadowUrl: assetsPath + 'images/misc/leaf-shadow.png',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    var redLeaf = L.icon({
      iconUrl: assetsPath + 'images/misc/leaf-red.png',
      shadowUrl: assetsPath + 'images/misc/leaf-shadow.png',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    var orangeLeaf = L.icon({
      iconUrl: assetsPath + 'images/misc/leaf-orange.png',
      shadowUrl: assetsPath + 'images/misc/leaf-shadow.png',
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    });
    L.marker([51.5, -0.09], {
      icon: redLeaf
    }).addTo(customIcons);
    L.marker([51.4, -0.51], {
      icon: greenLeaf
    }).addTo(customIcons);
    L.marker([51.49, -0.45], {
      icon: orangeLeaf
    }).addTo(customIcons);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(customIcons);
  }

  // Geojson
  // --------------------------------------------------------------------
  if ($('#geojson').length) {
    var geoJsonMap = L.map('geojson').setView([26.401436, 90.266701], 8);
    L.geoJson(statesData).addTo(geoJsonMap);
    function getColor(d) {
      return d > 1000
        ? '#800026'
        : d > 500
        ? '#BD0026'
        : d > 200
        ? '#E31A1C'
        : d > 100
        ? '#FC4E2A'
        : d > 50
        ? '#FD8D3C'
        : d > 20
        ? '#FEB24C'
        : d > 10
        ? '#FED976'
        : '#FFEDA0';
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    L.geoJson(statesData, {
      style: style
    }).addTo(geoJsonMap);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(geoJsonMap);
  }


  // --------------------------------------------------------------------
  if ($('#geojson-chirang').length) {
    var geoJsonMap = L.map('geojson-chirang').setView([26.6187249, 90.6778393], 8);
    L.geoJson(statesData2).addTo(geoJsonMap);
    function getColor(d) {
      return d > 1000
        ? '#800026'
        : d > 500
        ? '#BD0026'
        : d > 200
        ? '#E31A1C'
        : d > 100
        ? '#FC4E2A'
        : d > 50
        ? '#FD8D3C'
        : d > 20
        ? '#FEB24C'
        : d > 10
        ? '#FED976'
        : '#FFEDA0';
    }

    function style(feature) {
      return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
    L.geoJson(statesData2, {
      style: style
    }).addTo(geoJsonMap);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(geoJsonMap);
  }


    // --------------------------------------------------------------------
    if ($('#geojson-udalguri').length) {
      var geoJsonMap = L.map('geojson-udalguri').setView([26.7300019, 92.0568873], 8);
      L.geoJson(statesData3).addTo(geoJsonMap);
      function getColor(d) {
        return d > 1000
          ? '#800026'
          : d > 500
          ? '#BD0026'
          : d > 200
          ? '#E31A1C'
          : d > 100
          ? '#FC4E2A'
          : d > 50
          ? '#FD8D3C'
          : d > 20
          ? '#FEB24C'
          : d > 10
          ? '#FED976'
          : '#FFEDA0';
      }
  
      function style(feature) {
        return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      }
      L.geoJson(statesData3, {
        style: style
      }).addTo(geoJsonMap);
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(geoJsonMap);
    }


    // --------------------------------------------------------------------
    if ($('#geojson-tamulpur').length) {
      var geoJsonMap = L.map('geojson-tamulpur').setView([26.6424339, 91.556426], 8);
      L.geoJson(statesData4).addTo(geoJsonMap);
      function getColor(d) {
        return d > 1000
          ? '#800026'
          : d > 500
          ? '#BD0026'
          : d > 200
          ? '#E31A1C'
          : d > 100
          ? '#FC4E2A'
          : d > 50
          ? '#FD8D3C'
          : d > 20
          ? '#FEB24C'
          : d > 10
          ? '#FED976'
          : '#FFEDA0';
      }
  
      function style(feature) {
        return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      }
      L.geoJson(statesData4, {
        style: style
      }).addTo(geoJsonMap);
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(geoJsonMap);
    }


    // --------------------------------------------------------------------
    if ($('#geojson-baksa').length) {
      var geoJsonMap = L.map('geojson-baksa').setView([26.6595392, 91.3232513], 8);
      L.geoJson(statesData5).addTo(geoJsonMap);
      function getColor(d) {
        return d > 1000
          ? '#800026'
          : d > 500
          ? '#BD0026'
          : d > 200
          ? '#E31A1C'
          : d > 100
          ? '#FC4E2A'
          : d > 50
          ? '#FD8D3C'
          : d > 20
          ? '#FEB24C'
          : d > 10
          ? '#FED976'
          : '#FFEDA0';
      }
  
      function style(feature) {
        return {
          fillColor: getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      }
      L.geoJson(statesData5, {
        style: style
      }).addTo(geoJsonMap);
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(geoJsonMap);
    }









  // Layer Control
  // --------------------------------------------------------------------
  if ($('#layer-control').length) {
    var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
      denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
      aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
      golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
    var cities = L.layerGroup([littleton, denver, aurora, golden]);
    var street = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      }),
      watercolor = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        maxZoom: 18
      });
    var layerControl = L.map('layer-control', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [street, cities]
    });
    var baseMaps = {
      Street: street,
      Watercolor: watercolor
    };
    var overlayMaps = {
      Cities: cities
    };
    L.control.layers(baseMaps, overlayMaps).addTo(layerControl);
    L.tileLayer('https://c.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 18
    }).addTo(layerControl);
  }
});
