# Generated by Django 4.1.4 on 2023-08-23 11:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0005_remove_book_book_image_style'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='book_concise_words',
            new_name='book_concise_swords',
        ),
    ]
