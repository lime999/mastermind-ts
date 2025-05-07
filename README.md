# mastermind-ts
# launch.jason:
# {
#     // Use IntelliSense to learn about possible attributes.
#     // Hover to view descriptions of existing attributes.
#    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
#    "version": "0.2.0",
#    "configurations": [
#        {
#            "type": "node",
#            "request": "launch",
#            "name": "Launch Program",
#            "skipFiles": [
#                "<node_internals>/**"
#            ],
#            "program": "${workspaceFolder}\\mastermind.ts",
#            "preLaunchTask": "tsc: build - tsconfig.json",
#            "outFiles": [
#                "${workspaceFolder}/out/**/*.js"
#            ]
#        }, {
#            "type": "node",
#            "request": "launch",
#            "name": "Launch with npx",
#            "runtimeExecutable": "npx",
#            "runtimeArgs": [
#                "ts-node",
#                ".\\mastermind.ts"
#            ],
#            "console": "integratedTerminal"
#        }
#    ]
# }


# command for launching file using npx: npx --node-ts ./mastermind.ts