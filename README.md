# A Machine Learning Framework for Evaluating the Net Energy Implications of Urban Greening in Desalination-Dependent Cities

This repository contains the Python implementation of a data-driven framework for evaluating the energy trade-offs associated with urban greening in arid, desalination-dependent cities.

Using Jeddah, Saudi Arabia as a case study, the framework integrates Landsat 8 satellite observations, machine learning-based land surface temperature prediction, and a scenario-based energy assessment model to evaluate the balance between vegetation-induced cooling benefits and desalination-related irrigation energy requirements.

Core Features
- Google Earth Engine preprocessing of Landsat 8 imagery
- Extraction of NDVI, NDBI, and Land Surface Temperature (LST)
- XGBoost-based prediction of urban thermal conditions
- Fractional Vegetation Cover (FVC) scenario analysis
- Estimation of desalination-related energy indicators using SWRO energy intensity values
- Computation of a Net Energy Gain Index (NEGI) for comparing alternative greening scenarios
- Identification of vegetation thresholds associated with maximum NEGI performance

Methodological Workflow
1. Acquire and preprocess Landsat 8 imagery using Google Earth Engine.
2. Derive NDVI, NDBI, and LST datasets.
3. Train an XGBoost regression model to predict LST from NDVI and NDBI.
4. Simulate urban greening scenarios using increasing Fractional Vegetation Cover (FVC).
5. Estimate cooling-energy benefit indicators from predicted temperature reductions.
6. Estimate desalination-related energy indicators using literature-based SWRO energy coefficients.
7. Calculate the Net Energy Gain Index (NEGI) and identify optimal greening thresholds.

Repository Structure

```
├── data/
├── plots/
├── src/
├── main.py
├── requirements.txt
└── README.md
```
