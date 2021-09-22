from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('about-us', aboutUs, name='about-us'),
    path('blog-grid', blog, name='blog-grid'),
    path('blog-detail', blogDetail, name='blog-detail'),
    
]
