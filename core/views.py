from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout


def loginOrg(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # log the user in
            user = form.get_user()
            login(request, user)
            return redirect('dashboard')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form':form})

def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('login')

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

def dashboard(request):
    
    context = {}
    return render(request, 'dashboard.html',context)
