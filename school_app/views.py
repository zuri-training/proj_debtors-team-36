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
