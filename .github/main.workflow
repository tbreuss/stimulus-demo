workflow "Deploy to FTP Server" {
  on = "push"
  resolves = ["FTP-Deploy-Action"]
}

action "FTP-Deploy-Action" {
  uses = "SamKirkland/FTP-Deploy-Action@master"
  secrets = ["FTP_USERNAME", "FTP_PASSWORD", "FTP_SERVER"]
}
