from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('yazarlar/', views.writer, name='writers'),
    path('yazarlar/<str:writer_name>', views.writer_books, name='writer-books'),
    path('fantastik-yazarlar', views.fantasy_books, name='fantasy_books'),
    path('dedektif-polisiye-yazarlar', views.dedective_books, name='dedective_books'),
    path('kisisel-gelisim-yazarlar', views.self_improvement, name='self_improvement'),
    path('romantik-yazarlar', views.romantic, name='romantic'),
    path('korku-gerilim-yazarlar', views.thriller, name='thriller'),
    path('psikolojik-duygusal-yazarlar', views.emotional, name='emotional'),
    path('yazar-ekle', views.add_writer)
]   
