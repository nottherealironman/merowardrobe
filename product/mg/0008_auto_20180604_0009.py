# Generated by Django 2.0.4 on 2018-06-03 18:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_remove_productuploads_created_on'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='productuploads',
            options={'verbose_name': 'photo', 'verbose_name_plural': 'photos'},
        ),
    ]
