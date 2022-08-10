"""Modified views 
    for the school app project
"""
from django.urls import path
from . import views

app_name = "school_app"


urlpatterns = [
    path("", views.home, name='homepage'),
    path("dmail/", views.debtor_email, name = 'debtor-email'),
    path("kyc-auth/", views.kyc_auth, name='kyc-auth'),
]