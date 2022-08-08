from django.urls import reverse_lazy
from .forms import SchoolRegistrationForm
from django.views.generic import CreateView


class SchoolRegistrationView(CreateView):
    form_class = SchoolRegistrationForm
    success_url = reverse_lazy('')
    template_name = 'account/signup.html'