from django import forms
from .models import Writer
from .models import Book
class WriterForm(forms.ModelForm):
    class Meta:
        model = Writer
        fields = [
            'writer_name',
            'writer_category',
            'writer_image',
            'writer_image_style',
            'writer_bio'
        ]

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = [
            'writer_name',
            'book_name',
            'book_context',
            'book_concise_swords',
            'book_kind'
        ]