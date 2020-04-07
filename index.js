const {BrowserWindow} = require('electron').remote;
var w = BrowserWindow.getFocusedWindow();

q.get('#minimize').on('click',e=>w.minimize());
//q.get('#maximize').on('click',e=>{w.isMaximized()?w.restore():w.maximize()});
q.get('#close').on('click',e=>w.close());

q.forAll('.tabs>li',s=>{
  s.on('click',e=>{
    q.forAll('.tabs>li',n=>{
      n.delClass('selected');
    });
    var x = e.target;
    if (e.target.nodeName == 'A') { x = e.target.parentNode }
    x.addClass('selected');
    q.forAll('.cont',n=>{
      n.style.display = 'none';
    });
    q.get('#tab'+x.id).style.display = 'block';
  });
});

q.get('#overview').click();
