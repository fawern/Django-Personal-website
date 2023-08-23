from django.db import models
from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.


class Writer(models.Model):
    categories = (
        ('Fantastik-Bilim Kurgu','fantasy'),  
        ('Dedektif-Polisiye', 'dedective'),
        ('Psikolojik-Duygusal', 'emotional'),
        ('Romantik-Aşk', 'romantic'),
        ('Kişisel Gelişim', 'self'),
        ('Korku-Gerilim', 'thriller')
    )
    writer_name = models.CharField(max_length=20, verbose_name="Writer Name")
    writer_category = models.CharField(max_length=50,choices=categories, verbose_name="Writer Category")
    writer_image = models.ImageField(
        upload_to="static/images/writers/", verbose_name="Writer's Image"
    )
    writer_image_style = models.TextField(
        default="center",
        verbose_name="Style of Write's Image",
    )
    writer_bio = models.TextField(verbose_name="Writer's Bio")

    def __str__(self):
        return self.writer_name

class Book(models.Model):
    
    writer_name = models.ForeignKey(Writer, on_delete=models.CASCADE)
    book_name = models.CharField(max_length=20, verbose_name="Book Name")
    # book_image = models.ImageField(
    #     upload_to="static/images/books/", verbose_name="Book Image"
    # )
    # book_image_style = models.TextField(
    #     default="center", verbose_name="Book Image Style"
    # )
    book_context = RichTextField(verbose_name="Book Context")
    book_concise_swords = RichTextField(verbose_name="Book Concise Words")
    book_kind = models.CharField(max_length=30, verbose_name='Book Kind')
    
    def __str__(self):
        return self.book_name
