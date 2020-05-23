const assetMaps = {
	assets: '../../assets/image',
  theme: '../../../assets/image',
}
module.exports = function ($name, $type = 'assets') {
  return 'url(' + (assetMaps[$type] || $type) + $name + ')';
}