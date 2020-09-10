var axios = require("axios");
const Lime = require('lime-js');


function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = {
        type: "application/vnd.lime.collection+json",
                to: 'teste', 
                id: Lime.Guid(),
                content: {
                    itemType: "application/vnd.lime.document-select+json",
                    items: [
                        {
                            header: {
                                type: "application/vnd.lime.media-link+json",
                                value: {
                                    title: "teste",
                                    text: "teste",
                                    type: "image/jpeg",
                                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                                }
                            
                            }
                        },
                        {
                            header: {
                                type: "application/vnd.lime.media-link+json",
                                value: {
                                    title: "teste",
                                    text: "teste",
                                    type: "image/jpeg",
                                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                                }
                            }
                        },
                        {

                            header: {
                                type: "application/vnd.lime.media-link+json",
                                value: {
                                    title: "teste",
                                    text: "tal",
                                    type: "image/jpeg",
                                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                                }
                            }
                        },
                        {
                            header: {
                                type: "application/vnd.lime.media-link+json",
                                value: {
                                    title: "teste",
                                    text: "teste",
                                    type: "image/jpeg",
                                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                                }
                            }
                        },
                        {
                            header: {
                                type: "application/vnd.lime.media-link+json",
                                value: {
                                    title: "teste",
                                    text: "teste",
                                    type: "image/jpeg",
                                    uri: "https://avatars1.githubusercontent.com/u/4369522?s=200&v=4"
                                }
                            }
                        },
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
