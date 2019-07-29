
const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

export default function getEntries(){
    return client.getEntries({content_type: 'qldBgImg'})
    .then((response) => console.log(response.items[0].fields.bgImages))
    .catch(console.error)
}
