import fullAth from '../../../assets/images/fulls/ath.jpg'
import sku from '../../../assets/images/fulls/sku.png'
import fullGroceries from '../../../assets/images/fulls/groceries.jpg'
import fullMods from '../../../assets/images/fulls/mods.png'
import ath from '../../../assets/images/thumbs/ath.jpg'
import groceries from '../../../assets/images/thumbs/groceries.jpg'
import icon from '../../../assets/images/thumbs/icon.png'
import modsExpanded from '../../../assets/images/thumbs/modsExpanded.png'
import thumbresume from '../../../assets/images/thumbs/thumbresume.jpg'
import graph from '../../../assets/images/graph.png'



export const DEFAULT_IMAGES = [
    {
      id: '1',
      source: fullAth,
      thumbnail: ath,
      caption: 'Providence Athenaeum Art Collection',
      description: `A ReactJS SPA based on the Omeka API feed from the digital art collection of the Providence Athenaeum`,
      link: 'http://dpa.brendanryan.xyz'
    },
    {
      id: '2',
      source: sku,
      thumbnail: icon,
      caption: 'Skeuomorph',
      description: 'An Electron desktop app for cataloging and storing digital asset collections',
      link: 'https://github.com/3rendan/skeuomorph'
    },    
    {
      id: '3',
      source: graph,
      thumbnail: graph,
      caption: 'GraphAth',
      description: 'A GraphQL express server to parse the RESTful API served by the digital art repository for the Providence Athenaeum managed with an Omeka CMS.',
      link: 'https://github.com/3rendan/graphAth'
    },
    {
      id: '4',
      source: fullMods,
      thumbnail: modsExpanded,
      caption: 'MODS Expanded',
      description: `A MODS metadata plugin for Omeka with the full complement of categories as used by the Digital Commonwealth. It extends the plugin made by Columbia University Libraries Digital Library and Scholarly Technologies to include the full scope of MODS fields used at Digital Commonwealth. Some of the structure and format have been retained so that the Omeka CMS will recognize it as a valid plugin.`,
      link: 'https://github.com/3rendan/MODS-Expanded'
    },
    {
      id: '5',
      source: fullGroceries,
      thumbnail: groceries,
      caption: 'Foodie',
      description: 'The Foodie app allows users to create shopping lists tied to a user account. Lists can be shared between users. It is built with React JS utilizing a Rails backend.',
      link: 'https://github.com/pavloskaralis/foodie'
    },
]
