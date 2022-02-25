import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const fr: NavbarConfig = [
  {
    text: 'Manuel',
    children: [
      {
        text: 'Utilisation',
        link: '/guide/',
      },
      {
        text: 'Administration',
        link: '/administration/',
      }
    ],
  },
  {
    text: 'Référence',
      children: [
      {
        text: 'Architecture',
        children: [
          '/reference/architetcure/architetcure.html',
          '/reference/architetcure/aggregation.md',
          '/reference/architetcure/ingestions.md',
          '/reference/architetcure/processing.md',
          '/reference/architetcure/storage.md',
          '/reference/architetcure/access.md',
        ],
      },
      {
        text: 'Développement',
        children: [
          '/reference/development/requirements.md', // Docker, Compose
          '/reference/development/structure.md', // Code structure, MVC
          '/reference/development/frontend.md',
          '/reference/development/backend.md',
          '/reference/development/tests.md', // Jest, ESLint, Sonar
          '/reference/development/git.md', // Workflow
        ],
      },
      {
        text: 'Déploiement',
        children: [
          '/reference/deployment/requirements.md', // HW, VMs
          '/reference/deployment/configurations.md', // Cluster, Network, Ceph
          '/reference/deployment/swarm.md',
          '/reference/deployment/kubernetes.md',
          '/reference/deployment/ci.md',
          '/reference/deployment/secutity.md',
        ],
      },
    ],
  },
  {
    text: 'En Savoir Plus',
    children: [
      {
        text: 'Avancée',
        children: [
          '/learn/advanced/pipelines.md', // Kafka
          '/learn/advanced/oad.md',
          '/learn/advanced/database.md', // MCD
          '/learn/advanced/datalake.md', // Structure
          '/learn/advanced/spark.md', // Pipeline
          '/learn/advanced/api.md', // GraphQL
          '/learn/advanced/cron.md',
          '/learn/advanced/elk-monitoring.md',
          '/learn/advanced/elk-search.md', // + pgsync
          '/learn/advanced/portainer.md',
        ],
      },
      {
        text: 'Ressources',
        children: [
          '/learn/resources/roadmap.md',
          '/learn/resources/links.md', // To each partners
        ],
      },
    ],
  }
]
