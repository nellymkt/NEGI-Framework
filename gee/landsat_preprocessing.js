var jeddah = ee.Geometry.Rectangle([39.0, 21.2, 39.4, 21.8]);

var image = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2")
  .filterBounds(jeddah)
  .filterDate("2023-01-01", "2023-12-31")
  .median();

var ndvi = image.normalizedDifference(["SR_B5", "SR_B4"])
  .rename("NDVI");

var ndbi = image.normalizedDifference(["SR_B6", "SR_B5"])
  .rename("NDBI");

var lst = image.select("ST_B10")
  .multiply(0.00341802)
  .add(149.0)
  .subtract(273.15)
  .rename("LST");

var stack = ndvi
  .addBands(ndbi)
  .addBands(lst);

Map.centerObject(jeddah, 10);
Map.addLayer(
  ndvi,
  {min: -0.2, max: 0.6},
  "NDVI"
);
Map.addLayer(
  ndbi,
  {min: -0.5, max: 0.5},
  "NDBI"
);
Map.addLayer(
  lst,
  {min: 20, max: 55},
  "LST"
);

var samples = stack.sample({
  region: jeddah,
  scale: 30,
  numPixels: 15000,
  geometries: true
});

Export.table.toDrive({
  collection: samples,
  description: "Jeddah_NDVI_NDBI_LST_dataset",
  fileFormat: "CSV"
});
