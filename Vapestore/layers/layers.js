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
var format_VapeStore_3 = new ol.format.GeoJSON();
var features_VapeStore_3 = format_VapeStore_3.readFeatures(json_VapeStore_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VapeStore_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VapeStore_3.addFeatures(features_VapeStore_3);
var lyr_VapeStore_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VapeStore_3, 
                style: style_VapeStore_3,
                popuplayertitle: 'VapeStore',
                interactive: true,
                title: '<img src="styles/legend/VapeStore_3.png" /> VapeStore'
            });
var format_areapemukiman_4 = new ol.format.GeoJSON();
var features_areapemukiman_4 = format_areapemukiman_4.readFeatures(json_areapemukiman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areapemukiman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areapemukiman_4.addFeatures(features_areapemukiman_4);
var lyr_areapemukiman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areapemukiman_4, 
                style: style_areapemukiman_4,
                popuplayertitle: 'area pemukiman',
                interactive: true,
                title: '<img src="styles/legend/areapemukiman_4.png" /> area pemukiman'
            });
var format_FasilitasUmum_5 = new ol.format.GeoJSON();
var features_FasilitasUmum_5 = format_FasilitasUmum_5.readFeatures(json_FasilitasUmum_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_5.addFeatures(features_FasilitasUmum_5);
var lyr_FasilitasUmum_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_5, 
                style: style_FasilitasUmum_5,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_5.png" /> Fasilitas Umum'
            });
var format_Tempatibadah_6 = new ol.format.GeoJSON();
var features_Tempatibadah_6 = format_Tempatibadah_6.readFeatures(json_Tempatibadah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tempatibadah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tempatibadah_6.addFeatures(features_Tempatibadah_6);
var lyr_Tempatibadah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tempatibadah_6, 
                style: style_Tempatibadah_6,
                popuplayertitle: 'Tempat ibadah',
                interactive: true,
                title: '<img src="styles/legend/Tempatibadah_6.png" /> Tempat ibadah'
            });
var format_Jalanprovinsi_7 = new ol.format.GeoJSON();
var features_Jalanprovinsi_7 = format_Jalanprovinsi_7.readFeatures(json_Jalanprovinsi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanprovinsi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanprovinsi_7.addFeatures(features_Jalanprovinsi_7);
var lyr_Jalanprovinsi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanprovinsi_7, 
                style: style_Jalanprovinsi_7,
                popuplayertitle: 'Jalan provinsi',
                interactive: true,
                title: '<img src="styles/legend/Jalanprovinsi_7.png" /> Jalan provinsi'
            });
var format_jalanperumahan_8 = new ol.format.GeoJSON();
var features_jalanperumahan_8 = format_jalanperumahan_8.readFeatures(json_jalanperumahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanperumahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanperumahan_8.addFeatures(features_jalanperumahan_8);
var lyr_jalanperumahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanperumahan_8, 
                style: style_jalanperumahan_8,
                popuplayertitle: 'jalan perumahan',
                interactive: true,
                title: '<img src="styles/legend/jalanperumahan_8.png" /> jalan perumahan'
            });
var format_jalangang_9 = new ol.format.GeoJSON();
var features_jalangang_9 = format_jalangang_9.readFeatures(json_jalangang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalangang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalangang_9.addFeatures(features_jalangang_9);
var lyr_jalangang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalangang_9, 
                style: style_jalangang_9,
                popuplayertitle: 'jalan gang',
                interactive: true,
                title: '<img src="styles/legend/jalangang_9.png" /> jalan gang'
            });
var format_Jalanraya_10 = new ol.format.GeoJSON();
var features_Jalanraya_10 = format_Jalanraya_10.readFeatures(json_Jalanraya_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanraya_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanraya_10.addFeatures(features_Jalanraya_10);
var lyr_Jalanraya_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanraya_10, 
                style: style_Jalanraya_10,
                popuplayertitle: 'Jalanraya',
                interactive: true,
                title: '<img src="styles/legend/Jalanraya_10.png" /> Jalanraya'
            });
var format_jalandesa_11 = new ol.format.GeoJSON();
var features_jalandesa_11 = format_jalandesa_11.readFeatures(json_jalandesa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_11.addFeatures(features_jalandesa_11);
var lyr_jalandesa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_11, 
                style: style_jalandesa_11,
                popuplayertitle: 'jalan desa',
                interactive: true,
                title: '<img src="styles/legend/jalandesa_11.png" /> jalan desa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bataskelurahan_1.setVisible(true);lyr_BuildinggeoAI_2.setVisible(true);lyr_VapeStore_3.setVisible(true);lyr_areapemukiman_4.setVisible(true);lyr_FasilitasUmum_5.setVisible(true);lyr_Tempatibadah_6.setVisible(true);lyr_Jalanprovinsi_7.setVisible(true);lyr_jalanperumahan_8.setVisible(true);lyr_jalangang_9.setVisible(true);lyr_Jalanraya_10.setVisible(true);lyr_jalandesa_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bataskelurahan_1,lyr_BuildinggeoAI_2,lyr_VapeStore_3,lyr_areapemukiman_4,lyr_FasilitasUmum_5,lyr_Tempatibadah_6,lyr_Jalanprovinsi_7,lyr_jalanperumahan_8,lyr_jalangang_9,lyr_Jalanraya_10,lyr_jalandesa_11];
lyr_bataskelurahan_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode pos': 'kode pos', 'luas': 'luas', 'penduduk': 'penduduk', });
lyr_BuildinggeoAI_2.set('fieldAliases', {'FID': 'FID', });
lyr_VapeStore_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'alamat': 'alamat', 'Phone': 'Phone', });
lyr_areapemukiman_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kode pos': 'kode pos', 'luas': 'luas', });
lyr_FasilitasUmum_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'kode pos': 'kode pos', });
lyr_Tempatibadah_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'kode pos': 'kode pos', 'luas': 'luas', });
lyr_Jalanprovinsi_7.set('fieldAliases', {'id': 'id', 'Nama jalan': 'Nama jalan', 'panjang': 'panjang', });
lyr_jalanperumahan_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_jalangang_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_Jalanraya_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_jalandesa_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_bataskelurahan_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', 'penduduk': 'TextEdit', });
lyr_BuildinggeoAI_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_VapeStore_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'Phone': 'TextEdit', });
lyr_areapemukiman_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', });
lyr_FasilitasUmum_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'kode pos': 'TextEdit', });
lyr_Tempatibadah_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'kode pos': 'TextEdit', 'luas': 'TextEdit', });
lyr_Jalanprovinsi_7.set('fieldImages', {'id': 'TextEdit', 'Nama jalan': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalanperumahan_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalangang_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_Jalanraya_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_jalandesa_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_bataskelurahan_1.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', 'penduduk': 'no label', });
lyr_BuildinggeoAI_2.set('fieldLabels', {'FID': 'no label', });
lyr_VapeStore_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'alamat': 'no label', 'Phone': 'no label', });
lyr_areapemukiman_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', });
lyr_FasilitasUmum_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'kode pos': 'no label', });
lyr_Tempatibadah_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'kode pos': 'no label', 'luas': 'no label', });
lyr_Jalanprovinsi_7.set('fieldLabels', {'id': 'no label', 'Nama jalan': 'no label', 'panjang': 'no label', });
lyr_jalanperumahan_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalangang_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_Jalanraya_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalandesa_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', });
lyr_jalandesa_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});