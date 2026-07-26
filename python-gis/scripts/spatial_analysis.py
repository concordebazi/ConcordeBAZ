"""
Python GIS Spatial Analysis Example

Author:
Concorde Bazimaziki

Purpose:
Demonstration of automated GIS workflow
"""


import geopandas as gpd
import matplotlib.pyplot as plt



# Load geographic dataset

data = gpd.read_file(
    "sample_data.shp"
)



# Check coordinate system

print(data.crs)



# Calculate area

data["area_km2"] = (
    data.geometry.area / 1000000
)



# Display results

print(data.head())



# Create map

data.plot(
    figsize=(10,8)
)


plt.title(
    "Python GIS Spatial Analysis"
)


plt.show()
