export default{
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:'string',
            description: 'The title of the blog post.',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'The heading of the blog post.',
        },
        {
            name: 'description',
            title: 'Description',
            type:'string',
            description: 'A brief description of the blog post.',
        }
    ]
}