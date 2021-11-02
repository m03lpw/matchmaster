var cp = "V Bucks";
var codcp = ['2,000','6,000','2,000','2,000','4,000','2,000','10,000','6,000','4,000','4,000'];	
var names = ['roger32', 'hiroshima', 'Rob001', 'Aliyt', 'Prim', 'Grequod', 'Moseeld30', 'Allichere', 'Munplad60', 'Therainged', 'Perseent', 'Wasice59', 'Arrent', 'Quot1991', 'Yourlenis', 'Doge', 'Obama', 'Putin', 'FUCKER', 'santa', 'Troll', 'Over9000', 'CIA', 'MasterYoda', 'agarmaster', 'ProBro', 'Gandalf', 'TWTClan' , 'Smasher' , 'Devil0152'];	
function create() {
VanillaToasts.create({
  title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
  text: document.body.valueToUse = codcp[Math.floor(Math.random() * codcp.length)] + cp,
  type: 'success',
  icon: 'img/favicon.png',
  timeout: 2500,
});
setTimeout(create, 6000)
}