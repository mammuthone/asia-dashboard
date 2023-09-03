build docker image

gcloud builds submit --tag gcr.io/asia-395019/materio-admin-dashboard --project asia-395019

deploy

gcloud run deploy --image gcr.io/asia-395019/materio-admin-dashboard --project asia-395019 --platform managed