# from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from django.views.generic.edit import CreateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from .forms import School_RegForm, RoomForm, UserForm
from .models import Debtors, School, Debtor_list, School_Post


def index(request):
    return render(request, 'index.html')


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


# Create your views here.

def debtor_email(request):
    """_summary_
        This is for testing purposes only.
        The school name will be called by User login details
        while the student email will be gotten from the enter-debtors view
        if the page will come as a popup. else, they will be fetched from the models
    """
    page_contents = {
        "school_name": "Chrisland school",
        "student_email": "alexjoe2018@gmail.com",
        "student_name": "Alex Sonia",
        "contend_link": "Contend this post",
        "duration_owned": "two",
        "sponsor_name": "Mr Alex Joe",
    }
    return render(request, 'debtor-email.html', {"page_contents": page_contents})

# Temporal views for Testing stays here---
def about_us(request):
    return render(request, 'about-us.html')

def faq(request):
    return render(request, 'faq.html')

def terms(request):
    return render(request, 'T&C.html')

def accessibility(request):
    return render(request, 'accessibility-statement.html')

def policy(request):
    return render(request, 'privacy-policy.html')

def help_suppport(request):
    return render(request, 'help-and-support.html')

def contact_view(request):
    """ 
    Needs get request to get user form and store
    in the database
    """
    # if request.method == "post":
        # name = request.POST['name']
        # email = request.POST['email']
        # phone = request.POST['phoneNo']
        # subject = request.POST['subject']
        # message = request.POST['message']
        # post_to_db(name, email, phone, subject, message) 

    return render(request, 'contact-us.html')

    
