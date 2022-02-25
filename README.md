# wallesmart-docs

### Start the application
To start WALLeSmart documentation for local developement, use the following command:

```bash
npm run docs:dev
```

### Deploy the application

To deploy WALLeSmart documentation to the production, you must use Docker Swarm:

```bash
docker stack deploy -c docker-stack.yml wallesmart-docs
```
