config = {
	_id : "shardRs3",
	members: [
		{_id: 0, host: "mongo3:27017"},
	]
}
rs.initiate(config);
rs.conf();
