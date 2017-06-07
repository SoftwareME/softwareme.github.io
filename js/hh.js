new Vue({
	el:'#downAPP',
	data:{
		isiOS:navigator.userAgent.match('iPad')||navigator.userAgent.match('iPhone')|| navigator.userAgent.match('iPod'),
    	isAndroid:navigator.userAgent.match('Android'),
    	ua:window.navigator.userAgent.toLowerCase(),
    	isShow:false,
    	iosURL:'https://itunes.apple.com/us/app/id1151315676',
    	androidURL:'//m.ppdai.com/Down/City?id=',
    	pakName:''
	},
	methods:{
		download:function(){
			this.pakName = this.GetQueryString('source');
			if(this.isWeiXin()){
				this.isShow = true;
			}else{
				if(this.isiOS){
					window.location.href = this.iosURL;
				}else{
					window.location.href = this.androidURL + this.pakName;
				}
			}
		},
		isWeiXin:function(){  //判断是否为微信浏览器
	        if (this.ua.match(/MicroMessenger/i) == 'micromessenger') {
	            return true;
	        }else{
	            return false;
	        }
		},
		GetQueryString:function(name){    //获取链接地址参数
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
			var r = window.location.search.substr(1).match(reg);
		   	if (r!=null) return (r[2]); return null;
		},
		commonDownload:function(){
			this.pakName = this.GetQueryString('source');
			if(this.isWeiXin()){
				this.isShow = true;
			}else{
				if(this.isiOS){
					setTimeout(window.location.href = this.iosURL,500);
				}else{
					setTimeout(window.location.href = this.androidURL + this.pakName,500);
				}
			}
		}
	},
	mounted:function(){
		this.download();
	}
})