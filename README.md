# Proxy

Node proxy server for APIs blocked by CORS

## How to use

- Clone the repo
- `npm install`
- Create a `.env` file with two variables
  - `PORT` - the port you want to proxy server to run on
  - `API` - the URL of the API you want to proxy
- Run `npm start`
- 
OR

<a href="https://render.com/deploy?repo=https://github.com/mklilley/proxy">
<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render">
</a>

This button will help you set-up a free web service on [Render](https://render.com/). You'll be:
- Redirected to Render.com
- Asked to specify a name for your Proxy
- Asked to specify the API environment variable, i.e. the URL of the API you want to proxy

The web service is configured using the `render.yml` file in this repo. It is set to use the free plan which means it will be a bit slow to reploy. You can [change to other plans](https://render.com/docs/blueprint-spec#instance-types)
