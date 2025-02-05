# Generated by Django 5.1.5 on 2025-02-05 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_profile_gender_alter_profile_birthday'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='age_range',
            field=models.CharField(blank=True, choices=[('14-17', '14-17'), ('18-24', '18-24'), ('25-29', '25-29'), ('30-34', '30-34'), ('35-39', '35-39'), ('40-44', '40-44'), ('45-49', '45-49'), ('>50', '>50')], max_length=5, null=True),
        ),
    ]
