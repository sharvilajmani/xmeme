#!/bin/bash

cd backend/

sudo systemctl start mongod.service

npm run start

cd ..