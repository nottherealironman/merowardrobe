# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-06-02 18:14
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20180531_2131'),
    ]

    operations = [
        migrations.CreateModel(
            name='BillingDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=10)),
                ('district', models.CharField(max_length=10)),
                ('city', models.CharField(max_length=20)),
                ('ward_no', models.IntegerField()),
                ('house_no', models.IntegerField()),
                ('landmark', models.CharField(blank=True, max_length=30)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
