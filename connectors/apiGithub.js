var axios = require("axios");
const Lime = require('lime-js');


function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = 
        {
          "to": "553199990000@0mn.io",
          "type": "application/vnd.lime.collection+json",
          "content": {
              "itemType": "application/vnd.lime.container+json",
              "items": [
                  {
                      "type": "application/vnd.lime.media-link+json",
                      "value": {
                          "text": "Welcome to our store!",
                          "type": "image/jpeg",
                          "uri": "http://www.petshoplovers.com/wp-content/uploads/2014/03/CUIDADOS-B%C3%81SICOS-PARA-CRIAR-COELHOS.jpg"
                      }
                  },
                  {
                      "type": "application/vnd.lime.select+json",
                      "value": {
                          "text": "Choose what you need",
                          "options": [
                              {
                                  "order": 1,
                                  "text": "See our stock"
                              },
                              {
                                  "order": 2,
                                  "text": "Follow an order"
                              }
                          ]
                      }
                  }
              ]
          }
      }
      
      
      return newObject;
    });
    return filterTweets;
  });
}



module.exports = {
  returnDataGithub: returnDataGithub,
};
