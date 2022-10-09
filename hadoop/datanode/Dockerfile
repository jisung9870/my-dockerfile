FROM hadoop:3.2.4-base

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3  CMD curl -f http://localhost:50075/ || exit 1

RUN mkdir /opt/hadoop/dfs/data

ADD start.sh /start.sh
RUN chmod a+x /start.sh

# WebUI, 데이터전송
EXPOSE 9864 9866

CMD ["/start.sh"]