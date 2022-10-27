PWA exercise source: https://medium.com/beginners-guide-to-mobile-web-development/convert-django-website-to-a-progressive-web-app-3536bc4f2862


Steps:
* Run following command on terminal:
pip3.10 install git+https://github.com/silviolleite/django-pwa
* Create serviceworker.js in static/js folder (you may need to edit it)
* Add the following line to the settings 
PWA_SERVICE_WORKER_PATH = os.path.join(BASE_DIR, 'posts/static/js', 'serviceworker.js')

* Add following lines to index.js
{% load pwa %}
* And following one to inside of head
{% progressive_web_app_meta %}



Notes:
! Meta tags will register service worker for you defining the scope of service worker as / So service worker can have access to every page in your website.

! Remember, idb.js file is used for IndexedDB Promised API. We are not going to change anything in idb.js file. All IndexedDB operations will be carried out by idbop.js file.

! Data will get stored inside the objectStore . Think objectStore as a table in MySQL. Here we will create feeds objectStore to store our news feeds. put() method will insert each JSON array as a one record inside feeds .

