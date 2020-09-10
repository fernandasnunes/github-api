var axios = require("axios");
const Lime = require('lime-js');


function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = 
      {
        "itemType": "application/vnd.lime.document-select+json",
        "items": [
            {
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": result.name + result.full_name,
                        "text": result.description,
                        "type": "image/jpeg",
                        "uri": result.owner.avatar_url
                    }
                },
            }
            
        ]
    }
      
  return newObject
  
    });
    return Object.assign({}, filterTweets);
  });
}



module.exports = {
  returnDataGithub: returnDataGithub,
};
