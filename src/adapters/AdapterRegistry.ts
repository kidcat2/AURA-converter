import { IAdapter } from "../types/IAdapter"
import * as path from 'path'

export class AdapterRegistry
{
    private adapters = new Map<string, IAdapter>()

    register(ext: string, adapter: IAdapter)
    {
        this.adapters.set(ext, adapter)
    }

    get(fileName: string): IAdapter
    {
        const ext = path.extname(fileName)
        const adapter = this.adapters.get(ext)

        if (!adapter) throw new Error("file format is wrong")

        return adapter
    }
}