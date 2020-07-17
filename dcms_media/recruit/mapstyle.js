function initialize() {
  var latlng = new google.maps.LatLng(35.688720,139.694650);
  var myOptions = {
    scrollwheel: false,
    zoom: 17,/*拡大比率*/
    center: latlng,/*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  /*アイコン設定*/
  var icon = new google.maps.MarkerImage('/dcms_media/image/common/map_icon.png',
    new google.maps.Size(40,54),/*アイコンサイズ設定*/
    new google.maps.Point(0,0)/*アイコン位置設定*/
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'スターティアラボ株式会社'
  };
  var marker = new google.maps.Marker(markerOptions);
  /*取得スタイルの貼り付け*/
  var styleOptions = [
  {
    "stylers": [
    { "saturation": -500 },
    { "visibility": "simplified" },
    { "lightness": 0 }
    ]
  }
  ];
  var styledMapOptions = { name: 'スターティアラボ株式会社' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);

//function initialize() {
  //var latlng = new google.maps.LatLng(35.710333, 139.777131);
  //var myOptions = {
    //zoom: 18, /*拡大比率*/
    //center: latlng, /*表示枠内の中心点*/
    //mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
  /*};
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}*/