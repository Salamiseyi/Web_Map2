var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Netztechnik_2 = new ol.format.GeoJSON();
var features_Netztechnik_2 = format_Netztechnik_2.readFeatures(json_Netztechnik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Netztechnik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netztechnik_2.addFeatures(features_Netztechnik_2);
var lyr_Netztechnik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Netztechnik_2, 
                style: style_Netztechnik_2,
                popuplayertitle: 'Netztechnik',
                interactive: true,
                title: 'Netztechnik'
            });
var format_Vertiel_3 = new ol.format.GeoJSON();
var features_Vertiel_3 = format_Vertiel_3.readFeatures(json_Vertiel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vertiel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertiel_3.addFeatures(features_Vertiel_3);
var lyr_Vertiel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vertiel_3, 
                style: style_Vertiel_3,
                popuplayertitle: 'Vertiel',
                interactive: true,
                title: 'Vertiel'
            });
var format_Mikro_4 = new ol.format.GeoJSON();
var features_Mikro_4 = format_Mikro_4.readFeatures(json_Mikro_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mikro_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mikro_4.addFeatures(features_Mikro_4);
var lyr_Mikro_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mikro_4, 
                style: style_Mikro_4,
                popuplayertitle: 'Mikro',
                interactive: true,
                title: '<img src="styles/legend/Mikro_4.png" /> Mikro'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Netztechnik_2.setVisible(true);lyr_Vertiel_3.setVisible(true);lyr_Mikro_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Netztechnik_2,lyr_Vertiel_3,lyr_Mikro_4];
