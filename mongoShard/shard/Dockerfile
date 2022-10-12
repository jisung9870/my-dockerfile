FROM mongo:3.6.17

RUN mkdir /mongo_config
WORKDIR /mongo_config

COPY shardAdd.js .
COPY shardSetup.sh .

RUN chmod +x ./shardSetup.sh

ENTRYPOINT [ "/bin/bash" ]
CMD ["./shardSetup.sh"]