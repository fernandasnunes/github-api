var axios = require("axios");

function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = {
        itemType: "application/vnd.lime.document-select+json",
        items: [
          {
            header: {
              type: "application/vnd.lime.media-link+json",
              "value": {
                title: "Title",
                text: "Thisisafirstitem",
                type: "image/jpeg",
                uri: result.image
        
      }
      },
      options: [
        {
          label: {
            type: "application/vnd.lime.web-link+json",
            value: {
              title: "Link",
              uri: "http://www.adoteumgatinho.org.br"
            }
          }
        },
        {
          label: {
            type: "text/plain",
            "value": "Text 1"
          },
          value: {
            type: "application/json",
            value: {
              key1: "value1",
              key2: "2"
            }
          }
        }

      
      ]
      }]}
      return newObject;
    });
    return filterTweets;
  });
}



module.exports = {
  returnDataGithub: returnDataGithub,
};
