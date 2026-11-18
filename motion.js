/* Parallax, floating and reveal. Respects reduced motion. */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  var bar=document.getElementById('bar');
  if(bar){
    var onScroll=function(){bar.classList.toggle('scrolled',scrollY>24)};
    onScroll();addEventListener('scroll',onScroll,{passive:true});
  }
  if(reduce)return;
  var items=[].slice.call(document.querySelectorAll('[data-speed]'));
  if(!items.length)return;
  var ticking=false;
  function frame(){
    var vh=innerHeight;
    items.forEach(function(el){
      var r=el.parentElement.getBoundingClientRect();
      var mid=r.top+r.height/2-vh/2;
      el.style.setProperty('--py',(mid*-parseFloat(el.dataset.speed)).toFixed(1)+'px');
    });
    ticking=false;
  }
  function req(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
  addEventListener('scroll',req,{passive:true});addEventListener('resize',req);frame();
  /* hero collage follows the pointer a little */
  var hero=document.querySelector('.hx');
  if(hero&&matchMedia('(pointer:fine)').matches){
    hero.addEventListener('pointermove',function(e){
      var r=hero.getBoundingClientRect();
      hero.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5).toFixed(3));
      hero.style.setProperty('--my',((e.clientY-r.top)/r.height-.5).toFixed(3));
    });
  }
})();
