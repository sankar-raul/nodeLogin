#!/usr/bin/node
const { exec } = require("child_process")
const arg = process.argv
const [install,pg] = [`apt install postgresql`,`pg_ctl -D ./db -l logfile `]
if (arg[2] == "start") {
   exec(pg + "start",(err,stdout,stderr) => {
   console.log("Postgres server has been started successfully! :-) ")
})
} else if (arg[2] == "stop") {
   exec(pg + "stop",(err,stdout,stderr) => {
   console.log("Postgres server has been stoped!")
})
} else if (arg[2] == "i" || arg[2] == "install") {
   exec(install,(err,stdout,stderr) => {
   console.log(`Installing postgresql ${stdout}`)
})
} else if (arg[2] == "help" || arg[2] == 'h') {
  help()
} else {
  help()
}
function help() {
  console.log("Help!")
  console.log("\tRun './pg_sql.sh start' to start the postgres server")
  console.log("\tRun './pg_sql.sh stop' to stop the postgres server")
  console.log("\tRun './pg_sql.sh install' to install the postgresql")
  console.log("\tRun './pg_sql.sh -h' to print this help messege.")
}
