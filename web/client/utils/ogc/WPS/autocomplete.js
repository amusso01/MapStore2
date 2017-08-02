// const wfsRequestBuilder = require('../WFS/RequestBuilder');
// const {getFeature, property, query} = wfsRequestBuilder({wfsVersion: "1.1.0"});

module.exports = {
    getRequestBody: ({layerName, attribute, maxFeatures, startIndex}) => {

        let requestBody =
          '<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd"> '
        + ' <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier> '
        + ' <wps:DataInputs> '
        + '   <wps:Input> '
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier> '
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title> '
        + '     <wps:Data /> '
        + '     <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST"> '
        + '       <wps:Body>'
        + '         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">'
        + '           <wfs:Query typeName="' + layerName + '">'
        + '             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">'
        + '               <ogc:SortProperty>'
        + '                 <ogc:PropertyName>' + attribute + '</ogc:PropertyName>'
        + '               </ogc:SortProperty>'
        + '             </ogc:SortBy>'
        + '           </wfs:Query>'
        + '         </wfs:GetFeature>'
        + '       </wps:Body>'
        + '     </wps:Reference>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + attribute + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + maxFeatures + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + startIndex + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + ' </wps:DataInputs>'
        + ' <wps:ResponseForm>'
        + '   <wps:RawDataOutput mimeType="application/json">'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>'
        + '   </wps:RawDataOutput>'
        + ' </wps:ResponseForm>'
        + '</wps:Execute>';
        return requestBody;
    },
    getRequestBodyWithFilter: ({layerName, attribute, maxFeatures, startIndex, value}) => {
        let requestBody =
          '<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd"> '
        + ' <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier> '
        + ' <wps:DataInputs> '
        + '   <wps:Input> '
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier> '
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title> '
        + '     <wps:Data /> '
        + '     <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST"> '
        + '       <wps:Body>'
        + '         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">'
        + '           <wfs:Query typeName="' + layerName + '">'
        + '             <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">'
        + '               <ogc:PropertyIsLike matchCase="false" wildCard="*" singleChar="." escapeChar="!">'
        + '                 <ogc:PropertyName>' + attribute + '</ogc:PropertyName>'
        + '                 <ogc:Literal>*' + value + '*</ogc:Literal>'
        + '               </ogc:PropertyIsLike>'
        + '             </ogc:Filter>'
        + '             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">'
        + '               <ogc:SortProperty>'
        + '                 <ogc:PropertyName>' + attribute + '</ogc:PropertyName>'
        + '               </ogc:SortProperty>'
        + '             </ogc:SortBy>'
        + '           </wfs:Query>'
        + '         </wfs:GetFeature>'
        + '       </wps:Body>'
        + '     </wps:Reference>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + attribute + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + maxFeatures + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + '   <wps:Input>'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>'
        + '     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>'
        + '     <wps:Data>'
        + '       <wps:LiteralData>' + startIndex + '</wps:LiteralData>'
        + '     </wps:Data>'
        + '   </wps:Input>'
        + ' </wps:DataInputs>'
        + ' <wps:ResponseForm>'
        + '   <wps:RawDataOutput mimeType="application/json">'
        + '     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>'
        + '   </wps:RawDataOutput>'
        + ' </wps:ResponseForm>'
        + '</wps:Execute>';
        return requestBody;
    }
};