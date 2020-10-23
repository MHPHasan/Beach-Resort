import {createClient} from 'contentful';

export default createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
//   space: "yy9mbu9vmv55",
  space: process.env.REACT_APP_API_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "6DZrOLDlRtJyPa9PDU5mn7LmjSQ-L-sgaPet8-txJxQ"
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});