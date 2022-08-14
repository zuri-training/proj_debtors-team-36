
import re
# from django.http import HttpResponse
import random
from django.core.mail import send_mail
from django.shortcuts import redirect, render
from django.contrib.auth.forms import AuthenticationForm
from .forms import OTPForm
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
    return render(request, 'contact-us.html')

# generating random 6 digits otp code
def generateOTP() :
    otp = ""
    for i in range(6):
        otp += str(random.randint(1, 9))
    return otp

def signup_view(request):
    # if request.user.is_authentecated:
    #     return redirect('home')
    if request.method == 'POST':
        form = School_RegForm(request.POST)
        if form.is_valid():

            # making user inactive till verification is complete
            user = form.save(commit=False)
            user.is_active = False

            # SENDING OTP TO USER THROUGH E-MAIL
            user.otp = generateOTP() # storing otp in otp field
            otp = user.otp
            subject = f"{user.username} OTP VERIFICATION FOR MyDebtors"
            message = f"{otp}"
            send_mail(subject, message, 'mydebtors.zuri@gmail.com', [user.email])
            user.save()
            request.session['user_email'] = user.email


            # email = form.cleaned_data.get('email')
            # password = form.cleaned_data.get('password1')
            # user = authenticate(email=email, password=password)
            # login(request, user)
            return render(request, 'verify1.html', {'user': user})
        else:
            form = School_RegForm(request.POST)
            return render(request, 'signup.html', {'form': form})
    else:
        form = School_RegForm(request.POST)
    return render(request, 'signup.html', {'form': form})

# VERIFICATION VIEWS

def verify_otp(request):
    if request.method == 'POST':
        user_email = request.session['user_email']
        user = School.objects.get(email__exact=user_email)
        otp_form = OTPForm(request.POST)
        if otp_form.is_valid():
            cd = otp_form.cleaned_data
            otp = cd['otp_1'] + cd['otp_2'] + cd['otp_3'] + cd['otp_4'] + cd['otp_5'] + cd['otp_6']

            if otp == user.otp:
                user.is_active = True
                user.save()
                return render(request, 'school_app/verification-sucess.html', {})
            return render(request, 'school_app/verification-fail.html', {})
    else:
        otp_form = OTPForm()
        user_email = request.session['user_email']
        user = School.objects.get(email__exact=user_email)

    context = {
        'otp_form': otp_form,
        'user': user,
        }
    return render(request, 'school_app/verify2.html', context)


def resend_otp(request):
    user_email = request.session['user_email']
    user = School.objects.get(email__exact=user_email)

    # SENDING OTP TO USER THROUGH E-MAIL    
    user.otp = generateOTP()
    otp = user.otp
    subject = f"{user.username} OTP VERIFICATION FOR MyDebtors"
    message = f"{otp}"
    send_mail(subject, message, 'mydebtors.zuri@gmail.com', [user.email])
    user.save()

    return redirect('school_app:verify_otp')


def verification_success(request):
    return render(request, 'school_app/verification-sucess.html', {})

def verification_fail(request):
    return render(request, 'school_app/verification-fail.html', {})

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


def about_us(request):
    return render(request, 'about-us.html')

def faq(request):
    return render(request, 'faq.html')
