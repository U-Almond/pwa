var dbPromise = idb.open('feeds-db', 5, function(upgradeDb) {
	upgradeDb.createObjectStore('feeds',{keyPath:'pk'});
});


	//collect latest post from server and store in idb
	fetch('http://localhost:8000/getdata').then(function(response){
		return response.json();
	}).then(function(jsondata){
		dbPromise.then(function(db){
			var tx = db.transaction('feeds', 'readwrite');
	  		var feedsStore = tx.objectStore('feeds');
	  		for(var key in jsondata){
	  			if (jsondata.hasOwnProperty(key)) {
			    	feedsStore.put(jsondata[key]);	
			  	}
	  		}
		});
	});
