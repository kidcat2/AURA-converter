import { Converter } from "./converter/Converter"
import * as fs from 'fs'
import * as path from 'path'

const converter = new Converter()

// test ply
const mBuffer = fs.readFileSync("./test-samples/room.ply")
const buffer = mBuffer.buffer.slice(mBuffer.byteOffset, mBuffer.byteOffset + mBuffer.byteLength)
const fileName = path.basename("./test-samples/room.ply") 

//const output = 
converter.run(buffer, fileName)




