from django.contrib import admin
from django.urls import path
from .views import *
from . import views
urlpatterns = [
    path('', home, name='home'),
    path('login', loginOrg, name='login'),
    path('logout', logout_view, name='logout'),
    path('dashboard', dashboard, name='dashboard'),
    path('about-us', aboutUs, name='about-us'),
    path('blog-grid', views.PostList.as_view(), name='blog-grid'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='blog-detail'),
    path('services', services, name='services'),
]
