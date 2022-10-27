fetch('http://localhost:8000/getdata').then(function(response){
  return response.json();
 }).then(function(jsondata){
  console.log(jsondata);
 });

var dbPromise = idb.open('feeds-db', 1, function(upgradeDb) {
upgradeDb.createObjectStore('feeds',{keyPath:'pk'});
});
