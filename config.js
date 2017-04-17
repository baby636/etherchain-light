var web3 = require('web3');
var net = require('net');

var config = function () {

      this.logFormat = "combined";
        this.provider = new web3.providers.HttpProvider("https://infuranet.infura.io:443");
          this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";

            this.names = {
                      "POA1": "TODO"
                        }

}

module.exports = config;
