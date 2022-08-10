from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from .models import School, Debtor_list


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
