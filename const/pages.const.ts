export type Page = {
  icon?: string
  title?: string
  to?: string
  disabled?: boolean
  sub?: Page[]
}

export const pages: Page[] = [{
  icon: 'mdi-home',
  title: 'Home',
  to: '/'
},
{
  icon: 'mdi-lock',
  disabled: true,
  title: 'Business Model Canvas',
  to: '/locked'
},
{
  icon: 'mdi-account',
  title: 'Persona',
  sub: [
    {
      icon: 'mdi-video',
      title: 'Los Gehts',
      to: '/persona/los-gehts'
    },
    {
      icon: 'mdi-brush',
      title: 'Erstellen',
      to: '/persona/erstellen'
    },
    {
      icon: 'mdi-tag',
      title: 'Eigenschaften',
      to: '/persona/eigenschaften'
    }
  ]
},
{
  icon: 'mdi-lock',
  disabled: true,
  title: 'Value Proposition Canvas',
  to: '/locked'
}]
