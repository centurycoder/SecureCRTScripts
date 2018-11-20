This repository contains several useful SecureCRT scripts written by javascript. Those scripts can help to impove productivity.

1. BatchLogon:
	If you have a senario that you want to logon to a list of machines with difference or same username and password, this is the script you should use. Here is how to use it:
	
	Step1 - prepare a text file, say "D:\mnx\Scripts\HostWithCipher.txt", with following contents:
		192.168.0.1 root password
		192.168.0.2 root password
		...
		
	Step2 - Run BatchLogon.js from SecureCRT, it will logon all those machines in a same SecureCRT window, in different tabs.
	
	Step3 - check on "send to all" in SecureCRT "chat window", then you will be able to execute commands for all opened tabes with only one type.  
	
2. AutoOP:
	If your company is using Opsware(or HPSA). Probably you will have an user to login to opsware global shell. After that, you will be able to logon to other machines using their SA name, using below command:
		rosh -l root -n hostname (root or other legal user)
		
	Now suppose you want to do some job for hundreds of machines, you need to type this command that times. This script is to automate this, it will read all hostname in a list file, initiate a global shell session (session already stores your username and password, so you don't need to type manually), and run above command for each host. 
	
3. EndTelnet
	Suppose you have logon to 50+ hosts in SecureCRT tabs and run a telnet test for each of them, then probably you will be bored to run "Ctrl+]" and "quit" to exit telnet session to shell session.
	
	This small script is to do this automatically for you. If will call "SendKeys" method to send those commands for all opened sessions.
	
4. CloseAll
	If you want to quit an SecureCRT with 50+ open tables, and want to continue to another 50 machines, probably the best way is to close the SecureCRT program, and re-open it.  
	This script offers you another choice, it will close all opened tabs automatically. Thus you don't need to exit SecureCRT if your purpose is just to close its tabs.
	
