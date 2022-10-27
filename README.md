PWA exercise source: https://medium.com/beginners-guide-to-mobile-web-development/convert-django-website-to-a-progressive-web-app-3536bc4f2862


Steps:
* Create serviceworker.js in static/js folder
* Add the following line to the settings 
PWA_SERVICE_WORKER_PATH = os.path.join(BASE_DIR, 'posts/static/js', 'serviceworker.js')

* Add following lines to index.js
{% load pwa %}
* And following one to inside of head
{% progressive_web_app_meta %}
