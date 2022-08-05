from django.urls import path
from . import views

app_name = "project_app"

urlpatterns = [
    path("contend/", views.contend, name="contend_debt"),
    path("contact/", views.contend, name="contend_us"),
]