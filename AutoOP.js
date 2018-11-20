# $language = "JScript"
# $interface = "1.0"

//open host list file
session="SA\\10.1.248.75"
filePath = "D:\\mnx\\Scripts\\HostList.txt"
//filePath = crt.Dialog.FileOpenDialog("Choose List File", "Open", "list.txt", "Text Files|*.txt|All Files|*.*");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile(filePath, 1);
var hostlist = new Array();

// read host list to array
while ( f.AtEndOfStream != true ) {
    host = f.Readline();
	hostlist.push(host);
}
f.Close()

// open sesions
var tablist = new Array();
for ( var i = 0 ; i < hostlist.length; i++ ) {
	tab = crt.Session.Connectintab("/s " + session);
	tablist.push(tab)
}
crt.sleep(2000);

// send opswre login to all sessions
for ( var i = 0 ; i < tablist.length; i++ ) {
	tab = tablist[i];
	tab.Caption = hostlist[i]
    tab.Screen.Send("rosh -l root -n "+hostlist[i]+"\n");
}
