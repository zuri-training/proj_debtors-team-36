from django.urls import path, include
from .import views

app_name = 'account'

urlpatterns = [
    path('', include('django.contrib.auth.urls')),  # django authentication views
    path('signup/', views.SchoolRegistrationView.as_view(), name='signup')
]