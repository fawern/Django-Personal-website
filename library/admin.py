from django.contrib import admin
from .models import Writer
from .models import Book

# Register your models here.

@admin.register(Writer)
class WriterAdmin(admin.ModelAdmin):

    prepopulated_fields = {"slug_writer_name" : ('writer_name',)}
    list_display = ["writer_name", "writer_category"]
    list_display_links = ["writer_name"]
    list_filter = ["writer_name"]
    search_fields = ["writer_name"]
    list_editable = ['writer_category']
     
    class Meta:
        model = Writer 


class BookAdmin(admin.ModelAdmin):
    list_display = ["writer_name", "book_name"]
    list_display_links = ["writer_name", "book_name"]
    list_filter = ["writer_name", "book_name"]
    search_fields = ["writer_name", "book_name"]

    class Meta:
        model = Book
    
admin.site.register(Book, BookAdmin)
