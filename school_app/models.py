from pyexpat import model
from unicodedata import name
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
import uuid
import random



class Debtors(models.Model):
    #GENDER_CHOICES = ("Male", "Female", "Other")
    class GENDER_CHOICES(models.TextChoices):
        male = "Male"
        female = "Female"
        others = "Others"
    
    "Temporal solution"
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    "Instead of this"
        #id = models.ForeignKey(primary_key=True, blank=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    #Error was here
    "Temperal solution"
    gender = models.CharField(choices=GENDER_CHOICES.choices, max_length=10, null=False)
    "Instead of this" 
        #choices=GENDER_CHOICES.choices, max_length=10, null=False)
    amount_owed = models.IntegerField(default=0)
    amount_cleared = models.IntegerField(default=0)

    class Meta:
        ordering = ['name']

 
from django.contrib.auth.models import AbstractUser


class School(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    username = models.EmailField(unique=True, null=True)
    bio = models.TextField(null=True)

    avatar = models.ImageField(null=True, default="")
    otp = models.CharField(max_length=6, blank=True)

    USERNAME_FIELD = 'username'
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


class School_kyc(models.Model):
    # name = models.ForeignKey(School, on_delete=models.SET_NULL, null=False)
    school_Id = models.FileField(upload_to='documents/')
    cac_file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Debtor_list(models.Model):
    host = models.ForeignKey(School, on_delete=models.SET_NULL, null=True)
    
    name = models.TextField()
    description = models.TextField(null=True, blank=True)
    participants = models.ManyToManyField(
        School, related_name='participants', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True) #debtor_list

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

