from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView
from .models import School, School_Post, Debtor_list, Comment

# Create your views here.

def contend(request):
    return render(request, "contend_debt.html")


def contact(request):
    return render(request, "contact_us.html")

