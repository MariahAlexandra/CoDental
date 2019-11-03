from __future__ import absolute_import, division, print_function, unicode_literals

import tensorflow as tf

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, Flatten, Dropout, MaxPooling2D
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing.image import load_img

import os
import numpy as np
import matplotlib.pyplot as plt

img = load_img('/Users/tiff/GitHub/CoDental/Backend/dog.12314.jpg', target_size=(20,20))
# test_img = img.reshape((1,784))
img_class = model_new.predict_classes(img)
prediction = img_class[0]
classname = img_class[0]
print("Class: ","dog" if classname == 1 else "cat")