console.log("VALUABLE RESEARCH NEEDS VALUABLE DATA. PLEASE DON'T CHEAT! \nIf you do please answer in the questionnaire honestly that you did so\nthat we can make sure to not use your data.\nThank you!");Shiny.addCustomMessageHandler("envBanditFiveArms",function(a){a=JSON.parse(JSON.stringify(a));enOne=a.enOne;enTwo=a.enTwo;enThree=a.enThree;enFour=a.enFour;enFive=a.enFive;nTrials=a.nTrials;gameNr=[a.game];nDigits=[a.nDigits]});
function endGame(a,b,d,e,f,g){Shiny.onInputChange("selection",a);Shiny.onInputChange("outcome",b);Shiny.onInputChange("outcomeCum",d);Shiny.onInputChange("respTime",e);Shiny.onInputChange("trial",f);Shiny.onInputChange("gameNr",g)}function myRound(a,b){var d=Math.pow(10,b);return Math.round(a*d)/d}function newGame(){ind=[];selection=[];outcome=[];outcomeCum=[];t=[Date.now()];respTime=[];trial=[];clickEnabled=[1]}function add(a,b){return a+b}
function updateBanditFiveArms(a,b,d,e,f,g,r,k,u,A,B,C,c,w,v,l,m,n,p,x,y,h,q,z){c.length<n&&1===q[q.length-1]&&(u=Date.now(),q.push(0),x.push((u-h[h.length-1])/1E3),h.push(u),a=document.getElementById(a),b=document.getElementById(b),d=document.getElementById(d),e=document.getElementById(e),f=document.getElementById(f),g=document.getElementById(g),h=document.getElementById(r),r=0===k[c.length]?"#BEBEBE":0>k[c.length]?"#FF6A6A":"#00CD00",a.innerHTML=k[c.length],a.style.color=r,m[m.lenth]!=w&&(b.innerHTML=
" ",d.innerHTML=" ",e.innerHTML=" ",f.innerHTML=" "),m.push(w),v.push(k[c.length]),y.push(c.length+1),h.innerHTML=n-(c.length+1),l.push(v.reduce(add,0)),c.push(1),p.length<n&&p.push(p[0]),g.innerHTML=myRound(l[l.length-1],z),c.length===n&&endGame(m,v,l,x,y,p),setTimeout(function(){q.push(1)},500))};