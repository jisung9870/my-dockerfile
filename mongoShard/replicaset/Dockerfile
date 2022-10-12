FROM mongo:3.6.17

RUN mkdir /mongo_config
WORKDIR /mongo_config

COPY replicaSet.js .
COPY shardRepSet1.js .
COPY shardRepSet2.js .
COPY shardRepSet3.js .
COPY setup.sh .

RUN chmod +x ./setup.sh

ENTRYPOINT [ "/bin/bash" ]
CMD ["./setup.sh"]

