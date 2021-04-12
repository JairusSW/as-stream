# As-Stream
**A Stream Implementation for AssemblyScript**

Just have a few things that work.

```js
import { ReadableStream } from 'as-stream'

const stream = new ReadableStream()

stream.highWaterMark = 5

stream.write('Hello World From AssemblyScript Streams!')

stream.on('data', (data) => {

    //...

})

```