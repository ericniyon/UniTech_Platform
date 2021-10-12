from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('login', loginOrg, name='login'),
    path('logout', logout_view, name='logout'),
    path('dashboard', dashboard, name='dashboard'),
    path('about-us', aboutUs, name='about-us'),
    path('blog-grid', blog, name='blog-grid'),
    path('blog-detail', blogDetail, name='blog-detail'),
    path('services', services, name='services'),
]
