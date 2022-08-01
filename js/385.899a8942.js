"use strict";(self["webpackChunkfudge"]=self["webpackChunkfudge"]||[]).push([[385],{2278:function(e,s){s["Z"]={data(){return{orderId:"",order:{user:{}},originalTotal:0,shippingFee:80,locationName:"",locationAddress:"",completeOrderId:""}},methods:{getOrder(){const e=`https://vue3-course-api.hexschool.io/api/pengplan-api/order/${this.orderId}`;this.$http.get(e).then((e=>{e.data.success&&(this.order=e.data.order,this.locationName=this.order.user.clientLocation.name,this.locationAddress=this.order.user.clientLocation.dress,this.originalTotal=this.order.user.originalTotal,this.completeOrderId=this.order.id)})).catch((()=>{this.pushMessage(!1,"讀取","發生錯誤，請重新整理頁面再試一次")}))},OrderPayment(){const e=`https://vue3-course-api.hexschool.io/api/pengplan-api/pay/${this.orderId}`;this.$http.post(e).then((e=>{e.data.success&&(this.$refs.completePayModal.showModel(),this.getOrder())})).catch((()=>{this.pushMessage(!1,"載入","發生錯誤，請重新整理頁面")}))},goShopping(){this.$router.push("/")}}}},1699:function(e,s,l){l.d(s,{Z:function(){return h}});var t=l(3396),o=l(7139);const r={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},d={class:"modal-dialog modal-md p-2",role:"document"},c={class:"modal-content border-0 p-4"},a={class:"modal_header row position-relative"},i=(0,t._)("div",{class:"modal-title col-sm-12 d-flex justify-content-center",id:"exampleModalLabel"},[(0,t._)("span",{class:"fs-5"},"已完成付款")],-1),n=(0,t._)("i",{class:"bi bi-x-lg"},null,-1),m=[n],_={class:"modal-body"},p={class:"row orderPay_text"},u={class:"col-sm-12 d-flex justify-content-center align-items-center mb-4"},b=(0,t._)("label",{for:"title",class:"form-label mb-0"},[(0,t._)("i",{class:"bi bi-tags-fill"}),(0,t.Uk)(" 訂單編號：")],-1),v={class:""},x={class:"modal_footer d-flex justify-content-evenly"};function f(e,s,l,n,f,w){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",d,[(0,t._)("div",c,[(0,t._)("div",a,[i,(0,t._)("button",{type:"button",class:"btn btn-outline-danger d-flex justify-content-center align-items-center completePay_Modal",onClick:s[0]||(s[0]=(...s)=>e.hideModal&&e.hideModal(...s))},m)]),(0,t._)("div",_,[(0,t._)("div",p,[(0,t._)("div",u,[b,(0,t._)("span",v,(0,o.zw)(f.orderCode),1)])])]),(0,t._)("div",x,[(0,t._)("button",{type:"button",class:"col-sm-3 btn btn-secondary btn-sm",onClick:s[1]||(s[1]=(...e)=>w.intoIndex&&w.intoIndex(...e))}," 繼續購物 "),(0,t._)("button",{type:"button",class:"col-sm-3 btn btn-outline-secondary btn-sm",onClick:s[2]||(s[2]=(...e)=>w.goCheckOrder&&w.goCheckOrder(...e))}," 訂單查詢 ")])])])],512)}var w=l(1339),g={data(){return{modal:{},orderCode:""}},props:["orderId"],watch:{orderId(){this.orderCode=this.orderId}},methods:{intoIndex(){this.$router.push("/"),this.modal.hide()},goCheckOrder(){this.$router.push("/checkOrder"),this.modal.hide()}},mixins:[w.Z]},k=l(89);const y=(0,k.Z)(g,[["render",f]]);var h=y},304:function(e,s,l){l.d(s,{Z:function(){return Z}});var t=l(3396);const o={class:"container-fluid bg-light p-5 mt-4 footer_text d-none d-md-block d-lg-block"},r={class:"row px-4"},d={class:"col-md-12 d-flex pb-3"},c={class:"col-12 col-md-6 d-flex"},a={class:"col pe-3"},i=(0,t._)("span",null,"最新消息",-1),n=(0,t._)("i",{class:"bi bi-plus"},null,-1),m={class:"col pe-3"},_=(0,t._)("span",null,"售後服務",-1),p=(0,t._)("i",{class:"bi bi-plus"},null,-1),u={class:"col pe-3"},b=(0,t._)("span",null,"後台管理",-1),v=(0,t._)("i",{class:"bi bi-plus"},null,-1),x=(0,t._)("div",{class:"col-12 col-md-6 d-flex flex-column ps-4"},[(0,t._)("span",{class:"pb-2"},"SERVICE"),(0,t._)("span",null,"MON.-FRI. 09:00-12:00 / 13:00-18:00"),(0,t._)("span",null," service@fudge.com.tw")],-1),f=(0,t._)("div",{class:"col-md-12 d-flex flex-column pt-2"},[(0,t._)("span",{class:"pb-2"},"© FUDGE All Rights Reserved."),(0,t._)("span",null,"本網頁僅供學習使用 無任何商業用途")],-1),w={class:"container-fluid bg-light p-4 mt-4 footer_text d-block d-sm-none"},g={class:"row justify-content-center"},k={class:"col-10 pb-3 d-flex justify-content-evenly"},y={class:"row d-flex pb-3"},h={class:"col-12 pe-3 pb-1"},I=(0,t._)("span",null,"最新消息",-1),z=(0,t._)("i",{class:"bi bi-plus"},null,-1),D={class:"col-12 pe-3 pb-1"},W=(0,t._)("span",null,"售後服務",-1),T=(0,t._)("i",{class:"bi bi-plus"},null,-1),C={class:"col-12 pe-3 pb-1"},N=(0,t._)("span",null,"後台管理",-1),$=(0,t._)("i",{class:"bi bi-plus"},null,-1),j=(0,t.uE)('<div class="row d-flex flex-column pb-2"><span class="col-12">MON.-FRI. 09:00-12:00 / 13:00-18:00</span><span class="col-12"> service@fudge.com.tw</span></div><div class="row d-flex flex-column pt-2"><span class="col-12">© FUDGE All Rights Reserved.</span><span class="col-12">本網頁僅供學習使用 無任何商業用途</span></div>',2);function O(e,s){const l=(0,t.up)("font-awesome-icon"),O=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",o,[(0,t._)("div",r,[(0,t._)("div",d,[(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_fb",icon:["fab","facebook-f"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_ig",icon:["fab","instagram"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_line",icon:["fab","line"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary pe-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_yt",icon:["fab","youtube"]})])),_:1})]),(0,t._)("div",c,[(0,t._)("div",a,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[i,n])),_:1})]),(0,t._)("div",m,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[_,p])),_:1})]),(0,t._)("div",u,[(0,t.Wm)(O,{to:"/dashboard/products",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[b,v])),_:1})])]),x,f])]),(0,t._)("div",w,[(0,t._)("div",g,[(0,t._)("div",k,[(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_fb",icon:["fab","facebook-f"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_ig",icon:["fab","instagram"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_line",icon:["fab","line"]})])),_:1}),(0,t.Wm)(O,{to:"/",class:"link-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{class:"icons icons_yt",icon:["fab","youtube"]})])),_:1})]),(0,t._)("div",y,[(0,t._)("div",h,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[I,z])),_:1})]),(0,t._)("div",D,[(0,t.Wm)(O,{to:"/",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[W,T])),_:1})]),(0,t._)("div",C,[(0,t.Wm)(O,{to:"/dashboard/products",class:"link-dark d-flex justify-content-between"},{default:(0,t.w5)((()=>[N,$])),_:1})])]),j])])],64)}var M=l(89);const q={},F=(0,M.Z)(q,[["render",O]]);var Z=F},1385:function(e,s,l){l.r(s),l.d(s,{default:function(){return vs}});var t=l(3396),o=l(7139);const r={class:"container mt-4"},d={class:""},c={class:"row justify-content-center"},a={class:"col-10 col-lg-8 col-md-12 mb-3 bg-light"},i=(0,t._)("div",{class:"row d-flex align-items-center collapsed px-3"},[(0,t._)("div",{class:"col-md-6 fs-3 fw-semibold py-3"},"Orders Info"),(0,t._)("div",{class:"col-md-6 text-end"},[(0,t._)("span",{class:"me-2 step_text"},"訂單資訊")])],-1),n={class:"pb-2 row"},m={class:"col-md-2"},_=["src"],p={class:"col-md-10 d-flex flex-column orderItem_text p-2 ps-0 pe-3"},u={class:"row mb-3 mt-1"},b={class:"col-md-6 d-none d-md-block d-lg-block"},v={class:"me-2"},x={class:"text-secondary"},f={class:"col-md-6 ms-2 d-block d-sm-none"},w={class:"me-2"},g={class:"text-secondary"},k={class:"col-md-6 text-end d-none d-md-block d-lg-block"},y={class:"col-md-6 ms-2 d-block d-sm-none"},h={class:"price_text mt-1 d-none d-md-block d-lg-block"},I={key:0,class:"price_text d-none d-md-block d-lg-block"},z={key:1,class:"price_text d-none d-md-block d-lg-block"},D={class:"price_text text-end d-block d-sm-none"},W={key:2,class:"price_text text-end d-block d-sm-none"},T={key:3,class:"price_text text-end d-block d-sm-none"},C=(0,t._)("hr",{class:"col-11 mx-auto mt-3"},null,-1),N={class:"p-4 py-2"},$={class:"col-lg-6 ms-auto orderItem_text text-secondary"},j={class:"row mb-1"},O=(0,t._)("span",{class:"col"},"商品總金額",-1),M={class:"col text-end"},q={class:"row mb-1"},F=(0,t._)("div",{class:"col d-flex justify-content-start"},[(0,t._)("span",{class:"col-lg-12 col-md-3 me-1"},"電子折價卷")],-1),Z={key:0,class:"col text-end"},A={key:1,class:"col text-end"},P={class:"row mb-1"},S=(0,t._)("span",{class:"col"},"運費",-1),E={key:0,class:"col text-end"},R={key:1,class:"col text-end"},U=(0,t._)("div",{class:"row mb-1"},[(0,t._)("span",{class:"col"},"購物金"),(0,t._)("span",{class:"col text-end"},"-0")],-1),L={class:"row mb-1"},H={class:"text-end"},Y=(0,t._)("span",{class:"me-2"}," 總金額:",-1),G={key:0,class:"fs-3 text-end"},K={key:1,class:"fs-3"},V={class:"col-10 col-lg-8 col-md-12 mb-5"},B={class:"row"},J={class:"p-4 mb-3 bg-light"},Q=(0,t._)("div",{class:"mb-3 px-2 orderItem_text fw-semibold"},[(0,t._)("span",null,"訂購人資訊")],-1),X={class:"col-md-12 mb-2 px-2 orderItem_text"},ee={class:"row px-2"},se={class:"col-md-6 mb-2 orderItem_text"},le={class:"col-md-6 mb-2 orderItem_text"},te={class:"row px-2"},oe={class:"col-md-6 mb-2 orderItem_text"},re={class:"col-md-6 mb-2 orderItem_text"},de={class:"col-md-12 mb-2 px-2 orderItem_text"},ce={class:"col-md-12 mb-0 px-2 orderItem_text"},ae={key:0,class:"p-4 mb-3 bg-light"},ie=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),ne={class:"receiverForm"},me={class:"col-md-12 mb-2 px-2 orderItem_text"},_e={class:"row px-2"},pe={class:"col-md-6 mb-2 orderItem_text"},ue={class:"col-md-6 mb-2 orderItem_text"},be={class:"row px-2"},ve={class:"col-md-6 mb-2 orderItem_text"},xe={class:"col-md-6 mb-2 orderItem_text"},fe={class:"col-md-12 mb-2 px-2 orderItem_text"},we={class:"col-md-12 mb-0 px-2 orderItem_text"},ge={key:1,class:"p-4 mb-3 bg-light"},ke=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),ye={class:"receiverForm"},he={class:"col-md-12 mb-2 px-2 orderItem_text"},Ie={key:2,class:"p-4 mb-3 bg-light"},ze=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"收件人資訊")],-1),De={class:"receiverForm"},We={class:"col-md-12 mb-2 px-2 orderItem_text"},Te={class:"row px-2"},Ce={class:"col-md-6 mb-2 orderItem_text"},Ne={class:"col-md-6 mb-2 orderItem_text"},$e={class:"col-md-12 mb-2 px-2 orderItem_text"},je=(0,t.Uk)(" 取貨門市："),Oe=(0,t._)("i",{class:"bi bi-geo-fill"},null,-1),Me={class:"p-4 mb-3 bg-light"},qe=(0,t._)("div",{class:"row px-2 mb-3 orderItem_text"},[(0,t._)("span",{class:"fw-semibold col-md-8"},"配送資訊")],-1),Fe={class:"receiverForm"},Ze={class:"col-md-12 mb-2 px-2 orderItem_text"},Ae={class:"col-md-12 mb-2 px-2 orderItem_text"},Pe={key:0},Se=(0,t._)("div",{class:"row px-2 mb-1 ticket_dress"},[(0,t._)("span",{class:"col-md-12 text-secondary"},"中獎發票寄送地址")],-1),Ee={class:"row px-2"},Re={class:"col-md-6 mb-2 orderItem_text"},Ue={class:"col-md-6 mb-2 orderItem_text"},Le={class:"col-md-12 mb-2 px-2 orderItem_text"},He={key:1},Ye=(0,t._)("div",{class:"row px-2 mb-1 ticket_dress"},[(0,t._)("span",{class:"col-md-12 text-secondary"},"手機載具條碼")],-1),Ge={class:"col-md-5 mb-2 px-2 ms-1 orderItem_text border"},Ke={key:2,class:"col-md-12 mb-2 px-2 orderItem_text"},Ve={class:"mb-4 px-0 border border-secondary"},Be={class:"p-4"},Je=(0,t._)("div",{class:"px-2 orderItem_text row"},[(0,t._)("span",{class:"col-md-8 mb-3 fw-semibold"},"付款資訊")],-1),Qe={class:"receiverForm"},Xe={class:"col-md-12 px-2 d-flex align-item-center orderItem_text"},es=(0,t._)("span",null,"付款狀態：",-1),ss={key:0,class:"badge text-bg-secondary px-3"},ls={key:1,class:"badge text-bg-warning px-3"},ts={class:"mb-3"},os={class:"row justify-content-center"},rs={key:0,class:"col-md-4 d-flex justify-content-center"},ds={key:1,class:"col-md-4 d-flex justify-content-center"};function cs(e,s,l,cs,as,is){const ns=(0,t.up)("CompletePayModal"),ms=(0,t.up)("Footer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",r,[(0,t._)("div",d,[(0,t._)("div",c,[(0,t._)("div",a,[i,(0,t._)("div",n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.order.products,(s=>((0,t.wg)(),(0,t.iD)("div",{class:"d-flex justify-content-star pt-2",key:s.id},[(0,t._)("div",m,[(0,t._)("img",{class:"img-fluid cart_img p-2 mb-2 ms-2",src:s.product.images[0],alt:""},null,8,_)]),(0,t._)("div",p,[(0,t._)("div",u,[(0,t._)("div",b,[(0,t._)("span",v,(0,o.zw)(s.product.title),1),(0,t._)("span",x,(0,o.zw)(s.size),1)]),(0,t._)("div",f,[(0,t._)("span",w,(0,o.zw)(s.product.title),1),(0,t._)("span",g,(0,o.zw)(s.size),1)]),(0,t._)("span",k,"數量："+(0,o.zw)(s.qty),1),(0,t._)("span",y,"數量："+(0,o.zw)(s.qty),1)]),(0,t._)("span",h,"單價 NT."+(0,o.zw)(e.$filters.currency(s.product.price)),1),s.final_total===s.total?((0,t.wg)(),(0,t.iD)("span",I,"小計 NT."+(0,o.zw)(e.$filters.currency(s.total)),1)):(0,t.kq)("",!0),s.final_total!==s.total?((0,t.wg)(),(0,t.iD)("span",z,"折扣小計 NT."+(0,o.zw)(e.$filters.currency(s.final_total)),1)):(0,t.kq)("",!0),(0,t._)("span",D,"單價 NT."+(0,o.zw)(e.$filters.currency(s.product.price)),1),s.final_total===s.total?((0,t.wg)(),(0,t.iD)("span",W,"小計 NT."+(0,o.zw)(e.$filters.currency(s.total)),1)):(0,t.kq)("",!0),s.final_total!==s.total?((0,t.wg)(),(0,t.iD)("span",T,"折扣小計 NT."+(0,o.zw)(e.$filters.currency(s.final_total)),1)):(0,t.kq)("",!0)])])))),128)),C,(0,t._)("div",N,[(0,t._)("div",$,[(0,t._)("div",j,[O,(0,t._)("span",M,(0,o.zw)(e.$filters.currency(e.originalTotal)),1)]),(0,t._)("div",q,[F,e.originalTotal!==e.order.total?((0,t.wg)(),(0,t.iD)("span",Z,"-"+(0,o.zw)(e.$filters.currency(e.originalTotal-e.order.total)),1)):((0,t.wg)(),(0,t.iD)("span",A,"-0"))]),(0,t._)("div",P,[S,e.originalTotal<1e3?((0,t.wg)(),(0,t.iD)("span",E,(0,o.zw)(e.shippingFee),1)):((0,t.wg)(),(0,t.iD)("span",R,"0"))]),U,(0,t._)("div",L,[(0,t._)("div",H,[Y,e.originalTotal<1e3?((0,t.wg)(),(0,t.iD)("span",G,"NT."+(0,o.zw)(e.$filters.currency(e.order.total+e.shippingFee)),1)):((0,t.wg)(),(0,t.iD)("span",K,"NT."+(0,o.zw)(e.$filters.currency(e.order.total)),1))])])])])])]),(0,t._)("div",V,[(0,t._)("div",B,[(0,t._)("div",J,[Q,(0,t._)("div",X,[(0,t._)("span",null,"姓名："+(0,o.zw)(e.order.user.name),1)]),(0,t._)("div",ee,[(0,t._)("div",se,[(0,t._)("span",null,"國家："+(0,o.zw)(e.order.user.nation),1)]),(0,t._)("div",le,[(0,t._)("span",null,"手機號碼："+(0,o.zw)(e.order.user.tel),1)])]),(0,t._)("div",te,[(0,t._)("div",oe,[(0,t._)("span",null,"居住縣市："+(0,o.zw)(e.order.user.city),1)]),(0,t._)("div",re,[(0,t._)("span",null,"居住地區："+(0,o.zw)(e.order.user.area),1)])]),(0,t._)("div",de,[(0,t._)("span",null,"地址："+(0,o.zw)(e.order.user.address),1)]),(0,t._)("div",ce,[(0,t._)("span",null,"E-mail："+(0,o.zw)(e.order.user.email),1)])]),"不同購買人"===e.order.user.receiverInput?((0,t.wg)(),(0,t.iD)("div",ae,[ie,(0,t._)("div",ne,[(0,t._)("div",me,[(0,t._)("span",null,"姓名："+(0,o.zw)(e.order.user.receiverName),1)]),(0,t._)("div",_e,[(0,t._)("div",pe,[(0,t._)("span",null,"國家："+(0,o.zw)(e.order.user.receiverNation),1)]),(0,t._)("div",ue,[(0,t._)("span",null,"手機號碼："+(0,o.zw)(e.order.user.receiverTel),1)])]),(0,t._)("div",be,[(0,t._)("div",ve,[(0,t._)("span",null,"居住縣市："+(0,o.zw)(e.order.user.receiverCity),1)]),(0,t._)("div",xe,[(0,t._)("span",null,"居住地區："+(0,o.zw)(e.order.user.receiverArea),1)])]),(0,t._)("div",fe,[(0,t._)("span",null,"地址："+(0,o.zw)(e.order.user.receiverAddress),1)]),(0,t._)("div",we,[(0,t._)("span",null,"E-mail："+(0,o.zw)(e.order.user.receiverEmail),1)])])])):(0,t.kq)("",!0),"同購買人"===e.order.user.receiverInput&&""===e.order.user.receiverShopName?((0,t.wg)(),(0,t.iD)("div",ge,[ke,(0,t._)("div",ye,[(0,t._)("div",he,[(0,t._)("span",null,"收件人："+(0,o.zw)(e.order.user.receiverInput),1)])])])):(0,t.kq)("",!0),""!==e.order.user.receiverShopName?((0,t.wg)(),(0,t.iD)("div",Ie,[ze,(0,t._)("div",De,[(0,t._)("div",We,[(0,t._)("span",null,"姓名："+(0,o.zw)(e.order.user.receiverShopName),1)]),(0,t._)("div",Te,[(0,t._)("div",Ce,[(0,t._)("span",null,"國家："+(0,o.zw)(e.order.user.receiverShopNation),1)]),(0,t._)("div",Ne,[(0,t._)("span",null,"手機號碼："+(0,o.zw)(e.order.user.receiverShopTel),1)])]),(0,t._)("div",$e,[(0,t._)("span",null,[je,Oe,(0,t.Uk)(" "+(0,o.zw)(e.locationName)+" - "+(0,o.zw)(e.locationAddress),1)])])])])):(0,t.kq)("",!0),(0,t._)("div",Me,[qe,(0,t._)("div",Fe,[(0,t._)("div",Ze,[(0,t._)("span",null,"配送時間："+(0,o.zw)(e.order.user.deliverTime),1)]),(0,t._)("div",Ae,[(0,t._)("span",null,"發票形式："+(0,o.zw)(e.order.user.deliverTicket),1)]),"電子發票"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",Pe,[Se,(0,t._)("div",Ee,[(0,t._)("div",Re,[(0,t._)("span",null,"縣市："+(0,o.zw)(e.order.user.deliverCity),1)]),(0,t._)("div",Ue,[(0,t._)("span",null,"地區："+(0,o.zw)(e.order.user.deliverArea),1)])]),(0,t._)("div",Le,[(0,t._)("span",null,"地址："+(0,o.zw)(e.order.user.deliverAddress),1)])])):(0,t.kq)("",!0),"電子發票(手機載具)"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",He,[Ye,(0,t._)("div",Ge,[(0,t._)("span",null,(0,o.zw)(e.order.user.mobileCode),1)])])):(0,t.kq)("",!0),"捐贈發票"===e.order.user.deliverTicket?((0,t.wg)(),(0,t.iD)("div",Ke,[(0,t._)("span",null,"捐贈單位："+(0,o.zw)(e.order.user.invoiceDonate),1)])):(0,t.kq)("",!0)])]),(0,t._)("div",Ve,[(0,t._)("div",Be,[Je,(0,t._)("div",Qe,[(0,t._)("div",Xe,[es,e.order.is_paid?((0,t.wg)(),(0,t.iD)("span",ls,"完成付款")):((0,t.wg)(),(0,t.iD)("span",ss,"尚未付款"))])])])]),(0,t._)("div",ts,[(0,t._)("div",os,[!1===e.order.is_paid?((0,t.wg)(),(0,t.iD)("div",rs,[(0,t._)("button",{class:"btn btn-secondary btn-sm p-2 px-5",onClick:s[0]||(s[0]=(...s)=>e.OrderPayment&&e.OrderPayment(...s))}," 確認付款 ")])):(0,t.kq)("",!0),!0===e.order.is_paid?((0,t.wg)(),(0,t.iD)("div",ds,[(0,t._)("button",{class:"btn btn-secondary btn-sm p-2 px-5",onClick:s[1]||(s[1]=(...s)=>e.goShopping&&e.goShopping(...s))}," 前往賣場 ")])):(0,t.kq)("",!0)])])])])])])]),(0,t.Wm)(ns,{ref:"completePayModal",orderId:e.completeOrderId},null,8,["orderId"]),(0,t.Wm)(ms)],64)}var as=l(1699),is=l(304),ns=l(3766),ms=l(9233),_s=l(2278),ps={components:{CompletePayModal:as.Z,Footer:is.Z},methods:{...(0,ns.nv)(ms.Z,["pushMessage"])},mixins:[_s.Z],created(){this.orderId=this.$route.params.checkOrderId,this.getOrder()}},us=l(89);const bs=(0,us.Z)(ps,[["render",cs]]);var vs=bs}}]);
//# sourceMappingURL=385.899a8942.js.map