"use strict";(self["webpackChunkfudge"]=self["webpackChunkfudge"]||[]).push([[263],{3318:function(e,t,l){l.d(t,{Z:function(){return _}});var a=l(3396),o=l(7139),s=l(9242);const i={"aria-label":"Page navigation example "},d={class:"pagination justify-content-center mt-4"},r=(0,a._)("span",{"aria-hidden":"true"},"«",-1),c=[r],n=["onClick"],u=(0,a._)("span",{"aria-hidden":"true"},"»",-1),p=[u];function m(e,t,l,r,u,m){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",d,[(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((e=>m.prePage(l.pages.current_page-1)),["prevent"]))},c)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:e===l.pages.current_page}]),key:e},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((t=>m.updatePage(e)),["prevent"])},(0,o.zw)(e),9,n)],2)))),128)),(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!1===l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((e=>m.nextPage(l.pages.current_page+1)),["prevent"]))},p)],2)])])}var h={props:["pages"],emits:["emitPage","emitPre","emitNext"],methods:{updatePage(e){this.$emit("emitPage",e)},prePage(e){this.$emit("emitPre",e)},nextPage(e){this.$emit("emitNext",e)}}},b=l(89);const g=(0,b.Z)(h,[["render",m]]);var _=g},4263:function(e,t,l){l.r(t),l.d(t,{default:function(){return Fe}});var a=l(3396),o=l(7139);const s={class:"shadow-sm p-3 mt-2 bg-body rounded"},i={class:"d-flex justify-content-between px-3"},d=(0,a._)("p",{class:"fs-3"},"商品列表",-1),r={class:"table mt-2 align-middle"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"70",class:"text-center"},"品項"),(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",{width:"150"},"商品名稱"),(0,a._)("th",{width:"120",class:"text-center"},"原價"),(0,a._)("th",{width:"120",class:"text-center"},"售價"),(0,a._)("th",{width:"120",class:"text-center"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),n={class:"text-center"},u={class:"text-center"},p={class:"text-center"},m={class:"text-center"},h={key:0,class:"text-success"},b={key:1,class:"text-muted"},g={class:"btn-group"},_=["onClick"],f=["onClick"];function P(e,t,l,P,v,y){const w=(0,a.up)("OverLoading"),x=(0,a.up)("ProductModal"),M=(0,a.up)("DeleteModal"),k=(0,a.up)("PagiNation");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{active:v.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("div",null,[(0,a._)("div",i,[d,(0,a._)("span",null,[(0,a._)("button",{class:"btn btn-primary mt-1",type:"button",onClick:t[0]||(t[0]=e=>y.openModal(!0))}," 新增商品 ")])]),(0,a._)("table",r,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.products,((t,l)=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",n,(0,o.zw)(l+1),1),(0,a._)("td",null,(0,o.zw)(t.category),1),(0,a._)("td",null,(0,o.zw)(t.title),1),(0,a._)("td",u,(0,o.zw)(e.$filters.currency(t.origin_price)),1),(0,a._)("td",p,(0,o.zw)(e.$filters.currency(t.price)),1),(0,a._)("td",m,[t.is_enabled?((0,a.wg)(),(0,a.iD)("span",h,"啟用")):((0,a.wg)(),(0,a.iD)("span",b,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",g,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>y.openModal(!1,t)}," 編輯 ",8,_),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>y.openDeleteModal(t)}," 刪除 ",8,f)])])])))),128))])])])]),(0,a.Wm)(x,{ref:"ProductModal",product:v.tempProduct,onUpdatProduct:y.updatProduct},null,8,["product","onUpdatProduct"]),(0,a.Wm)(M,{ref:"DeleteProductModal","del-Product":v.tempProduct,onEmitDelete:y.deleteProductModal},null,8,["del-Product","onEmitDelete"]),(0,a.Wm)(k,{pages:v.pagination,onEmitPage:y.getProudcts,onEmitPre:y.getProudcts,onEmitNext:y.getProudcts},null,8,["pages","onEmitPage","onEmitPre","onEmitNext"])],64)}var v=l(9242);const y={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},x={class:"modal-content border-0"},M=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"商品資料")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),k={class:"modal-body"},D={class:"row"},C={class:"col-3"},$={class:"mb-3"},G=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),U={class:"row gx-2"},z={class:"mb-3 col-md-6"},N=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),V={class:"mb-3 col-md-6"},E=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),L={class:"row gx-2"},Z={class:"mb-3"},I=(0,a._)("label",{for:"size",class:"form-label"},"尺寸",-1),F={class:"row gx-2"},W={class:"mb-3 col-md-6"},H=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),Y={class:"mb-3 col-md-6"},j=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),K=(0,a._)("hr",null,null,-1),O={class:"mb-3"},A=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),S={class:"mb-3"},B=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),T={class:"mb-3 col-md-12"},q=(0,a._)("label",{class:"col-md-12 form-label"},"尺寸指南",-1),J=(0,a._)("label",{for:"small-Guide",class:"form-label sizeGuide_text mb-0"},"S尺寸",-1),Q=(0,a._)("label",{for:"middle-Guide",class:"form-label sizeGuide_text mb-0"},"M尺寸",-1),R=(0,a._)("label",{for:"large-Guide",class:"form-label sizeGuide_text mb-0"},"L尺寸",-1),X={class:"mb-3"},ee={class:"form-check"},te=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),le={class:"modal-footer"},ae=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),oe={class:"col-9"},se={class:"row"},ie={class:"mb-3"},de=(0,a._)("label",{for:"customFile",class:"form-label"},"上傳圖片 ",-1),re=["src"],ce=["onClick"],ne=(0,a.Uk)("移除 ");function ue(e,t,l,o,s,i){const d=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",w,[(0,a._)("div",x,[M,(0,a._)("div",k,[(0,a._)("div",D,[(0,a._)("div",C,[(0,a._)("div",$,[G,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempProduct.title=e)},null,512),[[v.nr,s.tempProduct.title,void 0,{trim:!0}]])]),(0,a._)("div",U,[(0,a._)("div",z,[N,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":t[1]||(t[1]=e=>s.tempProduct.category=e)},null,512),[[v.nr,s.tempProduct.category,void 0,{trim:!0}]])]),(0,a._)("div",V,[E,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[2]||(t[2]=e=>s.tempProduct.unit=e)},null,512),[[v.nr,s.tempProduct.unit,void 0,{trim:!0}]])])]),(0,a._)("div",L,[(0,a._)("div",Z,[I,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"size",placeholder:"請輸入尺寸","onUpdate:modelValue":t[3]||(t[3]=e=>s.tempProduct.size=e)},null,512),[[v.nr,s.tempProduct.size,void 0,{trim:!0}]])])]),(0,a._)("div",F,[(0,a._)("div",W,[H,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":t[4]||(t[4]=e=>s.tempProduct.origin_price=e)},null,512),[[v.nr,s.tempProduct.origin_price,void 0,{Number:!0}]])]),(0,a._)("div",Y,[j,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":t[5]||(t[5]=e=>s.tempProduct.price=e)},null,512),[[v.nr,s.tempProduct.price,void 0,{Number:!0}]])])]),K,(0,a._)("div",O,[A,(0,a.wy)((0,a._)("textarea",{type:"text",rows:"3",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":t[6]||(t[6]=e=>s.tempProduct.description=e)},null,512),[[v.nr,s.tempProduct.description,void 0,{trim:!0}]])]),(0,a._)("div",S,[B,(0,a.wy)((0,a._)("textarea",{type:"text",rows:"5",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":t[7]||(t[7]=e=>s.tempProduct.content=e)},null,512),[[v.nr,s.tempProduct.content,void 0,{trim:!0}]])]),(0,a._)("div",T,[q,J,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control mb-2",id:"small-Guide",placeholder:"請輸入Ｓ尺寸資料","onUpdate:modelValue":t[8]||(t[8]=e=>s.tempProduct.smallGuide=e)},null,512),[[v.nr,s.tempProduct.smallGuide,void 0,{trim:!0}]]),Q,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control mb-2",id:"middle-Guide",placeholder:"請輸入M尺寸資料","onUpdate:modelValue":t[9]||(t[9]=e=>s.tempProduct.middleGuide=e)},null,512),[[v.nr,s.tempProduct.middleGuide,void 0,{trim:!0}]]),R,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"large-Guide",placeholder:"請輸入L尺寸資料","onUpdate:modelValue":t[10]||(t[10]=e=>s.tempProduct.largeGuide=e)},null,512),[[v.nr,s.tempProduct.largeGuide,void 0,{trim:!0}]])]),(0,a._)("div",X,[(0,a._)("div",ee,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[11]||(t[11]=e=>s.tempProduct.is_enabled=e)},null,512),[[v.e8,s.tempProduct.is_enabled]]),te])]),(0,a._)("div",le,[ae,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=t=>e.$emit("updat-Product",s.tempProduct))}," 確認 ")])]),(0,a._)("div",oe,[(0,a._)("div",se,[(0,a._)("div",ie,[de,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",onChange:t[13]||(t[13]=(...e)=>i.uploadFile&&i.uploadFile(...e)),ref:"fileInput",multiple:""},null,544)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tempProduct.images,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-4 g-3 mt-2",key:e},[(0,a._)("img",{class:"img-fluid",alt:"",src:e},null,8,re),(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm mt-2 col-4",onClick:t=>i.removeImage(e)},[(0,a.Wm)(d,{class:"icons icon-trash-can me-2",icon:["fas","trash-can"]}),ne],8,ce)])))),128))])])])])])])],512)}var pe=l(1339),me={data(){return{modal:{},tempProduct:{}}},props:{product:{type:Object,default(){return{}}}},emits:["updat-Product"],watch:{product(){this.tempProduct={...this.product},this.tempProduct.images||(this.tempProduct.images=[],this.tempProduct.size=[],this.tempProduct.preSize=[],this.tempProduct.smallGuide=[],this.tempProduct.middleGuide=[],this.tempProduct.largeGuide=[])}},methods:{uploadFile(){if(Array.from(this.$refs.fileInput.files).length+this.tempProduct.images.length>9)alert("照片多餘9張");else{const e=this.$refs.fileInput.id;Array.from(this.$refs.fileInput.files).forEach((t=>{const l=t,a=new FormData;a.append("file-to-upload",l);const o="https://vue3-course-api.hexschool.io/api/pengplan-api/admin/upload";this.$http.post(o,a).then((t=>{document.getElementById(e).value="",t.data.success&&this.tempProduct.images.push(t.data.imageUrl)})).catch((e=>{console.log(e.response)}))}))}},removeImage(e){const t=this.tempProduct.images.indexOf(e);this.tempProduct.images.splice(t,1)}},mixins:[pe.Z]},he=l(89);const be=(0,he.Z)(me,[["render",ue]]);var ge=be;const _e={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},fe={class:"modal-dialog",role:"document"},Pe={class:"modal-content border-0"},ve={class:"modal-header bg-danger text-white"},ye={class:"modal-title"},we=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),xe={class:"modal-body"},Me=(0,a.Uk)(" 是否刪除 "),ke={class:"text-danger"},De=(0,a.Uk)(" (刪除後將無法恢復)。 "),Ce={class:"modal-footer"},$e=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ge(e,t,l,s,i,d){return(0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("div",fe,[(0,a._)("div",Pe,[(0,a._)("div",ve,[(0,a._)("h5",ye,[(0,a._)("span",null,"刪除 "+(0,o.zw)(l.delProduct.title),1)]),we]),(0,a._)("div",xe,[Me,(0,a._)("strong",ke,(0,o.zw)(l.delProduct.title),1),De]),(0,a._)("div",Ce,[$e,(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("emit-delete"))}," 確認刪除 ")])])])],512)}var Ue={data(){return{modal:{}}},props:{delProduct:{}},emits:["emit-delete"],mixins:[pe.Z]};const ze=(0,he.Z)(Ue,[["render",Ge]]);var Ne=ze,Ve=l(3318),Ee=l(9233),Le=l(3766),Ze={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ge,DeleteModal:Ne,PagiNation:Ve.Z},methods:{...(0,Le.nv)(Ee.Z,["pushMessage"]),getProudcts(e=1){const t=`https://vue3-course-api.hexschool.io/api/pengplan-api/admin/products?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{setTimeout((()=>{this.isLoading=!1}),500),e.data.success&&(this.products=e.data.products,this.pagination=e.data.pagination)})).catch((e=>{console.log(e.response)}))},openModal(e,t){this.tempProduct=e?{}:{...t},this.isNew=e;const l=this.$refs.ProductModal;l.showModel()},updatProduct(e){this.tempProduct=e;let t="https://vue3-course-api.hexschool.io/api/pengplan-api/admin/product",l="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/pengplan-api/admin/product/${e.id}`,l="put"),this.$http[l](t,{data:this.tempProduct}).then((e=>{this.$refs.ProductModal.hideModal(),this.getProudcts(),this.pushMessage(e.data.success,"更新",e.data.message)})).catch((e=>{console.log(e.response)}))},openDeleteModal(e){this.tempProduct=e;const t=this.$refs.DeleteProductModal;t.showModel()},deleteProductModal(){const e=`https://vue3-course-api.hexschool.io/api/pengplan-api/admin/product/${this.tempProduct.id}`;this.$http.delete(e).then((e=>{this.$refs.DeleteProductModal.hideModal(),this.getProudcts(),this.pushMessage(e.data.success,"刪除商品",e.data.message)})).catch((e=>{console.log(e.response)}))}},created(){this.getProudcts()}};const Ie=(0,he.Z)(Ze,[["render",P]]);var Fe=Ie}}]);
//# sourceMappingURL=263.2a9b7cfe.js.map