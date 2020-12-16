export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      title: 'Hero',
      name: 'hero',
      type: 'array',
      of: [{type: 'hero'}]
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [{type: 'post'}, {type: 'sidebyside'}, {type: 'hero'}]
    }
  ],
}