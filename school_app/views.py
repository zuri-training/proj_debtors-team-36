
#from django.http import HttpResponse
import re
from django.shortcuts import redirect, render
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from .forms import School_RegForm, RoomForm, UserForm, KycForm
from .models import Debtors, School, Debtor_list, School_Post




def index(request):
    return render(request, 'index.html')


def contact_view(request):
    return render(request, 'contact-us.html', {})

def signup_view(request):
    # if request.user.is_authentecated:
    #     return redirect('home')
    if request.method == 'POST':
        form = School_RegForm(request.POST)
        if form.is_valid():
            user = form.save()
            # email = form.cleaned_data.get('email')
            # password = form.cleaned_data.get('password1')
            # user = authenticate(email=email, password=password)
            login(request, user)
            return redirect('dashboard')
        else:
            form = School_RegForm(request.POST)
            return render(request, 'signup.html', {'form': form})
    else:
        form = School_RegForm(request.POST)
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    # if request.user.is_authentecated:
    # return redirect('dashboard')
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('dashboard')
        else:
            form = AuthenticationForm()
            return render(request, 'login.html', {'form': form})
    else:
        form = AuthenticationForm()
        return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('signin')

def current_debtors(request):
    debtors = Debtors.objects.all().order_by('name')
    return render(request, 'current-debtors.html', {'debtors': debtors})

def kyc_auth(request):
    if request.method == 'POST':
        form = KycForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = KycForm()
    return render(request, 'kyc-auth.html')




from django.shortcuts import render
from . import models


# Create your views here.

def home(request):
    return render(request, 'index.html')

def enter_debtors(request):
    pass

def debtor_email(request):
    """_summary_
        This is for testing purposes only.
        The school name will be called by User login details
        while the student email will be gotten from the enter-debtors view
        if the page will come as a popup. else, they will be fetched from the models
    """
    page_contents = {
    "school_name" : "Chrisland school",
    "student_email" : "alexjoe2018@gmail.com",
    "student_name" : "Alex Sonia",
    "contend_link" : "Contend this post",
    "duration_owned" : "two",
    "sponsor_name": "Mr Alex Joe",
    }
    return render(request, 'debtor-email.html', {"page_contents":page_contents})

