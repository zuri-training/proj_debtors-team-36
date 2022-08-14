from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from .models import School, Debtor_list, School_kyc


class School_RegForm(UserCreationForm):
    class Meta:
        model = School
        fields = ['name', 'username', 'email', 'password1', 'password2']


class RoomForm(ModelForm):
    class Meta:
        model = Debtor_list
        fields = '__all__'
        exclude = ['host', 'participants']


class UserForm(ModelForm):
    class Meta:
        model = School
        fields = ['avatar', 'name', 'username', 'email', 'bio']



class KycForm(ModelForm):
    class Meta:
        model = School_kyc
        fields = ( 'school_Id', 'cac_file' )


class OTPForm(forms.Form):
    otp_1 = forms.CharField(max_length=1, label='')
    otp_2 = forms.CharField(max_length=1, label='')
    otp_3 = forms.CharField(max_length=1, label='')
    otp_4 = forms.CharField(max_length=1, label='')
    otp_5 = forms.CharField(max_length=1, label='')
    otp_6 = forms.CharField(max_length=1, label='')
