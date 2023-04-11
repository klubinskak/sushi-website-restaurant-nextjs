export default {
    name: 'articles',
    type: 'document',
      title: 'Articles',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      }, 
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle'
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date'
      },
    ]
}