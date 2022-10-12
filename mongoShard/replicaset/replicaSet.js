config = {
	_id : "cfgrs",
	configsvr: true,
	members: [
		{_id: 0, host: "mongoConfig1:27017"},
		{_id: 1, host: "mongoConfig2:27017"},
		{_id: 2, host: "mongoConfig3:27017"}
	]
}
rs.initiate(config);
rs.conf();
