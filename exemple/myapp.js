var Mega_Torrent = require('../src/index.js')
var mega_t = new Mega_Torrent({
  email: 'pixpypix@gmail.com',
  password: 'samokko97001'
})

var url = 'magnet:?xt=urn:btih:78E9888E1F8006E5D542B4D20D0F4ABCAB43AD0F&dn=%5bFreeCourseSite.com%5d%20Udemy%20-%20Complete%20Blender%20Creator%20Learn%203D%20Modelling%20for%20Beginners&tr=udp%3a%2f%2fzephir.monocul.us%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftorrentclub.tech%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filepit.to%3a6969%2fannounce&tr=http%3a%2f%2fopentracker.h4ck.me%3a6969%2fannounce&tr=http%3a%2f%2fgwp2-v19.rinet.ru%3a80%2fannounce&tr=udp%3a%2f%2fbigfoot1942.sektori.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.files.fm%3a6969%2fannounce&tr=http%3a%2f%2fretracker.joxnet.ru%3a80%2fannounce&tr=http%3a%2f%2ftracker.moxing.party%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2fthetracker.org%3a80%2fannounce&tr=http%3a%2f%2ftorrent.nwps.ws%3a80%2fannounce&tr=udp%3a%2f%2ftracker.iamhansen.xyz%3a2000%2fannounce&tr=https%3a%2f%2ftracker.vectahosting.eu%3a2053%2fannounce&tr=https%3a%2f%2ftracker.parrotsec.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.supertracker.net%3a1337%2fannounce&tr=udp%3a%2f%2fcarapax.net%3a6969%2fannounce&tr=udp%3a%2f%2fxxx.xx-x.ga%3a53%2fannounce&tr=udp%3a%2f%2fretracker.maxnet.ua%3a80%2fannounce&tr=udp%3a%2f%2ftracker.uw0.xyz%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.netbynet.ru%3a2710%2fannounce&tr=http%3a%2f%2fbt-tracker.gamexp.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.dy20188.com%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.baikal-telecom.net%3a2710%2fannounce&tr=udp%3a%2f%2fretracker.akado-ural.ru%3a80%2fannounce&tr=udp%3a%2f%2fdenis.stalker.upeer.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.si%3a1337%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.c'
mega_t.download(url)

setInterval(function () {
  var client = mega_t.getClients()[url]
  var mega = mega_t.getMegas()[url]
  if (client) {
    console.log('Download progress: ', Math.round(client.getProgress() * 100), '%')
  }
  if (mega) {
    console.log('Upload progress: ', Math.round(mega.getProgress() * 100), '%')
  }
}, 500)
