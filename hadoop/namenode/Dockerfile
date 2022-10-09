FROM hadoop:3.2.4-base

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:50070/ || exit 1

ADD hdfs-site.xml /etc/hadoop

RUN mkdir /opt/hadoop/dfs/name

ADD start.sh /start.sh
RUN chmod a+x /start.sh

EXPOSE 9870 9000

CMD ["/start.sh", "/opt/hadoop/dfs/name"]