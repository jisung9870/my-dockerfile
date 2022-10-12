config = {
	_id : "shardRs1",
	members: [
		{_id: 0, host: "mongo1:27017"},
	]
}
rs.initiate(config);
rs.conf();
