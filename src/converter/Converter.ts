import { AdapterRegistry } from "../adapters/AdapterRegistry";
import { PlyAdapter } from "../adapters/PlyAdapter";


export class Converter 
{
    // 파이프라인 
    private adapterRegistry = new AdapterRegistry()

    constructor()
    {
        // regist adapter
        this.adapterRegistry.register(".ply", new PlyAdapter())
    }

    run(buffer: ArrayBuffer, fileName: string)
    {
        //Adapter : .ply => GaussianData
        const adapter = this.adapterRegistry.get(fileName)
        const gaussianData = adapter.parse(buffer)

        console.log("adapter complete")
        
        //Primitive: GaussianData => 2dgs, billboard, mesh

        //Geometry: 2dgs, billboard, mesh => ConvertedGeometry

        //glb : ConvertedGeometry => gltf, glb
    }
}