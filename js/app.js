/**
 * Created by sriram on 30/07/17.
 */
(function(){
    if('serviceWorker' in navigator){
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function(){
               console.log('Service Worker Registered');
            });
    }
})()