lyr_Netztechnik_2.set('fieldAliases', {'uuid': 'uuid', 'np_id': 'np_id', 'np_projekt': 'np_projekt', 'np_art': 'np_art', 'np_bezeich': 'np_bezeich', 'np_anz': 'np_anz', 'np_res_anz': 'np_res_anz', 'np_zustand': 'np_zustand', 'XY': 'XY', 'Typ': 'Typ', });
lyr_Vertiel_3.set('fieldAliases', {'uuid': 'uuid', 'id': 'id', 'b_cluster': 'b_cluster', 'b_typ': 'b_typ', 'b_farbe': 'b_farbe', 'b_lang': 'b_lang', 'b_besch': 'b_besch', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'endkunden_connet': 'endkunden_connet', 'xy_s': 'xy_s', 'xy_end': 'xy_end', 'xy_line': 'xy_line', 'rohr_connect': 'rohr_connect', 'rohr_typ': 'rohr_typ', 'end_xy': 'end_xy', 'line_vertex': 'line_vertex', 'end_koord': 'end_koord', 'connection1': 'connection1', 'connection2': 'connection2', 'connect3': 'connect3', 'connect4': 'connect4', 'connect5': 'connect5', 'start_end': 'start_end', 'start_koord': 'start_koord', 'LineStart': 'LineStart', });
lyr_Mikro_4.set('fieldAliases', {'uuid': 'uuid', 'crm-nr.': 'crm-nr.', 'ort': 'ort', 'straße': 'straße', 'name': 'name', 'breitengra': 'breitengra', 'längengra': 'längengra', 'gebäudety': 'gebäudety', 'anzahl hau': 'anzahl hau', 'anzahl fir': 'anzahl fir', 'anzahl ne': 'anzahl ne', 'HAU_faktor': 'HAU_faktor', 'FIR_faktor': 'FIR_faktor', 'fasern ben': 'fasern ben', 'Status': 'Status', 'HAU_R': 'HAU_R', 'FIR_R': 'FIR_R', 'HAU_Rohr': 'HAU_Rohr', 'FIR_Rohr': 'FIR_Rohr', 'Mikrorohr': 'Mikrorohr', 'xy_s': 'xy_s', });
lyr_Netztechnik_2.set('fieldImages', {'uuid': 'UuidGenerator', 'np_id': 'UniqueValues', 'np_projekt': 'TextEdit', 'np_art': 'ValueMap', 'np_bezeich': 'TextEdit', 'np_anz': 'TextEdit', 'np_res_anz': 'TextEdit', 'np_zustand': 'ValueMap', 'XY': 'TextEdit', 'Typ': '', });
lyr_Vertiel_3.set('fieldImages', {'uuid': 'UuidGenerator', 'id': 'UniqueValues', 'b_cluster': 'ValueMap', 'b_typ': 'ValueMap', 'b_farbe': 'ValueMap', 'b_lang': 'TextEdit', 'b_besch': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'endkunden_connet': 'TextEdit', 'xy_s': 'TextEdit', 'xy_end': 'TextEdit', 'xy_line': 'TextEdit', 'rohr_connect': 'TextEdit', 'rohr_typ': 'ValueMap', 'end_xy': 'TextEdit', 'line_vertex': 'TextEdit', 'end_koord': 'TextEdit', 'connection1': 'TextEdit', 'connection2': 'TextEdit', 'connect3': 'TextEdit', 'connect4': 'TextEdit', 'connect5': 'TextEdit', 'start_end': 'TextEdit', 'start_koord': 'TextEdit', 'LineStart': '', });
lyr_Mikro_4.set('fieldImages', {'uuid': 'Range', 'crm-nr.': 'TextEdit', 'ort': 'TextEdit', 'straße': 'TextEdit', 'name': 'TextEdit', 'breitengra': 'TextEdit', 'längengra': 'TextEdit', 'gebäudety': 'TextEdit', 'anzahl hau': 'TextEdit', 'anzahl fir': 'TextEdit', 'anzahl ne': 'TextEdit', 'HAU_faktor': 'TextEdit', 'FIR_faktor': 'TextEdit', 'fasern ben': 'TextEdit', 'Status': 'Range', 'HAU_R': 'Range', 'FIR_R': 'Range', 'HAU_Rohr': 'Range', 'FIR_Rohr': 'Range', 'Mikrorohr': 'Range', 'xy_s': 'TextEdit', });
lyr_Netztechnik_2.set('fieldLabels', {'uuid': 'hidden field', 'np_id': 'inline label - visible with data', 'np_projekt': 'inline label - visible with data', 'np_art': 'inline label - visible with data', 'np_bezeich': 'inline label - visible with data', 'np_anz': 'hidden field', 'np_res_anz': 'hidden field', 'np_zustand': 'inline label - visible with data', 'XY': 'inline label - visible with data', 'Typ': 'inline label - visible with data', });
lyr_Vertiel_3.set('fieldLabels', {'uuid': 'hidden field', 'id': 'inline label - visible with data', 'b_cluster': 'inline label - visible with data', 'b_typ': 'inline label - visible with data', 'b_farbe': 'inline label - visible with data', 'b_lang': 'inline label - visible with data', 'b_besch': 'hidden field', 'auxiliary_': 'hidden field', 'auxiliar_1': 'hidden field', 'auxiliar_2': 'hidden field', 'endkunden_connet': 'hidden field', 'xy_s': 'hidden field', 'xy_end': 'hidden field', 'xy_line': 'hidden field', 'rohr_connect': 'hidden field', 'rohr_typ': 'hidden field', 'end_xy': 'hidden field', 'line_vertex': 'hidden field', 'end_koord': 'hidden field', 'connection1': 'hidden field', 'connection2': 'hidden field', 'connect3': 'hidden field', 'connect4': 'hidden field', 'connect5': 'hidden field', 'start_end': 'hidden field', 'start_koord': 'hidden field', 'LineStart': 'hidden field', });
lyr_Mikro_4.set('fieldLabels', {'uuid': 'hidden field', 'crm-nr.': 'inline label - visible with data', 'ort': 'hidden field', 'straße': 'hidden field', 'name': 'inline label - visible with data', 'breitengra': 'inline label - visible with data', 'längengra': 'inline label - visible with data', 'gebäudety': 'inline label - visible with data', 'anzahl hau': 'inline label - visible with data', 'anzahl fir': 'inline label - visible with data', 'anzahl ne': 'inline label - visible with data', 'HAU_faktor': 'inline label - visible with data', 'FIR_faktor': 'inline label - visible with data', 'fasern ben': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'HAU_R': 'inline label - visible with data', 'FIR_R': 'inline label - visible with data', 'HAU_Rohr': 'inline label - visible with data', 'FIR_Rohr': 'inline label - visible with data', 'Mikrorohr': 'inline label - visible with data', 'xy_s': 'hidden field', });
lyr_Mikro_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});