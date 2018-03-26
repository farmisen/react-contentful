import {createClient} from 'contentful'

const API_SPACE_ID = 'hciliew0ga5n';
const API_TOKEN = '3c52e655e9903a2ccf503f2e38514269df4b7562477e37963f9b70166ee50323';

export default createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN
})
