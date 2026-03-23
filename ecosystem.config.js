module.exports = {
  apps: [
    {
      name: "config-server",
      script: "C:/Users/ZeejMaleesha/.jdks/openjdk-23.0.1/bin/java.exe",
      args: "-jar G:/eca/platform/config-server/target/Config-Server-1.0.0.jar",

    },
    {
      name: "service-registry",
      script: "C:/Users/ZeejMaleesha/.jdks/openjdk-23.0.1/bin/java.exe",
      args: "-jar G:/eca/platform/service-registry/target/Service-Registry-1.0.0.jar",


    },
    {
      name: "api-gateway",
      script: "C:/Users/ZeejMaleesha/.jdks/openjdk-23.0.1/bin/java.exe",
      args: "-jar G:/eca/platform/api-gateway/target/Api-Gateway-1.0.0.jar",


    }
  ]
}