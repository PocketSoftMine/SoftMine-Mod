print("SimpleAuth plugin Carregado com sucesso");

var PMSimpleAuthMod = {};
var passWord = "password";

var register = "Your not is Registred? use §b/register <password>"
var login = "Your is Registred? use §b/login <password>"

var sendMessage = clientMessage;
var sendPopup = print;
var sendTip = ModPE.showTipMessage;

function newLevel(){
	sendMessage(register);
	sendMessage(login);
	PMSimpleAuthMod.saveMainSettings();
	

}
function procCmd(cmd){
	var cmd = cmd.split(" ");
	if(cmd[0] == "register"){
		clientMessage("§aRegistred your Account");
		PMSimpleAuthMod.saveMainSettings();
		
		if(cmd[1] == "password"){
			}
		}
		if(cmd[0] == "login"){
			clientMessage("§aLogin sucessfull");
			PMSimpleAuthMod.loadMainSettings();
			
			if(cmd[1] == "password"){
				}
			}
			if(cmd[0] == "simpleauth"){
				if(cmd[1] == "reload"){
					clientMessage("§aReload Config");
					PMSimpleAuthMod.loadMainSettings();
					
					}
				}

}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/SoftMine-Mod/plugins/SimpleAuthMod/";

PMSimpleAuthMod.saveMainSettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "config.properties");
    var newFileYML = new java.io.File(settingsPath, "accounts.txt");
    newFile.createNewFile();
    newFileYML.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append("," + passWord.toString());
    }
    
    PMSimpleAuthMod.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "config.properties").exists())
        return;
    var file = new java.io.File(settingsPath + "config.properties");
}

PMSimpleAuthMod.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "accounts.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "accounts.txt");
}

    
