$(function(){
   $('#spendAmount').click(function(){

       chrome.storage.sync.get('total',function(budget){
          var newTotal = 0;
          if(budget.total){
             newTotal +=parseInt(budget.total);
          }

          var amount =$('#amount').val();

       })
   })

})

/*
 chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });
      
        chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
      

*/