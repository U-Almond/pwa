from django.conf import settings
from django.urls import path
from django.conf.urls.static import static
from . import views


urlpatterns = [
    # URLs that require a session 
    path('', views.index),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



