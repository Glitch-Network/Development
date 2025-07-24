
// atob is d

self.__uv$config = {
    prefix: "/assets-images/",
    encodeUrl: url => Ultraviolet.codec.xor.encode((url)),
    decodeUrl: url => Ultraviolet.codec.xor.decode((url)),
    handler: "/uv/uv.handler.js",
    client: "/uv/uv.client.js",
    bare: "/bare/",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
  };