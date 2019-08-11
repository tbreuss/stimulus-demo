workflow "Deploy to FTP Server" {
  on = "push"
  resolves = ["SamKirkland/FTP-Deploy-Action"]
}

action "SamKirkland/FTP-Deploy-Action" {
  uses = "https://github.com/SamKirkland/FTP-Deploy-Action"
  secrets = ["FTP_USERNAME", "FTP_PASSWORD", "FTP_SERVER"]
}
