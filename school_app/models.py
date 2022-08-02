from unicodedata import name
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone


class Debtors(models.Model):
    GENDER_CHOICES = ("Male", "Female", "Other")
    id = models.ForeignKey(primary_key=True, blank=False)
    name = models.CharField(max_length=50)
    gender = models.CharField(choices=GENDER_CHOICES.choices, max_length=10, null=False)
    amount_owed = models.IntegerField(default=0)
    amount_cleared = models.IntegerField(default=0)

    class Meta:
        ordering = ['name']

        

 