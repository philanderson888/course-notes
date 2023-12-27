# edit with 'vi'
vi myfile.txt

`i` will invoke INSERT mode whereby text can be added to the screen

When finished, press escape and then press 

 `:wq` to close and save changes
 `:q`  to close without saving changes
Nano
# type 'nano' and then the file name
nano myfile

:return  next line
:space   next page
:q       quit
:w       previous page
:h       help
Scheduling a script
# add a crontab job
$ sudo crontab -e

# Add the following line:
1 2 3 4 5 /path/to/script

# where
1: Minutes (0-59)
2: Hours (0-23)
3: Days (1-31)
4: Month (1-12)
5: Day of the week(1-7)
/path/to/script - your own shell script
In your case it would be:

# eg
55 23 * * * /path/to/yourShellScript

// summary
sudo crontab -e
Press i . (enter into 'insert') mode
On the top (first) line type
45 16 * * * /Users/Shared/...path/to/script.sh .    ((time is 16:45 daily))
Press Escape
Type :wq . to quit and save changes 
OR
Type Shift Z Z to exit saving changes
Environment Variables : printenv / env
# View environment variables
printenv
# or
env

# view one environment variable only
printenv PATH
# or
echo $PATH
Environment Variables: setting
edit .bash_profile file. 

export VariableName=Varible

To create an environmental variable which can be used in a GUI app in terminal type:

launchctl setenv VariableName Variable
ps Process Status
Note that Linux has no such thing as an exe file and any file can be an executable in Linux. Whether or not a file can run as an executable depends on the permission levels given to the file (read-write-execute) ie must have execute permissions granted

# ps stands for `process status` ie list the status of processes
# list terminal processes
ps 
# list all processes
ps aux
# or
ps -A
# or1
top
|
