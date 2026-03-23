module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java",
      args: "-jar ./config-server/target/Config-Server-1.0.0.jar",
      error_file: "./logs/config-server-error.log",
      out_file: "./logs/config-server-out.log",
    },
    {
      name: "service-registry",
      script: "java",
      args: "-jar ./service-registry/target/Service-Registry-1.0.0.jar",
      error_file: "./logs/service-registry-error.log",
      out_file: "./logs/service-registry-out.log",
    },
    {
      name: "api-gateway",
      script: "java",
      args: "-jar ./api-gateway/target/Api-Gateway-1.0.0.jar",
      error_file: "./logs/api-gateway-error.log",
      out_file: "./logs/api-gateway-out.log",
    }
  ]
}