# Generated by Django 2.0.4 on 2018-06-05 17:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_auto_20180605_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productuploads',
            name='product',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='product.Product'),
        ),
    ]
