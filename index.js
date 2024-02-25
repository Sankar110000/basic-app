require('dotenv').config()
const express = require('express')
const app = express() 
const userData = {
  "login": "Sankar110000",
  "id": 136836807,
  "node_id": "U_kgDOCCf2xw",
  "avatar_url": "https://avatars.githubusercontent.com/u/136836807?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Sankar110000",
  "html_url": "https://github.com/Sankar110000",
  "followers_url": "https://api.github.com/users/Sankar110000/followers",
  "following_url": "https://api.github.com/users/Sankar110000/following{/other_user}",
  "gists_url": "https://api.github.com/users/Sankar110000/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Sankar110000/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Sankar110000/subscriptions",
  "organizations_url": "https://api.github.com/users/Sankar110000/orgs",
  "repos_url": "https://api.github.com/users/Sankar110000/repos",
  "events_url": "https://api.github.com/users/Sankar110000/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Sankar110000/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-06-16T16:24:44Z",
  "updated_at": "2024-01-27T05:08:38Z"
}

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req,res) => { 
  res.json(userData)
});

app.get('/twitter', (req, res) => {
    res.send('twitter page')
})

app.get('/login', (req,res) => {
    res.send('<h1>This is login page</h1>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})