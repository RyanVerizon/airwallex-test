import path from 'path';

function pathFromRoot(relativePath) {
  return path.join(__dirname, '..', relativePath);
}

const paths = {
  entry: pathFromRoot('src/app/index.jsx'),
  build: {
    web: pathFromRoot('web'),
    output: pathFromRoot('web/dist'),
    assetsJson: pathFromRoot('webpack/.assets-json'),
  },
  assets: {
    public: pathFromRoot('src/resources/public'),
    sprites: pathFromRoot('src/resources/images'),
  },
  alias: {
    webpack: pathFromRoot('webpack'),
    app: pathFromRoot('src/app'),
    components: pathFromRoot('src/app/components'),
    containers: pathFromRoot('src/app/containers'),
    pages: pathFromRoot('src/app/pages'),
    constants: pathFromRoot('src/app/constants'),
    helpers: pathFromRoot('src/app/helpers'),
    settings: pathFromRoot('src/app/settings'),
    resources: pathFromRoot('src/resources'),
    assetsJson: pathFromRoot('webpack/.assets-json'),
  },
};

export default paths;
