import { GaussianData } from "./GaussianData"
import { ConvertedGeomtry } from "./ConvertedGeometry"

export interface IPrimitve 
{
    build(data :GaussianData) : ConvertedGeomtry
}

