var axios = require("axios");

function returnDataGithub() {
  url = "https://api.github.com/orgs/takenet/repos?q=language:C#&order=cresc";
  return axios.get(url).then((response) => {
    let filterTweets = response.data.map((result) => {
      let newObject = {
        name: result.name,
        full_name: result.full_name,
        description: result.description,
        imagem: result.owner.avatar_url,
        date: result.created_at
      };
      return newObject;
    });
    return filterTweets;
  });
}

module.exports = {
  returnDataGithub: returnDataGithub,
};
