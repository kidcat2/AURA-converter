/* 

1. ply file data structure

position     x, y, z                  
normal       nx, ny, nz               
color        f_dc_0~2                 
sh_rest      f_rest_0~44              
opacity      opacity                  
scale        scale_0~2                
rotation     rot_0~3                  

data :  [x, y, z, nx, ny, nz, f_dc_0, f_dc_1, f_dc_2, f_rest_0, .. f_rest_44, opacity, scale_x, scale_y, scale_z, rot_x, rot_y, rot_z]

2. splat file data structure

*/

// adpater output data type
export interface GaussianData 
{
    count: number
    positions: Float32Array  
    normals?: Float32Array
    colors: Float32Array 
    sh?: Float32Array
    opacities: Float32Array
    scales: Float32Array
    rotations: Float32Array
}