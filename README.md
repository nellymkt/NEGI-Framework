# Evaluating Urban Greening Energy Trade-Offs Using the Net Energy Gain Index (NEGI)

This repository contains the Python implementation accompanying the manuscript:

> **Evaluating Urban Greening Energy Trade-Offs in Desalination-Dependent Cities Using Machine Learning and the Net Energy Gain Index (NEGI)**

The framework evaluates the net energy implications of urban greening by integrating satellite remote sensing, machine learning, and desalination-related energy assessment. Using **Jeddah, Saudi Arabia**, as a case study, the methodology combines Landsat 8 observations, XGBoost regression, and scenario analysis to identify vegetation levels that maximize relative net energy performance.

---

## Features

* Landsat 8 preprocessing using Google Earth Engine
* Extraction of NDVI, NDBI, and Land Surface Temperature (LST)
* XGBoost regression for urban thermal prediction
* Fractional Vegetation Cover (FVC) scenario simulation
* Desalination-related energy assessment using SWRO energy intensity
* Net Energy Gain Index (NEGI) computation
* Sensitivity analysis of model parameters
* Automatic generation of publication-ready figures and tables

---

## Methodological Workflow

1. Acquire Landsat 8 imagery using Google Earth Engine.
2. Derive NDVI, NDBI, and Land Surface Temperature (LST).
3. Train an XGBoost regression model using NDVI and NDBI.
4. Simulate urban greening scenarios using Fractional Vegetation Cover (FVC).
5. Estimate relative cooling-energy benefits.
6. Estimate desalination-related irrigation energy requirements.
7. Compute the Net Energy Gain Index (NEGI).
8. Identify the vegetation threshold that maximizes relative net energy performance.

---

## Repository Structure

```
.
├── data/                  # Processed datasets
├── plots/                 # Generated figures
├── src/                   # Source code
├── main.py                # Main workflow
├── requirements.txt       # Python dependencies
└── README.md
```

---

## Requirements

Python 3.10 or later

Required packages are listed in:

```
requirements.txt
```

Install all dependencies using:

```bash
pip install -r requirements.txt
```

---

## Running the Code

Execute the complete workflow with:

```bash
python main.py
```

The script performs:

* Data loading
* Machine learning model training
* Model evaluation
* Scenario simulation
* NEGI calculation
* Sensitivity analysis
* Figure generation

---

## Data

Satellite observations were derived from **Landsat 8** imagery processed using **Google Earth Engine**.

The processed dataset contains approximately **15,000 observations**, including:

* NDVI
* NDBI
* Land Surface Temperature (LST)

---

## Reproducibility

This repository contains the code used to generate the analyses, figures, and tables presented in the accompanying manuscript. The workflow is fully reproducible using the processed dataset included in the repository.

---

## Citation

If you use this repository, please cite the accompanying publication once available.

---

## License

This repository is released under the MIT License.
