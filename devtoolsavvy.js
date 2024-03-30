// Create a class named DevToolSavvy
class DevToolSavvy {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the DevToolSavvy
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the DevToolSavvy's toolkit.`);
    }

    // Method: remove a tool from the DevToolSavvy
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the DevToolSavvy's toolkit.`);
        } else {
            console.log(`${tool} is not found in the DevToolSavvy's toolkit.`);
        }
    }

    // Method: list all tools in the DevToolSavvy's toolkit
    listTools() {
        console.log("Tools in the DevToolSavvy's toolkit:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of DevToolSavvy named myDevToolSavvy
const myDevToolSavvy = new DevToolSavvy();

// Add tools to the DevToolSavvy
myDevToolSavvy.addTool("Visual Studio Code");
myDevToolSavvy.addTool("Git");
myDevToolSavvy.addTool("Chrome Developer Tools");

// List all tools in the DevToolSavvy's toolkit
myDevToolSavvy.listTools();

// Remove a tool from the DevToolSavvy's toolkit
myDevToolSavvy.removeTool("Git");

// List all tools in the DevToolSavvy's toolkit after removal
myDevToolSavvy.listTools();
