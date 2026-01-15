var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bataskelurahan_1 = new ol.format.GeoJSON();
var features_bataskelurahan_1 = format_bataskelurahan_1.readFeatures(json_bataskelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskelurahan_1.addFeatures(features_bataskelurahan_1);
var lyr_bataskelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskelurahan_1, 
                style: style_bataskelurahan_1,
                popuplayertitle: 'batas kelurahan',
                interactive: true,
                title: '<img src="styles/legend/bataskelurahan_1.png" /> batas kelurahan'
            });
var format_BuildinggeoAI_2 = new ol.format.GeoJSON();
var features_BuildinggeoAI_2 = format_BuildinggeoAI_2.readFeatures(json_BuildinggeoAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildinggeoAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildinggeoAI_2.addFeatures(features_BuildinggeoAI_2);
var lyr_BuildinggeoAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildinggeoAI_2, 
                style: style_BuildinggeoAI_2,
                popuplayertitle: 'Building geo AI',
                interactive: true,
                title: '<img src="styles/legend/BuildinggeoAI_2.png" /> Building geo AI'
            });
var format_ADMINISTRASI_LN_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_3 = format_ADMINISTRASI_LN_25K_3.readFeatures(json_ADMINISTRASI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_3.addFeatures(features_ADMINISTRASI_LN_25K_3);
var lyr_ADMINISTRASI_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_3, 
                style: style_ADMINISTRASI_LN_25K_3,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_3.png" /> ADMINISTRASI_LN_25K'
            });
var format_VapeStore_4 = new ol.format.GeoJSON();
var features_VapeStore_4 = format_VapeStore_4.readFeatures(json_VapeStore_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VapeStore_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VapeStore_4.addFeatures(features_VapeStore_4);
var lyr_VapeStore_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VapeStore_4, 
                style: style_VapeStore_4,
                popuplayertitle: 'VapeStore',
                interactive: true,
                title: '<img src="styles/legend/VapeStore_4.png" /> VapeStore'
            });
var format_areapemukiman_5 = new ol.format.GeoJSON();
var features_areapemukiman_5 = format_areapemukiman_5.readFeatures(json_areapemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areapemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areapemukiman_5.addFeatures(features_areapemukiman_5);
var lyr_areapemukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areapemukiman_5, 
                style: style_areapemukiman_5,
                popuplayertitle: 'area pemukiman',
                interactive: true,
                title: '<img src="styles/legend/areapemukiman_5.png" /> area pemukiman'
            });
var format_FasilitasUmum_6 = new ol.format.GeoJSON();
var features_FasilitasUmum_6 = format_FasilitasUmum_6.readFeatures(json_FasilitasUmum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_6.addFeatures(features_FasilitasUmum_6);
var lyr_FasilitasUmum_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_6, 
                style: style_FasilitasUmum_6,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_6.png" /> Fasilitas Umum'
            });
var format_Tempatibadah_7 = new ol.format.GeoJSON();
var features_Tempatibadah_7 = format_Tempatibadah_7.readFeatures(json_Tempatibadah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempatibadah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempatibadah_7.addFeatures(features_Tempatibadah_7);
var lyr_Tempatibadah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempatibadah_7, 
                style: style_Tempatibadah_7,
                popuplayertitle: 'Tempat ibadah',
                interactive: true,
                title: '<img src="styles/legend/Tempatibadah_7.png" /> Tempat ibadah'
            });
var format_Jalanprovinsi_8 = new ol.format.GeoJSON();
var features_Jalanprovinsi_8 = format_Jalanprovinsi_8.readFeatures(json_Jalanprovinsi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanprovinsi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanprovinsi_8.addFeatures(features_Jalanprovinsi_8);
var lyr_Jalanprovinsi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanprovinsi_8, 
                style: style_Jalanprovinsi_8,
                popuplayertitle: 'Jalan provinsi',
                interactive: true,
                title: '<img src="styles/legend/Jalanprovinsi_8.png" /> Jalan provinsi'
            });
var format_jalanperumahan_9 = new ol.format.GeoJSON();
var features_jalanperumahan_9 = format_jalanperumahan_9.readFeatures(json_jalanperumahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanperumahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanperumahan_9.addFeatures(features_jalanperumahan_9);
var lyr_jalanperumahan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanperumahan_9, 
                style: style_jalanperumahan_9,
                popuplayertitle: 'jalan perumahan',
                interactive: true,
                title: '<img src="styles/legend/jalanperumahan_9.png" /> jalan perumahan'
            });
