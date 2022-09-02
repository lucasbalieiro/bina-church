SELECT 'CREATE DATABASE application'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'application')\gexec

SELECT 'CREATE DATABASE development'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'development')\gexec

SELECT 'CREATE DATABASE test_application'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'test_application')\gexec