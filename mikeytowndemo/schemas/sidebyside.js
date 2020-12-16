export default {
  name: 'sidebyside',
  title: 'Side by Side',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },

    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      title: 'Reversed',
      name: 'reversed',
      type: 'boolean'
    }
  ]
}