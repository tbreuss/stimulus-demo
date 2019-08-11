action "FTP-Deploy-Action" {
  uses = "SamKirkland/FTP-Deploy-Action@master"
  secrets = ["FTP_USERNAME", "FTP_PASSWORD", "FTP_SERVER"]
}
