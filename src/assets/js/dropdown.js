var TrelloApi = require('./lib/trello-api');


/**
  var submitCard = function(data) {
    Trello.rest('POST', 'cards', {
      name: data['card-title'],
      desc: data['card-description'],
      date: null,
      pos: data['position'],
      idList: data['list'],
      urlSource: null
    }, function(success) {
      // close the window on success
      window.close();
    }, _apiError);
  };

**/

var dropdownfileClickHandler =
chrome.contextMenus.create({
  title : "add card for this link"
  onclick:  function(info){
    var link = info.linkUrl;
    
    //we require card-title and card-description
    //card-description should be the url
    //but the card-name should probably be the text of the link
    //we can do this by doing a click handler on all links clicked and doing the "figure out what was right clicked" ourselves
    

}









null)



//createProperties needs to have a field for "title" and an "onclick" method
//callback is optional so should be left null


//

