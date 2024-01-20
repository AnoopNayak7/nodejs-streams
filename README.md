# Node.js Streams

This is a simple Node.js application that demonstrates the use of streams, including Readable, Writable, Duplex, and Transform streams. It also provides a generic stream handler that can handle various stream operations.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)

### Installation
Navigate to the project directory:

Install dependencies:
    npm install

### Usage
The application provides several routes to demonstrate different stream types. You can customize these routes and the streaming operations according to your needs.

Running the Application:
    npm run start

### Routes
/streams/readableStream: Demonstrates using a Readable stream to read data from a file and stream it to the response.

/streams/writableStream: Demonstrates using a Writable stream to write data to a file.

/streams/duplexStream: Demonstrates using a Duplex stream (both readable and writable) for custom stream operations.

/streams/transformStream: Demonstrates using a Transform stream to modify or transform data.




