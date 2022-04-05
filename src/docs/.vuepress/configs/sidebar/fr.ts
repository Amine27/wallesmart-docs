import type { SidebarConfig } from '@vuepress/theme-default'

export const fr: SidebarConfig = {
  '/guide/': [
    {
      text: 'Manuel d\'utilisation',
      children: [
        '/guide/README.md',
        '/guide/account/management.md',
        '/guide/account/settings.md',
        {
          text: 'Explorer',
          collapsible: true,
          children: [
            '/guide/explore/app.md',
            '/guide/explore/data.md',
            '/guide/explore/users.md',
          ],
        },
        {
          text: 'Utiliser',
          collapsible: true,
          children: [
            '/guide/use/app.md',
            '/guide/use/data.md',
          ],
        },
        {
          text: 'Fournir',
          collapsible: true,
          children: [
            '/guide/provide/app.md',
            '/guide/provide/data.md',
          ],
        },
        {
          text: 'Autorisations',
          collapsible: true,
          children: [
            '/guide/permissions/app.md',
            '/guide/permissions/data.md',
            '/guide/permissions/groups.md',
          ],
        },
        {
          text: 'Paramètres de profil',
          collapsible: true,
          children: [
            '/guide/profile/public.md',
            '/guide/profile/notifications.md',
            '/guide/profile/settings.md',
            '/guide/profile/tokens.md',
            '/guide/profile/blocking.md',
          ],
        },
      ],
    },
  ],
  '/administration/': [
    {
      text: 'Manuel d\'administration',
      children: [
        '/administration/README.md',
        '/administration/users.md',
        '/administration/profiles.md',
        '/administration/groups.md',
        '/administration/roles.md',
        '/administration/tasks.md',
        '/administration/apps.md',
        '/administration/data.md',
        '/administration/contacts.md',
        {
          text: 'API',
          collapsible: true,
          children: [
            '/administration/api/managment.md',
            '/administration/api/permissions.md',
            '/administration/api/tokens.md',
          ],
        },
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Architecture',
      collapsible: true,
      children: [
        '/reference/architetcure/architetcure.md',
        '/reference/architetcure/aggregation.md',
        '/reference/architetcure/ingestions.md',
        '/reference/architetcure/processing.md',
        '/reference/architetcure/storage.md',
        '/reference/architetcure/access.md',
      ],
    },
    {
      text: 'Développement',
      collapsible: true,
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
      collapsible: true,
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
  '/learn/': [
    {
      text: 'Avancée',
      collapsible: true,
      children: [
        '/learn/advanced/pipelines.md', // Kafka
        '/learn/advanced/oad.md',
        '/learn/advanced/database.md', // MCD, Cassandra
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
      collapsible: true,
      children: [
        '/learn/resources/roadmap.md',
        '/learn/resources/links.md', // To each partners
      ],
    },
  ],
}
