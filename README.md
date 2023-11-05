```bash
  npm install @leviatan1121/pathbuilder
```

```javascript
const Path = require('pathbuilder');
// or
import Path from 'pathbuilder';
```

```javascript
// __dirname and __filename are not available in modules
// this can help you with the problem
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
```

```javascript
const SRC = new Path(__dirname); // to create a simple path
console.log(SRC.path); // to view a path

// get method returns the path with added info (like path.join)
// we can use it to set a new path
const SERVER = new Path(SRC.get('server'));
// or use the path property
const SERVER = new Path(SRC.path, 'server');

// get method can be used for files
// here a sample of file reading
const fs = require('fs');
const content = fs.readFileSync(SERVER.get('content.json'), 'utf8');
console.log(content);
```