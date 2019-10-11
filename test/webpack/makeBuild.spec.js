import makeBuild from '../../stack/webpack/makeBuild'

try {
makeBuild();
} catch(err){
  console.log('err :', err);
}
