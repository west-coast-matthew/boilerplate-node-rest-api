import express from 'express';
import { json } from 'body-parser';
import helmet from 'helmet';

/**
 * 
 * 
 */

console.log("This is the app entry point.");

// Support for external configuration
// Load environment variables from .env file
// Ensure you have a .env file in the root of your project
import 'dotenv/config'

//Example import from shared project
import {holaMiddleware} from '@west-coast-matthew/node-shared-template';


// Example pathing for local project structure
import {SAMPLE_CONSTANT} from "@constants/sample.constants";
import { sampleService } from "@services/sample.service";
import { sampleRoute } from "@routes/sample.route";


console.log('sample constant: ', SAMPLE_CONSTANT);
console.log('sample service: ', sampleService());
console.log('sample route: ', sampleRoute());

// Port is externalized
const apiPort = process.env.API_PORT || 3000;

// Initialize Express app
console.log("Initializing Express app...");
const app = express();
app.use(json());
app.use(helmet());
app.use(holaMiddleware); // Applying 'hello' middleware from shared project

// Establish database connection
import {createOrmConnection} from '@west-coast-matthew/node-shared-template';
const connection = createOrmConnection();

import {testDb} from '@west-coast-matthew/node-shared-template';
testDb('database connection test');
testDb();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from TypeScript Express!');
});

console.log(`Config: apiPort >`, apiPort ? apiPort : 'not set'); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${apiPort}`);
});