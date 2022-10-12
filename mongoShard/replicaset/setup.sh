#!/usr/bin/env bash

sleep 10 | echo Sleeping
mongo mongodb://mongoConfig1:27017 replicaSet.js
mongo mongodb://mongo1:27017 shardRepSet1.js
mongo mongodb://mongo2:27017 shardRepSet2.js
mongo mongodb://mongo3:27017 shardRepSet3.js
