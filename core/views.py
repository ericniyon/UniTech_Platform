from django.shortcuts import render


def home(request):
    template_name = 'pages/home.html'
    return render(request, template_name)

def aboutUs(request):
    template_name = 'pages/about-us.html'
    return render(request, template_name)

def blog(request):
    template_name = 'pages/blog.html'
    return render(request, template_name)

def blogDetail(request):
    template_name = 'pages/blog-detail.html'
    return render(request, template_name)

def services(request):
    template_name = 'pages/services.html'
    return render(request, template_name) 
