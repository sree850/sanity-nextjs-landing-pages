export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8c419c084e2f5ba7a82a21',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tdep8jm6',
                  apiId: 'a1091ae3-8029-4b21-b32f-f22471a1a6dd'
                },
                {
                  buildHookId: '5f8c419d10b6b2e25e0a5181',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-edznvm2i',
                  apiId: '3861b31a-4d09-4a54-8668-0cdd10188e85'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sree850/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-edznvm2i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