var format_jalangang_10 = new ol.format.GeoJSON();
var features_jalangang_10 = format_jalangang_10.readFeatures(json_jalangang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangang_10.addFeatures(features_jalangang_10);
var lyr_jalangang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalangang_10, 
                style: style_jalangang_10,
                popuplayertitle: 'jalan gang',
                interactive: true,
                title: '<img src="styles/legend/jalangang_10.png" /> jalan gang'
            });
var format_Jalanraya_11 = new ol.format.GeoJSON();
var features_Jalanraya_11 = format_Jalanraya_11.readFeatures(json_Jalanraya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanraya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanraya_11.addFeatures(features_Jalanraya_11);
var lyr_Jalanraya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanraya_11, 
                style: style_Jalanraya_11,
                popuplayertitle: 'Jalanraya',
                interactive: true,
                title: '<img src="styles/legend/Jalanraya_11.png" /> Jalanraya'
            });
var format_jalandesa_12 = new ol.format.GeoJSON();
var features_jalandesa_12 = format_jalandesa_12.readFeatures(json_jalandesa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_12.addFeatures(features_jalandesa_12);
var lyr_jalandesa_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_12, 
                style: style_jalandesa_12,
                popuplayertitle: 'jalan desa',
                interactive: true,
                title: '<img src="styles/legend/jalandesa_12.png" /> jalan desa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bataskelurahan_1.setVisible(true);lyr_BuildinggeoAI_2.setVisible(true);lyr_ADMINISTRASI_LN_25K_3.setVisible(true);lyr_VapeStore_4.setVisible(true);lyr_areapemukiman_5.setVisible(true);lyr_FasilitasUmum_6.setVisible(true);lyr_Tempatibadah_7.setVisible(true);lyr_Jalanprovinsi_8.setVisible(true);lyr_jalanperumahan_9.setVisible(true);lyr_jalangang_10.setVisible(true);lyr_Jalanraya_11.setVisible(true);lyr_jalandesa_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bataskelurahan_1,lyr_BuildinggeoAI_2,lyr_ADMINISTRASI_LN_25K_3,lyr_VapeStore_4,lyr_areapemukiman_5,lyr_FasilitasUmum_6,lyr_Tempatibadah_7,lyr_Jalanprovinsi_8,lyr_jalanperumahan_9,lyr_jalangang_10,lyr_Jalanraya_11,lyr_jalandesa_12];
lyr_bataskelurahan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode pos': 'kode pos', 'luas': 'luas', 'penduduk': 'penduduk', });
lyr_BuildinggeoAI_2.set('fieldAliases', {'FID': 'FID', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_VapeStore_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'alamat': 'alamat', 'Phone': 'Phone', });
lyr_areapemukiman_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode pos': 'kode pos', 'luas': 'luas', });
lyr_FasilitasUmum_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'kode pos': 'kode pos', });
lyr_Tempatibadah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'kode pos': 'kode pos', 'luas': 'luas', });
lyr_Jalanprovinsi_8.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', 'panjang': 'panjang', });
lyr_jalanperumahan_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_jalangang_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_Jalanraya_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_jalandesa_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_bataskelurahan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', 'penduduk': 'TextEdit', });
lyr_BuildinggeoAI_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_VapeStore_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'Phone': 'TextEdit', });
lyr_areapemukiman_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', });
lyr_FasilitasUmum_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'kode pos': 'TextEdit', });
lyr_Tempatibadah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', });
lyr_Jalanprovinsi_8.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalanperumahan_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalangang_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_Jalanraya_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalandesa_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_bataskelurahan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', 'penduduk': 'no label', });
lyr_BuildinggeoAI_2.set('fieldLabels', {'FID': 'no label', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_VapeStore_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'alamat': 'no label', 'Phone': 'no label', });
lyr_areapemukiman_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', });
lyr_FasilitasUmum_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'kode pos': 'no label', });
lyr_Tempatibadah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', });
lyr_Jalanprovinsi_8.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'no label', 'panjang': 'no label', });
lyr_jalanperumahan_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalangang_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_Jalanraya_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalandesa_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalandesa_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});