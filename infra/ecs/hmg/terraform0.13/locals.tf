locals {

  container_definitions = jsonencode(
    [

      {
        name  = "${var.environment}-${var.app_name}"
        image = "nginx:1.21.1-alpine"

        cpu       = 256
        memory    = 512
        essential = true

        portMappings = [
          {
            containerPort = 80
            hostPort      = 80
            protocol      = "tcp"
          }
        ]

        logConfiguration = {
          logDriver = "awslogs"
          options = {
            "awslogs-group"         = "/ecs/${var.environment}-${var.app_name}"
            "awslogs-region"        = "sa-east-1"
            "awslogs-stream-prefix" = "ecs"
          }
        }
        environment = [
          {
            "name" : "NGINX_PORT",
            "value" : "80"
          }
        ]
        mountPoints = []
        volumesFrom = []
      }
    ]
  )
}
