# Generated by Django 3.2.6 on 2021-08-08 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wakaranai', '0003_auto_20210808_1619'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson',
            name='lesson_number',
            field=models.PositiveIntegerField(),
        ),
    ]
