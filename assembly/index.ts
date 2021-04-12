import { EventEmitter } from '../node_modules/as-events/assembly/index'

import { console } from '../node_modules/as-console/assembly/console'

export class ReadableStream extends EventEmitter<string> {
  public highWaterMark: i32 = 16
  constructor() {
    super()
  }
  push(data: string): void {
    let lastChunkIndex = 0
    for (let i = 0; i < data.length / this.highWaterMark; i++) {
      lastChunkIndex = i * this.highWaterMark + this.highWaterMark
      let chunked = data.slice(i * this.highWaterMark, lastChunkIndex)   
      this.emit('data', chunked)
    }
    let lastChunk = data.slice(lastChunkIndex, data.length)
    this.emit('data', lastChunk)
  }
}

export function test(): void {
  const stream = new ReadableStream()
  stream.highWaterMark = 5
  stream.push('Hello World How Are You Hello Pillow Fire Truck It Is Funny Google Is Boring I Am Crazy Bye Bye Edgar Allen Poe Is A Creep Ha Lorum Ispum Random Stuff Rarr Games Are Fun This Is Random And I Am A Coder')
}