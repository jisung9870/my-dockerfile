config = {
	_id : "shardRs2",
	members: [
		{_id: 0, host: "mongo2:27017"},
	]
}
rs.initiate(config);
rs.conf();
