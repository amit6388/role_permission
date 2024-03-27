// Import the compile-run library
const compileRun = require('compile-run');

// Function to compile and run code
const compileAndRunCode = (code, res) => {
    // Specify the code to compile and run
    console.log(code, "compilerAndRun");
    const codeToCompile = `
        ${code}
    `;

    // Specify the compiler options (optional)
    const options = {
        runtimeArgs: ['-r', 'esm'], // For ES module support, if needed
    };

    // Compile and run the code
    compileRun.default(codeToCompile, options)
        .then((result) => {
            // Send the result of the code execution
            res.send(result.stdout);
        })
        .catch((err) => {
            // Handle compilation or runtime errors
            res.status(500).send(`Error: ${err}`);
        });
};

// Express route handler for compilation and running code
const compilerFunction = (req, res) => {
    // Example: Get code from the request body
    const { code } = req.body;
    // Call the compileAndRunCode function
    compileAndRunCode(code, res);
};

module.exports = {
    compilerFunction
};
