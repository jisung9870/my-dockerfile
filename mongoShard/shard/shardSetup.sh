#!/usr/bin/env bash

sleep 10 | echo Sleeping
mongo mongodb://mongos:27017 shardAdd.js