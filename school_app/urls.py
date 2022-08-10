"""Modified views 
    for the school app project
"""
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name='homepage'),
    path("dmail", views.debtor_email, name = 'debtor-email'),
]