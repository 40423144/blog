var tipuesearch = {"pages":[{"title":"thonhanboy-Snape Svg繪圖範例","text":"以下為繪圖範例 window.onload=function(){ brython(1); } from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) s = snap(\"#svgout1\") # 建立物件時, 同時設定 id 名稱 r = s.rect(10,10,100,100).attr({'id': 'rect'}) c = s.circle(100,100,50).attr({'id': 'circle'}) r.attr('fill', 'red') c.attr({ 'fill': 'blue', 'stroke': 'black', 'strokeWidth': 10 }) r.attr({ 'stroke': '#123456', 'strokeWidth': 20 }) s.text(180,100, '點按一下圖形').attr({'fill' : 'blue', 'stroke': 'blue', 'stroke-width': 0.2 }) g = s.group().attr({'id': 'tux'}) def hoverover(ev): g.animate({'transform': 's1.5r45,t180,20'}, 1000, window.mina.bounce) def hoverout(ev): g.animate({'transform': 's1r0,t180,20'}, 1000, window.mina.bounce) # callback 函式 def onSVGLoaded(data): #s.append(data) g.append(data) #g.hover(hoverover, hoverout ) g.text(300,100, '將滑鼠指向企鵝') # 利用 window.Snap.load 載入 svg 檔案 tux = window.Snap.load(\"http://chiamingyen.github.io/kmolab_data/files/Dreaming_tux.svg\", onSVGLoaded) g.transform('t180,20') # 與視窗事件對應的函式 def rtoyellow(ev): r.attr('fill', 'yellow') def ctogreen(ev): c.attr('fill', 'green') # 根據物件 id 綁定滑鼠事件執行對應函式 document['rect'].bind('click', rtoyellow) document['circle'].bind('click', ctogreen) document['tux'].bind('mouseover', hoverover) document['tux'].bind('mouseleave', hoverout)","url":"http://40423144.github.io/blog/post/thonhanboy-snape-svghui-tu-fan-li.html","tags":"規劃"},{"title":"admin-Snape Svg繪圖範例","text":"以下為繪圖範例 window.onload=function(){ brython(1); } from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) s = snap(\"#svgout1\") # 建立物件時, 同時設定 id 名稱 r = s.rect(10,10,100,100).attr({'id': 'rect'}) c = s.circle(100,100,50).attr({'id': 'circle'}) r.attr('fill', 'red') c.attr({ 'fill': 'blue', 'stroke': 'black', 'strokeWidth': 10 }) r.attr({ 'stroke': '#123456', 'strokeWidth': 20 }) s.text(180,100, '點按一下圖形').attr({'fill' : 'blue', 'stroke': 'blue', 'stroke-width': 0.2 }) g = s.group().attr({'id': 'tux'}) def hoverover(ev): g.animate({'transform': 's1.5r45,t180,20'}, 1000, window.mina.bounce) def hoverout(ev): g.animate({'transform': 's1r0,t180,20'}, 1000, window.mina.bounce) # callback 函式 def onSVGLoaded(data): #s.append(data) g.append(data) #g.hover(hoverover, hoverout ) g.text(300,100, '將滑鼠指向企鵝') # 利用 window.Snap.load 載入 svg 檔案 tux = window.Snap.load(\"http://chiamingyen.github.io/kmolab_data/files/Dreaming_tux.svg\", onSVGLoaded) g.transform('t180,20') # 與視窗事件對應的函式 def rtoyellow(ev): r.attr('fill', 'yellow') def ctogreen(ev): c.attr('fill', 'green') # 根據物件 id 綁定滑鼠事件執行對應函式 document['rect'].bind('click', rtoyellow) document['circle'].bind('click', ctogreen) document['tux'].bind('mouseover', hoverover) document['tux'].bind('mouseleave', hoverout)","url":"http://40423144.github.io/blog/post/admin-snape-svghui-tu-fan-li.html","tags":"規劃"},{"title":"Snape Svg繪圖範例","text":"以下為繪圖範例 window.onload=function(){ brython(1); } from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) s = snap(\"#svgout1\") # 建立物件時, 同時設定 id 名稱 r = s.rect(10,10,100,100).attr({'id': 'rect'}) c = s.circle(100,100,50).attr({'id': 'circle'}) r.attr('fill', 'red') c.attr({ 'fill': 'blue', 'stroke': 'black', 'strokeWidth': 10 }) r.attr({ 'stroke': '#123456', 'strokeWidth': 20 }) s.text(180,100, '點按一下圖形').attr({'fill' : 'blue', 'stroke': 'blue', 'stroke-width': 0.2 }) g = s.group().attr({'id': 'tux'}) def hoverover(ev): g.animate({'transform': 's1.5r45,t180,20'}, 1000, window.mina.bounce) def hoverout(ev): g.animate({'transform': 's1r0,t180,20'}, 1000, window.mina.bounce) # callback 函式 def onSVGLoaded(data): #s.append(data) g.append(data) #g.hover(hoverover, hoverout ) g.text(300,100, '將滑鼠指向企鵝') # 利用 window.Snap.load 載入 svg 檔案 tux = window.Snap.load(\"http://chiamingyen.github.io/kmolab_data/files/Dreaming_tux.svg\", onSVGLoaded) g.transform('t180,20') # 與視窗事件對應的函式 def rtoyellow(ev): r.attr('fill', 'yellow') def ctogreen(ev): c.attr('fill', 'green') # 根據物件 id 綁定滑鼠事件執行對應函式 document['rect'].bind('click', rtoyellow) document['circle'].bind('click', ctogreen) document['tux'].bind('mouseover', hoverover) document['tux'].bind('mouseleave', hoverout)","url":"http://40423144.github.io/blog/post/snape-svghui-tu-fan-li.html","tags":"規劃"},{"title":"template-啟動電腦輔助機械設計手冊編輯","text":"手冊類別分為 OnShape, Solvespace, FreeCAD, Elmer, V-rep 以及 Jupyter, 加上範例, 編寫模式與架構則透過 Leo Editor, Pelican, 與 Github pull requests 完成. http://40423144.github.io/blog","url":"http://40423144.github.io/blog/post/template-qi-dong-dian-nao-fu-zhu-ji-jie-she-ji-shou-ce-bian-ji.html","tags":"規劃"}]};