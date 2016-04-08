/* SoftMine Mod, is "ModLoader" from .js scripts, softmine mod is add commands in your local server
Commands:
- version
- heal
- gamemode
- fly
- kill
- plugin
- setspawn
- tick
- time
- exp
- explode
- hunger

in future, i'm RedstoneAlmeida add more commands :D */

// Vars from SoftMine Mod

var codeVersion = "1.0";

var sendMessage = clientMessage;
var sendPopup = print;
var sendTip = ModPE.showTipMessage;

function newLevel(){
	sendMessage("§bEste é o SoftMine Mod");
	sendMessage("§7§oEspera um Pouco, pois a Configuração está sendo Gerada!");
	sendPopup("Este é o SoftMine Mod");
	sendTip("§7§oEspera um Pouco, pois a Configuração está sendo Gerada!");
}

function procCmd(command){
	var cmd = command.split(" ");
	if(cmd[0] == "help"){
		if(cmd[1] == "1"){
			sendMessage("§bCommands");
			sendMessage("§a/configure: §fconfigure config.properties");
			sendMessage("§a/beta: §fSoftMine ModBeta");
			sendMessage("§a/save-all:§f save your softmine configs");
		}
	} else {
		sendMessage("Ops! Selecione o número de 1 a 3");
	} 
	if(cmd[0] == "save-all"){
		sendMessage("Configuração salva!");
	} else {
		sendMessage("Bugou! Más não salvou :(");
	}
}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/SoftMine/configs/";

