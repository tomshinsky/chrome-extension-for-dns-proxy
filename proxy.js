	var config = {
	        mode: "pac_script",
	        pacScript: {
	          data: "function FindProxyForURL(url, host) {\n" +
	                "  if (host == 'pandora.com')\n" +
	                "    return 'PROXY 107.170.15.247:80';\n" +
	                "  return 'DIRECT';\n" +
	                "}"
			    }
			   };
		  
	 chrome.proxy.settings.set(
	          {value: config, scope: 'regular'},
	          function() {});
