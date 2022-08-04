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

        

 
from django.contrib.auth.models import AbstractUser


class School(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    bio = models.TextField(null=True)

    avatar = models.ImageField(null=True, default="")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class School_Post(models.Model):
    name = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name

# class School_Post(models.Moodel):
#     image = models.ImageField(upload_to = '')
#     title = models.CharField(max_length=200)
#     body = models.TextField()
#     slug = models.SlugField()
#     writer = models.ForeignKey()
#     created_on = models.DateTimeField(auto_now= True)
#     def __str__(self):
#         return self.title


class Debtor_list(models.Model):
    host = models.ForeignKey(School, on_delete=models.SET_NULL, null=True)
    
    name = models.TextField()
    description = models.TextField(null=True, blank=True)
    participants = models.ManyToManyField(
        School, related_name='debtor_list', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name

class Comment(models.Model):
    user = models.ForeignKey(School, on_delete=models.CASCADE)
    room = models.ForeignKey(School_Post, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:30]

