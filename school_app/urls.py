"""Modified views 
    for the school app project
"""
from django.urls import path
from . import views

app_name = "school_app"


urlpatterns = [
    path("dmail", views.debtor_email, name = 'debtor-email'),
    path("kyc", views.kyc_auth, name= 'kyc-auth'),
    path('home', views.index, name='home'),
    path('contact-us', views.contact_view, name='contact'),
    path('signup', views.signup_view, name='signup'),
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout_page'),
    path('debtors', views.current_debtors, name='current_debtors'),
    path('debtor_email', views.debtor_email, name='debtor-email'),
    path('about', views.about_us, name='about'),
    path('faq', views.faq, name='faq')
]