"# In5320-dhis2-assignment" 


The dockerfile contains the required environment for running DHIS2 projects. It also instantiantes
an initial DHIS2 project (can be removed later)

How to run:
Open the project directory in CMD and run:
``
docker run -t -dp 3000:3000 -w /app -v "$(pwd):/app" dhis
``

-dp means detached and port forwarding
-v means to share the directory between development pc and container (Read more: https://docs.docker.com/get-started/06_bind_mounts/)



I tillegg måtte jeg kjøre denne:
yarn add --dev @dhis2/cli-app-scripts
Hvis ikke fikk jeg feilen:
d2-appscripts-not-found