# Generated by Django 2.0.4 on 2018-10-24 09:45

from django.db import migrations, models
import django.db.models.deletion
import product.models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0010_product_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productdetails',
            name='product',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='producdetails', to='product.Product'),
        ),
        migrations.AlterField(
            model_name='productuploads',
            name='file',
            field=models.ImageField(blank=True, max_length=255, null=True, upload_to=product.models.custom_filename),
        ),
    ]
