from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import HttpResponse

from .models import Writer
from .models import Book

from bs4 import BeautifulSoup
import html
# Create your views here.


def home(request):

    return render(request, 'home.html')

def writer(request):
    writers = Writer.objects.all()
    writer_context = {'writer' : writers}
    return render(request, 'writer.html', context=writer_context)

def fantasy_books(request):
    return render(request, 'fantasywriters.html',context= {'writer' : Writer.objects.all()})

def dedective_books(request):
    return render(request, 'dedectivewriters.html',context= {'writer' : Writer.objects.all()})

def self_improvement(request):
    
    return render(request, 'selfdevwriters.html', context= {'writer' : Writer.objects.all()})
    
def romantic(request):
    return render(request, 'romanticwriters.html', context={'writer' : Writer.objects.all()})

def thriller(request):
    return render(request, 'thrillerhorror.html', context={'writer' : Writer.objects.all()})

def emotional(request):
    return render(request, 'emotional.html', context={'writer' : Writer.objects.all()})

def writer_books(request, writer_name):
    formatted_name = writer_name.replace('-', ' ').title()
    writer = get_object_or_404(Writer, writer_name=formatted_name)
    books = Book.objects.filter(writer_name=writer)
    
    clean_books = []
    for book in books:
        soup = BeautifulSoup(book.book_context, 'html.parser')
        text = soup.get_text(' ', strip=True)
        decoded_text = html.unescape(text)
        clean_books.append((book, decoded_text))
    
    return render(request, 'books.html', {'clean_books': clean_books})