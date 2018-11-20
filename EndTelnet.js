# $language = "JScript"
# $interface = "1.0"

var tablist = new Array();
for ( var i = 0 ; i < crt.GetTabCount(); i++ ) {
	tablist.push(crt.GetTab(i+1));
}

for ( var i = 0 ; i < tablist.length; i++ ) {
	tab = tablist[i];
	try {
		tab.Screen.SendKeys("^]");
		tab.Screen.SendKeys("\n");
		tab.Screen.Send("quit\n");
	} catch (e) {
	}
}
