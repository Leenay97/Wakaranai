# Generated by Django 3.2.6 on 2021-08-28 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wakaranai', '0005_auto_20210808_1628'),
    ]

    operations = [
        migrations.AddField(
            model_name='kanji',
            name='meaning',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='reading_example_first',
            field=models.TextField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='reading_example_second',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='transcription',
            field=models.TextField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='words_example',
            field=models.TextField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='kanji',
            name='words_translated_example',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]
