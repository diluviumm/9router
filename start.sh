docker stop meai
docker rm meai
docker build -t meai .
docker run -d --name meai -p 20128:20128 --env-file .env -v meai-data:/app/data meai