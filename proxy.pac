
					function FindProxyForURL(url, host) {
						if (host == 'music.163.com' || host == 'interface.music.163.com' || host == 'interface3.music.163.com' || host == 'apm.music.163.com' || host == 'apm3.music.163.com' || host == '103.126.92.133' || host == '103.126.92.132' || host == '59.111.181.60' || host == '223.252.199.66' || host == '223.252.199.67' || host == '59.111.160.195' || host == '59.111.160.197' || host == '59.111.181.35' || host == '59.111.181.38' || host == '115.236.121.1' || host == '115.236.118.33' || host == '182.92.170.253' || host == '193.112.159.225' || host == '39.105.175.128' || host == '47.100.127.239' || host == '39.105.63.80' || host == '118.24.63.156' || host == '2407:ae80:200:1001::20' || host == '2407:ae80:200:1001::21') {
							return 'PROXY 8.129.210.206:8080'
						}
						return 'DIRECT'
					}
				