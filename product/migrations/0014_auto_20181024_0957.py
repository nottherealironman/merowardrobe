# Generated by Django 2.0.4 on 2018-10-24 09:57

from django.db import migrations, models
import product.models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0013_auto_20181024_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productuploads',
            name='file',
            field=models.ImageField(null=True, upload_to=product.models.custom_filename),
        ),
    ]
