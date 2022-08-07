from django import forms
from django.contrib.auth.forms import UserCreationForm
from school_app.models import School


class SchoolRegistrationForm(UserCreationForm):

    class Meta:
        model = School
        fields = ['username', 'email',]
        labels = {
            'username': 'Name of School',
            'email': 'School Email Address',
        }
