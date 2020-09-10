var axios = require("axios");

function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = {
        type: "application/vnd.lime.collection+json",
        content: {
          itemType: "application/vnd.lime.document-select+json",
          items: [
            {
              header: {
                type: "application/vnd.lime.media-link+json",
                value: {
                  title: result.name,
                  text: result.full_name,
                  type: "image/jpeg",
                  uri: result.imagem
                },
              },
            },
          ],
        },
      };
      return newObject;
    });
    return filterTweets;
  });
}

module.exports = {
  returnDataGithub: returnDataGithub,
};
