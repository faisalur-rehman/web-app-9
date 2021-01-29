function joinWithBasePath(filePath) {
  return __basedir + "/views" + filePath;
}

module.exports = joinWithBasePath;
