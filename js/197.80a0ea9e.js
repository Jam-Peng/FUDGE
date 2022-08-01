"use strict";(self["webpackChunkfudge"]=self["webpackChunkfudge"]||[]).push([[197],{2278:function(e,s){s["Z"]={data(){return{orderId:"",order:{user:{}},originalTotal:0,shippingFee:80,locationName:"",locationAddress:"",completeOrderId:""}},methods:{getOrder(){const e=`https://vue3-course-api.hexschool.io/api/pengplan-api/order/${this.orderId}`;this.$http.get(e).then((e=>{e.data.success&&(this.order=e.data.order,this.locationName=this.order.user.clientLocation.name,this.locationAddress=this.order.user.clientLocation.dress,this.originalTotal=this.order.user.originalTotal,this.completeOrderId=this.order.id)})).catch((()=>{this.pushMessage(!1,"讀取","發生錯誤，請重新整理頁面再試一次")}))},OrderPayment(){const e=`https://vue3-course-api.hexschool.io/api/pengplan-api/pay/${this.orderId}`;this.$http.post(e).then((e=>{e.data.success&&(this.$refs.completePayModal.showModel(),this.getOrder())})).catch((()=>{this.pushMessage(!1,"載入","發生錯誤，請重新整理頁面")}))},goShopping(){this.$router.push("/")}}}},1699:function(e,s,l){l.d(s,{Z:function(){return h}});var t=l(3396),d=l(7139);const o={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},c={class:"modal-dialog modal-md p-2",role:"document"},a={class:"modal-content border-0 p-4"},r={class:"modal_header row position-relative"},n=(0,t._)("div",{class:"modal-title col-sm-12 d-flex justify-content-center",id:"exampleModalLabel"},[(0,t._)("span",{class:"fs-5"},"已完成付款")],-1),i=(0,t._)("i",{class:"bi bi-x-lg"},null,-1),m=[i],p={class:"modal-body"},_={class:"row orderPay_text"},u={class:"col-sm-12 d-flex justify-content-center align-items-center mb-4"},b=(0,t._)("label",{for:"title",class:"form-label mb-0"},[(0,t._)("i",{class:"bi bi-tags-fill"}),(0,t.Uk)(" 訂單編號：")],-1),v={class:""},x={class:"modal_footer d-flex justify-content-evenly"};function f(e,s,l,i,f,w){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",c,[(0,t._)("div",a,[(0,t._)("div",r,[n,(0,t._)("button",{type:"button",class:"btn btn-outline-danger d-flex justify-content-center align-items-center completePay_Modal",onClick:s[0]||(s[0]=(...s)=>e.hideModal&&e.hideModal(...s))},m)]),(0,t._)("div",p,[(0,t._)("div",_,[(0,t._)("div",u,[b,(0,t._)("span",v,(0,d.zw)(f.orderCode),1)])])]),(0,t._)("div",x,[(0,t._)("button",{type:"button",class:"col-sm-3 btn btn-secondary btn-sm",onClick:s[1]||(s[1]=(...e)=>w.intoIndex&&w.intoIndex(...e))}," 繼續購物 "),(0,t._)("button",{type:"button",class:"col-sm-3 btn btn-outline-secondary btn-sm",onClick:s[2]||(s[2]=(...e)=>w.goCheckOrder&&w.goCheckOrder(...e))}," 訂單查詢 ")])])])],512)}var w=l(1339),g={data(){return{modal:{},orderCode:""}},props:["orderId"],watch:{orderId(){this.orderCode=this.orderId}},methods:{intoIndex(){this.$router.push("/"),this.modal.hide()},goCheckOrder(){this.$router.push("/checkOrder"),this.modal.hide()}},mixins:[w.Z]},y=l(89);const k=(0,y.Z)(g,[["render",f]]);var h=k},304:function(e,s,l){l.d(s,{Z:function(){return Z}});var t=l(3396);const d={class:"container-fluid bg-light p-5 mt-4 footer_text d-none d-md-block d-lg-block"},o={class:"row px-4"},c={class:"col-md-12 d-flex pb-3"},a={class:"col-12 col-md-6 d-flex"},r={class:"col pe-3"},n=(0,t._)("span",null,"最新消息",-1),i=(0,t._)("i",{class:"bi bi-plus"},null,-1),m={class:"col pe-3"},p=(0,t._)("span",null,"售後服務",-1),_=(0,t._)("i",{class:"bi bi-plus"},null,-1),u={class:"col pe-3"},b=(0,t._)("span",null,"後台管理",-1),v=(0,t._)("i",{class:"bi bi-plus"},null,-1),x=(0,t._)("div",{class:"col-12 col-md-6 d-flex flex-column ps-4"},[(0,t._)("span",{class:"pb-2"},"SERVICE"),(0,t._)("span",null,"MON.-FRI. 09:00-12:00 / 13:00-18:00"),(0,t._)("span",null," service@fudge.com.tw")],-1),f=(0,t._)("div",{class:"col-md-12 d-flex flex-column pt-2"},[(0,t._)("span",{class:"pb-2"},"© FUDGE All Rights Reserved."),(0,t._)("span",null,"本網頁僅供學習使用 無任何商業用途")],-1),w={class:"container-fluid bg-light p-4 mt-4 footer_text d-block d-sm-none"},g={class:"row justify-content-center"},y={class:"col-10 pb-3 d-flex justify-content-evenly"},k={class:"row d-flex pb-3"},h={class:"col-12 pe-3 pb-1"},I=(0,t._)("span",null,"最新消息",-1),z=(0,t._)("i",{class:"bi bi-plus"},null,-1),D={class:"col-12 pe-3 pb-1"},j=(0,t._)("span",null,"售後服務",-1),W=(0,t._)("i",{class:"bi bi-plus"},null,-1),T={class:"col-12 pe-3 pb-1"},C=(0,t._)("span",null,"後台管理",-1),N=(0,t._)("i",{class:"bi bi-plus"},null,-1),$=(0,t.uE)('<div class="row d-flex flex-column pb-2"><span class="col-12">MON.-FRI. 09:00-12:00 / 13:00-18:00</span><span class="col-12"> service@fudge.com.tw</span></div><div class="row d-flex flex-column pt-2"><span class="col-12">© FUDGE All Rights Reserved.</span><span class="col-12">本網頁僅供學習使用 無任何商業用途</span></div>',2);function O(e,s){const l=(0,t.up)("font-awesome-icon"),O=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",d,[(0,t._)("div",o,[(0,t._)("div",c,[(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_fb",icon:["fab","facebook-f"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_ig",icon:["fab","instagram"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_line",icon:["fab","line"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_yt",icon:["fab","youtube"]})])),_:1})]),(0,t._)("div",a,[(0,t._)("div",r,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[n,i])),_:1})]),(0,t._)("div",m,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[p,_])),_:1})]),(0,t._)("div",u,[(0,t.Wm)(O,{to:"/dashboard/products",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[b,v])),_:1})])]),x,f])]),(0,t._)("div",w,[(0,t._)("div",g,[(0,t._)("div",y,[(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_fb",icon:["fab","facebook-f"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_ig",icon:["fab","instagram"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_line",icon:["fab","line"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_yt",icon:["fab","youtube"]})])),_:1})]),(0,t._)("div",k,[(0,t._)("div",h,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[I,z])),_:1})]),(0,t._)("div",D,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[j,W])),_:1})]),(0,t._)("div",T,[(0,t.Wm)(O,{to:"/dashboard/products",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[C,N])),_:1})])]),$])])],64)}var M=l(89);const q={},F=(0,M.Z)(q,[["render",O]]);var Z=F},3197:function(e,s,l){l.r(s),l.d(s,{default:function(){return xs}});var t=l(3396),d=l(7139);const o={class:"container mt-4"},c={class:""},a=(0,t.uE)('<div class="row mb-2 d-none d-md-block d-lg-block"><ul class="d-flex justify-content-evenly px-0"><li class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded py-2"><div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div><div class="d-flex flex-column px-3"><span class="step_text">確認清單及付款方式</span><span class="step_text">Check &amp; Payment </span></div></li><li class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded py-2"><div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div><div class="d-flex flex-column px-3"><span class="step_text">填寫訂購資料</span><span class="step_text">Shipping info </span></div></li><li class="col-lg-3 bg-warning d-flex justify-content-star align-items-center rounded"><div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div><div class="d-flex flex-column step_text px-3"><span>完成購物</span><span>Order completed</span></div></li></ul></div><div class="row mb-2 d-block d-sm-none"><ul class="d-flex justify-content-center px-0"><li class="col-9 bg-warning d-flex justify-content-star align-items-center rounded py-2"><div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div><div class="d-flex flex-column px-3"><span class="step_text">完成購物</span><span class="step_text">Order completed </span></div></li></ul></div>',2),r={class:"row justify-content-center"},n={class:"col-10 col-lg-8 col-md-12 mb-3 bg-light"},i=(0,t._)("div",{class:"row d-flex align-items-center collapsed px-3"},[(0,t._)("div",{class:"col-md-6 fs-3 fw-semibold py-3"},"Orders Info"),(0,t._)("div",{class:"col-md-6 text-end"},[(0,t._)("span",{class:"me-2 step_text"},"訂單資訊")])],-1),m={class:"pb-2 row"},p={class:"col-md-2"},_=["src"],u={class:"col-md-10 d-flex flex-column orderItem_text p-2 ps-0 pe-3"},b={class:"row mb-3 mt-1"},v={class:"col-md-6 d-none d-md-block d-lg-block"},x={class:"me-2"},f={class:"text-secondary"},w={class:"col-md-6 ms-2 d-block d-sm-none"},g={class:"me-2"},y={class:"text-secondary"},k={class:"col-md-6 text-end d-none d-md-block d-lg-block"},h={class:"col-md-6 ms-2 d-block d-sm-none"},I={class:"price_text mt-1 d-none d-md-block d-lg-block"},z={key:0,class:"price_text d-none d-md-block d-lg-block"},D={key:1,class:"price_text d-none d-md-block d-lg-block"},j={class:"price_text text-end d-block d-sm-none"},W={key:2,class:"price_text text-end d-block d-sm-none"},T={key:3,class:"price_text text-end d-block d-sm-none"},C=(0,t._)("hr",{class:"col-11 mx-auto mt-3"},null,-1),N={class:"p-4 py-2"},$={class:"col-lg-6 ms-auto orderItem_text text-secondary"},O={class:"row mb-1"},M=(0,t._)("span",{class:"col"},"商品總金額",-1),q={class:"col text-end"},F={class:"row mb-1"},Z=(0,t._)("div",{class:"col d-flex justify-content-start"},[(0,t._)("span",{class:"col-lg-12 col-md-3 me-1"},"電子折價卷")],-1),P={key:0,class:"col text-end"},S={key:1,class:"col text-end"},A={class:"row mb-1"},E=(0,t._)("span",{class:"col"},"運費",-1),R={key:0,class:"col text-end"},U={key:1,class:"col text-end"},L=(0,t._)("div",{class:"row mb-1"},[(0,t._)("span",{class:"col"},"購物金"),(0,t._)("span",{class:"col text-end"},"-0")],-1),H={class:"row mb-1"},Y={class:"text-end"},G=(0,t._)("span",{class:"me-2"}," 總金額:",-1),K={key:0,class:"fs-3 text-end"},V={key:1,class:"fs-3"},B={class:"col-10 col-lg-8 col-md-12 mb-5"},J={class:"row"},Q={class:"p-4 mb-3 bg-light"},X=(0,t._)("div",{class:"mb-3 px-2 orderItem_text fw-semibold"},[(0,t._)("span",null,"訂購人資訊")],-1),ee={class:"col-md-12 mb-2 px-2 orderItem_text"},se={class:"row px-2"},le={class:"col-md-6 mb-2 orderItem_text"},te={class:"col-md-6 mb-2 orderItem_text"},de={class:"row px-2"},oe={class:"col-md-6 mb-2 orderItem_text"},ce={class:"col-md-6 mb-2 orderItem_text"},ae={class:"col-md-12 mb-2 px-2 orderItem_text"},re={class:"col-md-12 mb-0 px-2 orderItem_text"},ne={key:0,class:"p-4 mb-3 bg-light"},ie=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),me={class:"receiverForm"},pe={class:"col-md-12 mb-2 px-2 orderItem_text"},_e={class:"row px-2"},ue={class:"col-md-6 mb-2 orderItem_text"},be={class:"col-md-6 mb-2 orderItem_text"},ve={class:"row px-2"},xe={class:"col-md-6 mb-2 orderItem_text"},fe={class:"col-md-6 mb-2 orderItem_text"},we={class:"col-md-12 mb-2 px-2 orderItem_text"},ge={class:"col-md-12 mb-0 px-2 orderItem_text"},ye={key:1,class:"p-4 mb-3 bg-light"},ke=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),he={class:"receiverForm"},Ie={class:"col-md-12 mb-2 px-2 orderItem_text"},ze={key:2,class:"p-4 mb-3 bg-light"},De=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),je={class:"receiverForm"},We={class:"col-md-12 mb-2 px-2 orderItem_text"},Te={class:"row px-2"},Ce={class:"col-md-6 mb-2 orderItem_text"},Ne={class:"col-md-6 mb-2 orderItem_text"},$e={class:"col-md-12 mb-2 px-2 orderItem_text"},Oe=(0,t.Uk)(" 取貨門市："),Me=(0,t._)("i",{class:"bi bi-geo-fill"},null,-1),qe={class:"p-4 mb-3 bg-light"},Fe=(0,t._)("div",{class:"row px-2 mb-3 orderItem_text"},[(0,t._)("span",{class:"fw-semibold col-md-8"},"配送資訊")],-1),Ze={class:"receiverForm"},Pe={class:"col-md-12 mb-2 px-2 orderItem_text"},Se={class:"col-md-12 mb-2 px-2 orderItem_text"},Ae={key:0},Ee=(0,t._)("div",{class:"row px-2 mb-1 ticket_dress"},[(0,t._)("span",{class:"col-md-12 text-secondary"},"中獎發票寄送地址")],-1),Re={class:"row px-2"},Ue={class:"col-md-6 mb-2 orderItem_text"},Le={class:"col-md-6 mb-2 orderItem_text"},He={class:"col-md-12 mb-2 px-2 orderItem_text"},Ye={key:1},Ge=(0,t._)("div",{class:"row px-2 mb-1 ticket_dress"},[(0,t._)("span",{class:"col-md-12 text-secondary"},"手機載具條碼")],-1),Ke={class:"col-md-5 mb-2 px-2 ms-1 orderItem_text border"},Ve={key:2,class:"col-md-12 mb-2 px-2 orderItem_text"},Be={class:"mb-4 px-0 border border-secondary"},Je={class:"p-4"},Qe=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"付款資訊")],-1),Xe={class:"receiverForm"},es={class:"col-md-12 px-2 d-flex align-item-center orderItem_text"},ss=(0,t._)("span",null,"付款狀態：",-1),ls={key:0,class:"badge text-bg-secondary px-3"},ts={key:1,class:"badge text-bg-warning px-3"},ds={class:"mb-3"},os={class:"row justify-content-center"},cs={key:0,class:"col-md-4 d-flex justify-content-center"},as={key:1,class:"col-md-4 d-flex justify-content-center"};function rs(e,s,l,rs,ns,is){const ms=(0,t.up)("Footer"),ps=(0,t.up)("CompletePayModal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",o,[(0,t._)("div",c,[a,(0,t._)("div",r,[(0,t._)("div",n,[i,(0,t._)("div",m,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.order.products,(s=>((0,t.wg)(),(0,t.iD)("div",{class:"d-flex justify-content-star pt-2",key:s.id},[(0,t._)("div",p,[(0,t._)("img",{class:"img-fluid cart_img p-2 mb-2 ms-2",src:s.product.images[0],alt:""},null,8,_)]),(0,t._)("div",u,[(0,t._)("div",b,[(0,t._)("div",v,[(0,t._)("span",x,(0,d.zw)(s.product.title),1),(0,t._)("span",f,(0,d.zw)(s.size),1)]),(0,t._)("div",w,[(0,t._)("span",g,(0,d.zw)(s.product.title),1),(0,t._)("span",y,(0,d.zw)(s.size),1)]),(0,t._)("span",k,"數量："+(0,d.zw)(s.qty),1),(0,t._)("span",h,"數量："+(0,d.zw)(s.qty),1)]),(0,t._)("span",I,"單價 NT."+(0,d.zw)(e.$filters.currency(s.product.price)),1),s.final_total===s.total?((0,t.wg)(),(0,t.iD)("span",z,"小計 NT."+(0,d.zw)(e.$filters.currency(s.total)),1)):(0,t.kq)("",!0),s.final_total!==s.total?((0,t.wg)(),(0,t.iD)("span",D,"折扣小計 NT."+(0,d.zw)(e.$filters.currency(s.final_total)),1)):(0,t.kq)("",!0),(0,t._)("span",j,"單價 NT."+(0,d.zw)(e.$filters.currency(s.product.price)),1),s.final_total===s.total?((0,t.wg)(),(0,t.iD)("span",W,"小計 NT."+(0,d.zw)(e.$filters.currency(s.total)),1)):(0,t.kq)("",!0),s.final_total!==s.total?((0,t.wg)(),(0,t.iD)("span",T,"折扣小計 NT."+(0,d.zw)(e.$filters.currency(s.final_total)),1)):(0,t.kq)("",!0)])])))),128)),C,(0,t._)("div",N,[(0,t._)("div",$,[(0,t._)("div",O,[M,(0,t._)("span",q,(0,d.zw)(e.$filters.currency(e.originalTotal)),1)]),(0,t._)("div",F,[Z,e.originalTotal!==e.order.total?((0,t.wg)(),(0,t.iD)("span",P,"-"+(0,d.zw)(e.$filters.currency(e.originalTotal-e.order.total)),1)):((0,t.wg)(),(0,t.iD)("span",S,"-0"))]),(0,t._)("div",A,[E,e.originalTotal<1e3?((0,t.wg)(),(0,t.iD)("span",R,(0,d.zw)(e.shippingFee),1)):((0,t.wg)(),(0,t.iD)("span",U,"0"))]),L,(0,t._)("div",H,[(0,t._)("div",Y,[G,e.originalTotal<1e3?((0,t.wg)(),(0,t.iD)("span",K,"NT."+(0,d.zw)(e.$filters.currency(e.order.total+e.shippingFee)),1)):((0,t.wg)(),(0,t.iD)("span",V,"NT."+(0,d.zw)(e.$filters.currency(e.order.total)),1))])])])])])]),(0,t._)("div",B,[(0,t._)("div",J,[(0,t._)("div",Q,[X,(0,t._)("div",ee,[(0,t._)("span",null,"姓名："+(0,d.zw)(e.order.user.name),1)]),(0,t._)("div",se,[(0,t._)("div",le,[(0,t._)("span",null,"國家："+(0,d.zw)(e.order.user.nation),1)]),(0,t._)("div",te,[(0,t._)("span",null,"手機號碼："+(0,d.zw)(e.order.user.tel),1)])]),(0,t._)("div",de,[(0,t._)("div",oe,[(0,t._)("span",null,"居住縣市："+(0,d.zw)(e.order.user.city),1)]),(0,t._)("div",ce,[(0,t._)("span",null,"居住地區："+(0,d.zw)(e.order.user.area),1)])]),(0,t._)("div",ae,[(0,t._)("span",null,"地址："+(0,d.zw)(e.order.user.address),1)]),(0,t._)("div",re,[(0,t._)("span",null,"E-mail："+(0,d.zw)(e.order.user.email),1)])]),"不同購買人"===e.order.user.receiverInput?((0,t.wg)(),(0,t.iD)("div",ne,[ie,(0,t._)("div",me,[(0,t._)("div",pe,[(0,t._)("span",null,"姓名："+(0,d.zw)(e.order.user.receiverName),1)]),(0,t._)("div",_e,[(0,t._)("div",ue,[(0,t._)("span",null,"國家："+(0,d.zw)(e.order.user.receiverNation),1)]),(0,t._)("div",be,[(0,t._)("span",null,"手機號碼："+(0,d.zw)(e.order.user.receiverTel),1)])]),(0,t._)("div",ve,[(0,t._)("div",xe,[(0,t._)("span",null,"居住縣市："+(0,d.zw)(e.order.user.receiverCity),1)]),(0,t._)("div",fe,[(0,t._)("span",null,"居住地區："+(0,d.zw)(e.order.user.receiverArea),1)])]),(0,t._)("div",we,[(0,t._)("span",null,"地址："+(0,d.zw)(e.order.user.receiverAddress),1)]),(0,t._)("div",ge,[(0,t._)("span",null,"E-mail："+(0,d.zw)(e.order.user.receiverEmail),1)])])])):(0,t.kq)("",!0),"同購買人"===e.order.user.receiverInput&&""===e.order.user.receiverShopName?((0,t.wg)(),(0,t.iD)("div",ye,[ke,(0,t._)("div",he,[(0,t._)("div",Ie,[(0,t._)("span",null,"收件人："+(0,d.zw)(e.order.user.receiverInput),1)])])])):(0,t.kq)("",!0),""!==e.order.user.receiverShopName?((0,t.wg)(),(0,t.iD)("div",ze,[De,(0,t._)("div",je,[(0,t._)("div",We,[(0,t._)("span",null,"姓名："+(0,d.zw)(e.order.user.receiverShopName),1)]),(0,t._)("div",Te,[(0,t._)("div",Ce,[(0,t._)("span",null,"國家："+(0,d.zw)(e.order.user.receiverShopNation),1)]),(0,t._)("div",Ne,[(0,t._)("span",null,"手機號碼："+(0,d.zw)(e.order.user.receiverShopTel),1)])]),(0,t._)("div",$e,[(0,t._)("span",null,[Oe,Me,(0,t.Uk)(" "+(0,d.zw)(e.locationName)+" - "+(0,d.zw)(e.locationAddress),1)])])])])):(0,t.kq)("",!0),(0,t._)("div",qe,[Fe,(0,t._)("div",Ze,[(0,t._)("div",Pe,[(0,t._)("span",null,"配送時間："+(0,d.zw)(e.order.user.deliverTime),1)]),(0,t._)("div",Se,[(0,t._)("span",null,"發票形式："+(0,d.zw)(e.order.user.deliverTicket),1)]),"電子發票"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",Ae,[Ee,(0,t._)("div",Re,[(0,t._)("div",Ue,[(0,t._)("span",null,"縣市："+(0,d.zw)(e.order.user.deliverCity),1)]),(0,t._)("div",Le,[(0,t._)("span",null,"地區："+(0,d.zw)(e.order.user.deliverArea),1)])]),(0,t._)("div",He,[(0,t._)("span",null,"地址："+(0,d.zw)(e.order.user.deliverAddress),1)])])):(0,t.kq)("",!0),"電子發票(手機載具)"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",Ye,[Ge,(0,t._)("div",Ke,[(0,t._)("span",null,(0,d.zw)(e.order.user.mobileCode),1)])])):(0,t.kq)("",!0),"捐贈發票"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",Ve,[(0,t._)("span",null,"捐贈單位："+(0,d.zw)(e.order.user.invoiceDonate),1)])):(0,t.kq)("",!0)])]),(0,t._)("div",Be,[(0,t._)("div",Je,[Qe,(0,t._)("div",Xe,[(0,t._)("div",es,[ss,e.order.is_paid?((0,t.wg)(),(0,t.iD)("span",ts,"完成付款")):((0,t.wg)(),(0,t.iD)("span",ls,"尚未付款"))])])])]),(0,t._)("div",ds,[(0,t._)("div",os,[!1===e.order.is_paid?((0,t.wg)(),(0,t.iD)("div",cs,[(0,t._)("button",{class:"btn btn-secondary btn-sm p-2 px-5",onClick:s[0]||(s[0]=(...s)=>e.OrderPayment&&e.OrderPayment(...s))}," 確認付款 ")])):(0,t.kq)("",!0),!0===e.order.is_paid?((0,t.wg)(),(0,t.iD)("div",as,[(0,t._)("button",{class:"btn btn-secondary btn-sm p-2 px-5",onClick:s[1]||(s[1]=(...s)=>e.goShopping&&e.goShopping(...s))}," 前往賣場 ")])):(0,t.kq)("",!0)])])])])])])]),(0,t.Wm)(ms),(0,t.Wm)(ps,{ref:"completePayModal",orderId:e.completeOrderId},null,8,["orderId"])],64)}var ns=l(1699),is=l(304),ms=l(3766),ps=l(9233),_s=l(2278),us={components:{CompletePayModal:ns.Z,Footer:is.Z},methods:{...(0,ms.nv)(ps.Z,["pushMessage"])},mixins:[_s.Z],created(){this.orderId=this.$route.params.orderId,this.getOrder()}},bs=l(89);const vs=(0,bs.Z)(us,[["render",rs]]);var xs=vs}}]);
//# sourceMappingURL=197.80a0ea9e.js.map