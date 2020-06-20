import path from 'path';

function pathFromRoot(relativePath) {
  return path.join(__dirname, '..', relativePath);
}

const paths = {
  entry: pathFromRoot('src/app/index.jsx'),
  build: {
    output: pathFromRoot('dist'),
    assetsJson: pathFromRoot('webpack/.assets-json'),
  },
  assets: {
    template: pathFromRoot('webpack/template/index.html'),
  },
  alias: {
    webpack: pathFromRoot('webpack'),
    app: pathFromRoot('src/app'),
    components: pathFromRoot('src/app/components'),
    containers: pathFromRoot('src/app/containers'),
    pages: pathFromRoot('src/app/pages'),
    helpers: pathFromRoot('src/app/helpers'),
    resources: pathFromRoot('src/resources'),
    assetsJson: pathFromRoot('webpack/.assets-json'),
  },
};

export default paths;
