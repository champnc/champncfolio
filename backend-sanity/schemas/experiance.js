export default {
    name: 'experiances',
    title: 'Experiances',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'jobTitle',
        title: 'Job Title',
        type: 'string',
      },
      {
        name: 'duration',
        title: 'Duration',
        type: 'string',
      },
      {
        name: 'workplaceLink',
        title: 'Workplace Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
    ],
  };