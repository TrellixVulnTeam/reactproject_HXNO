# Generated by Django 2.2.7 on 2019-11-27 21:02

import articles.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20191116_0106'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='image',
            field=models.ImageField(blank=True, upload_to=articles.models.user_directory_path),
        ),
    ]
