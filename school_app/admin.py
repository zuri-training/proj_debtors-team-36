from django.contrib import admin

# Register your models here.
from .models import Debtors

admin.site.register(Debtors)
from .models import Debtor_list, School, School_Post, Comment, School_kyc

admin.site.register(School)
admin.site.register(Debtor_list)
admin.site.register(School_Post)
admin.site.register(Comment)
admin.site.register(School_kyc)
