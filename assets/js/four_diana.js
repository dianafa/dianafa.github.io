'use strict';

var floorPattern = new Four.ImageTexture({ path: '/terrain.jpg', anisotropy: 4, minification: Four.gl.LINEAR_MIPMAP_LINEAR, magnification: Four.gl.LINEAR_MIPMAP_LINEAR, mipmap: true });
var cowLoader = new Four.OBJMeshLoader({ path: '/man.obj' });

function main()
{
    var program = new Four.Program({ selector: '.diana-shader-class' });
    
    var view = new Four.Framebuffer();
    var camera = new Four.PerspectiveCamera({
        program: program, location: [50, 50, 50]
    });

    var light = new Four.Light({
        program: program,
        location: [10, 10, 10]
    });

    var mesh = new Four.Mesh({
        buffers: new Four.VertexArrayObject({
            program: program,
            attributes: ['vec3 position']
        }),
        vertices: cowLoader.vertices,
        uvs: cowLoader.uvs,
        normals: cowLoader.normals,
        material: new Four.Material({
            program: program,
            diffuse: 0x9F8A60
        })
    });

    scene = new Four.Scene();

    scene.put(mesh);

    scene.render(view, camera, function() {
        program.bind();
        light.bind();

        scene.rotation += 0.25;
    });
}