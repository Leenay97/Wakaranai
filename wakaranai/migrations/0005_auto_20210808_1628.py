# Generated by Django 3.2.6 on 2021-08-08 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wakaranai', '0004_alter_lesson_lesson_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kanji',
            name='added',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='transcription',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='added',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
