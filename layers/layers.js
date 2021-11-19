var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_captaciones_1 = new ol.format.GeoJSON();
var features_captaciones_1 = format_captaciones_1.readFeatures(json_captaciones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_captaciones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_captaciones_1.addFeatures(features_captaciones_1);
var lyr_captaciones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_captaciones_1, 
                style: style_captaciones_1,
                interactive: true,
                title: '<img src="styles/legend/captaciones_1.png" /> captaciones'
            });
var format_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2 = new ol.format.GeoJSON();
var features_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2 = format_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.readFeatures(json_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.addFeatures(features_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2);
var lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2, 
                style: style_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2,
                interactive: true,
                title: '<img src="styles/legend/Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.png" /> Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios'
            });
var format_comunas_3 = new ol.format.GeoJSON();
var features_comunas_3 = format_comunas_3.readFeatures(json_comunas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_3.addFeatures(features_comunas_3);
var lyr_comunas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunas_3, 
                style: style_comunas_3,
                interactive: true,
    title: 'comunas<br />\
    <img src="styles/legend/comunas_3_0.png" /> Comuna 1<br />\
    <img src="styles/legend/comunas_3_1.png" /> Comuna 2<br />\
    <img src="styles/legend/comunas_3_2.png" /> Comuna 3<br />\
    <img src="styles/legend/comunas_3_3.png" /> Comuna 4<br />\
    <img src="styles/legend/comunas_3_4.png" /> Comuna 5<br />\
    <img src="styles/legend/comunas_3_5.png" /> Comuna 6<br />\
    <img src="styles/legend/comunas_3_6.png" /> Comuna 7<br />\
    <img src="styles/legend/comunas_3_7.png" /> Comuna 8<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_captaciones_1.setVisible(true);lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.setVisible(true);lyr_comunas_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_captaciones_1,lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2,lyr_comunas_3];
lyr_captaciones_1.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.set('fieldAliases', {'nombre del prestador': 'nombre del prestador', 'NIT': 'NIT', 'DV': 'DV', 'Numero de Acto administrativo': 'Numero de Acto administrativo', 'Código DANE': 'Código DANE', 'Tipo de Fuente Hidrica': 'Tipo de Fuente Hidrica', 'Nombre de la Fuente': 'Nombre de la Fuente', 'Concesion de Aguas': 'Concesion de Aguas', 'Fecha Inicio de Concesion': 'Fecha Inicio de Concesion', 'Fecha Final de Concesion': 'Fecha Final de Concesion', 'Uso de Abastecimiento': 'Uso de Abastecimiento', 'Caudal Concesionado': 'Caudal Concesionado', 'Caudal Ecologico': 'Caudal Ecologico', 'Tipo de Estructura de Medición': 'Tipo de Estructura de Medición', 'Sitio de Captacion -Longitud': 'Sitio de Captacion -Longitud', 'Sitio de Captacion -Latitud': 'Sitio de Captacion -Latitud', 'Sitio de Captación georreferenciada': 'Sitio de Captación georreferenciada', });
lyr_comunas_3.set('fieldAliases', {'id': 'id', 'Comuna': 'Comuna', });
lyr_captaciones_1.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.set('fieldImages', {'nombre del prestador': 'TextEdit', 'NIT': 'Range', 'DV': 'Range', 'Numero de Acto administrativo': 'TextEdit', 'Código DANE': 'Range', 'Tipo de Fuente Hidrica': 'TextEdit', 'Nombre de la Fuente': 'TextEdit', 'Concesion de Aguas': 'TextEdit', 'Fecha Inicio de Concesion': 'TextEdit', 'Fecha Final de Concesion': 'TextEdit', 'Uso de Abastecimiento': 'TextEdit', 'Caudal Concesionado': 'TextEdit', 'Caudal Ecologico': 'TextEdit', 'Tipo de Estructura de Medición': 'Range', 'Sitio de Captacion -Longitud': 'TextEdit', 'Sitio de Captacion -Latitud': 'TextEdit', 'Sitio de Captación georreferenciada': 'TextEdit', });
lyr_comunas_3.set('fieldImages', {'id': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_captaciones_1.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Perimetro': 'inline label', });
lyr_Puntos_de_captaci_n_de_agua_para_prestadores_de_servicios_2.set('fieldLabels', {'nombre del prestador': 'no label', 'NIT': 'no label', 'DV': 'no label', 'Numero de Acto administrativo': 'no label', 'Código DANE': 'no label', 'Tipo de Fuente Hidrica': 'no label', 'Nombre de la Fuente': 'no label', 'Concesion de Aguas': 'header label', 'Fecha Inicio de Concesion': 'no label', 'Fecha Final de Concesion': 'no label', 'Uso de Abastecimiento': 'no label', 'Caudal Concesionado': 'no label', 'Caudal Ecologico': 'no label', 'Tipo de Estructura de Medición': 'no label', 'Sitio de Captacion -Longitud': 'inline label', 'Sitio de Captacion -Latitud': 'inline label', 'Sitio de Captación georreferenciada': 'no label', });
lyr_comunas_3.set('fieldLabels', {'id': 'no label', 'Comuna': 'no label', });
lyr_comunas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});