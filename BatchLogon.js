# $language = "JScript"
# $interface = "1.0"

//open host list file
filePath = "D:\\mnx\\Scripts\\HostWithCipher.txt"
//filePath = crt.Dialog.FileOpenDialog("Choose List File", "Open", "list.txt", "Text Files|*.txt|All Files|*.*");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile(filePath, 1);
var hostlist = new Array();
var userlist = new Array();
var passlist = new Array();

// read host list to array
while ( f.AtEndOfStream != true ) {
    line = f.Readline();
	var columns = line.split(' ')
	hostlist.push(columns[0]);
	userlist.push(columns[1]);
	passlist.push(columns[2]);
}
f.Close()

// open sesions
var tablist = new Array();
for ( var i = 0 ; i < hostlist.length; i++ ) {
	tab = crt.Session.Connectintab("/ssh2 " + " /L " +  userlist[i] + " /PASSWORD " + passlist[i] + " " + hostlist[i]);
	tablist.push(tab)
}
crt.sleep(2000);
