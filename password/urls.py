from django.views.generic import TemplateView
from rest_framework import routers
from backend import views
from django.conf.urls import url, include
from backend.views import *
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'api/password_reset/', PasswordResetView.as_view(), name='password_reset'),
    url(r'^password_reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    url(r'password_reset_confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        auth_views.password_reset_confirm, name='password_reset_confirm'),
    url(r'password_reset_complete/$', auth_views.password_reset_complete, name='password_reset_complete'),
    # url(r'^password/$', views.reset_password, name='reset_password'),


    url(r'^login/$', auth_views.login, name='login'),


]
