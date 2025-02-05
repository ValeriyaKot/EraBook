from django.db import models
from django.core.validators import MaxValueValidator
from datetime import datetime
from django.contrib.auth.models import User


class Profile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    AGE_CHOICES = [
    ('14-17', '14-17'),
    ('18-24', '18-24'),
    ('25-29', '25-29'),
    ('30-34', '30-34'),
    ('35-39', '35-39'),
    ('40-44', '40-44'),
    ('45-49', '45-49'),
    ('>50', '>50'),
]

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)
    age_range = models.CharField(max_length=5, choices=AGE_CHOICES, null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.TextField(max_length=255)
    birthday = models.DateField(validators=[MaxValueValidator(datetime.now().date())], blank=True, null=True)
    phone_number = models.CharField(max_length=20, unique=True)
    country = models.TextField(max_length=255)

    def __str__(self):
        return self.user.username
