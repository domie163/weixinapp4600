<template>
	<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
    <view class="cu-bar bg-white search" :style="[{top:CustomBar + 'px'}]">
			<picker v-if="queryList.length>1" mode="selector" :range="queryList" range-key="queryName" :value="queryIndex" @change="queryChange" style="padding-left: 20upx;">
				<view><image style="width: 20upx;height: 33upx;" src="../../static/center/to.png"></image></view>
			</picker>

                              			<view v-if="queryIndex==0" class="search-form round">
				<text class="cuIcon-search"></text>
				<input v-model="searchForm.chanpinmingcheng" type="text" placeholder="产品名称" ></input>
			</view>
                                                                                                
			<view class="action">
				<button @tap="search" :style="{width:'auto',borderRadius:'8rpx',height:'80rpx',fontSize:'28rpx',color:'#fff',backgroundColor:btnColor[0],borderColor:btnColor[0]}" class="cu-btn shadow-blur round">搜索</button>
			</view>
		</view>

		<view :style="2 != 1 ? 'display: flex;' : ''">
                                                            <scroll-view scroll-y="true" class="tabView" :style='{"padding":"0","boxShadow":"0 0 0px rgba(255,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,1)","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"160rpx","borderStyle":"solid","height":"100%"}'>
        <view style="display: flex;flex-direction: column;">
          <view :style='categoryName===item.chanpinfenlei?sactiveItem:sitem' class="tab" v-for="(item,index) in categoryList" :key="index" :class="categoryName===item.chanpinfenlei?'tabActive':''" @tap="categoryClick(item.chanpinfenlei)">{{item.chanpinfenlei}}</view>
        </view>
      </scroll-view>
                                                                                                
            <!-- 样式1 -->
            <!-- 样式2 -->
            <!-- 样式3 -->
            <!-- 样式4 -->
            <!-- 样式5 -->
            <view class="list-box6" :style='{"padding":"24rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' style="display: flex;flex-wrap: wrap;box-sizing: border-box;align-content: flex-start;">
        <block v-for="(product,index) in list" :key="index">
        <view @tap="onDetailTap(product)" v-if="index%6==0" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 2% 20rpx 0","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"48%","borderStyle":"solid","height":"auto"}'>
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                                                                                <view :style='{"padding":"10rpx 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                <view :style='{"padding":"0 12rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"32rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                              <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        <view @tap="onDetailTap(product)" v-if="index%6==1" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 0 20rpx 2%","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"48%","borderStyle":"solid","height":"auto"}'>
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                                                                                <view :style='{"padding":"10rpx 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                <view :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"32rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                              <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        <view @tap="onDetailTap(product)" v-if="index%6==2" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 2% 20rpx 0","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"48%","borderStyle":"solid","height":"auto"}'>
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                                                                                <view :style='{"padding":"10rpx 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                <view :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"32rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                              <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        <view @tap="onDetailTap(product)" v-if="index%6==3" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 0 20rpx 2%","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"48%","borderStyle":"solid","height":"auto"}'>
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                                                                                <view :style='{"padding":"10rpx 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                <view :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0 0 8rpx 0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"32rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                              <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        <view  @tap="onDetailTap(product)" v-if="index%6==4" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 0 20rpx","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' style="display: flex;">
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"200rpx","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                              <view class="list-item-body" style="flex: 1;">
                                                                        <view :style='{"padding":"020rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                                                                <view :style='{"padding":"20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                                  </view>
          <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        <view  @tap="onDetailTap(product)" v-if="index%6==5" class="list-item" :style='{"padding":"0","boxShadow":"0px 6rpx 12rpx rgba(0, 0, 0, 0.16)","margin":"0 0 20rpx","borderColor":"red","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}' style="display: flex;">
                                                                                                              <image :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","borderRadius":"20rpx","borderWidth":"0","width":"200rpx","borderStyle":"solid","height":"200rpx"}' mode="aspectFill" :src="product.chanpintupian?baseUrl+product.chanpintupian.split(',')[0]:''"></image>
                                                                                                              <view class="list-item-body" style="flex: 1;">
                                                                        <view :style='{"padding":"20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"#333","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">{{product.chanpinmingcheng}}</view>
                                                                                                                                                                                                                                                                                                <view :style='{"padding":"20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"red","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"36rpx","fontSize":"28rpx","borderStyle":"solid"}' class="price">￥{{product.price}}</view>
                                  </view>
          <view style="display: flex;justify-content: space-between;">
            <text v-if="userid && isAuth('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="!userid && isAuthFront('nongchanpin','修改')" class="cuIcon-edit" @click.stop="onUpdateTap(product.id)">修改</text>
            <text v-if="userid && isAuth('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
            <text v-if="!userid && isAuthFront('nongchanpin','删除')" class="cuIcon-delete" @click.stop="onDeleteTap(product.id)">删除</text>
          </view>
        </view>
        </block>
      </view>
            
                                                                                                                                            		</view>

		<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0 auto","backgroundColor":"rgba(71, 177, 60, 1)","borderColor":"rgba(71, 177, 60, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-if="userid && isAuth('nongchanpin','新增')" class="add-btn" @click="onAddTap()">新增</button>
		<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0 auto","backgroundColor":"rgba(71, 177, 60, 1)","borderColor":"rgba(71, 177, 60, 1)","borderRadius":"80rpx","color":"#fff","borderWidth":"1","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-if="!userid && isAuthFront('nongchanpin','新增')" class="add-btn" @click="onAddTap()">新增</button>

	</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				queryList:[
					{
						queryName:"产品名称",
					},
				],
				sactiveItem: {"padding":"0 28rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"12rpx 0","borderColor":"rgba(64, 174, 54, 1)","backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(64, 174, 54, 1)","borderRadius":"0","borderWidth":"0 0 0 8rpx","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"},
				sitem: {"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"12rpx 0","borderColor":"rgba(132, 132, 132, 1)","backgroundColor":"rgba(238, 238, 238, 1)","color":"rgba(161, 161, 161, 1)","borderRadius":"0","borderWidth":"0 0 0 8rpx","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"},
				queryIndex: 0,
				list: [],
                userid: '',
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm:{},
				categoryList:[],
				categoryName :'全部',
				CustomBar: '0'
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onShow() {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.btnColor = this.btnColor.sort(()=> {
                                return (0.5-Math.random());
                        });
            let res = {};
            if(this.userid) {
                res = await this.$api.page('chanpinfenlei', {page:1,limit:100});
            } else {
                res = await this.$api.list('chanpinfenlei', {page:1,limit:100});
            }
			res.data.list.splice(0,0,{id:0,chanpinfenlei:'全部'})
			this.categoryList = res.data.list;
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
            if(uni.getStorageSync("useridTag")==1){
                this.userid=uni.getStorageSync("useridTag");
                uni.removeStorageSync("useridTag");
            } else {
                this.userid = "";
            }
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
			//查询条件切换
			queryChange(e) {
				this.queryIndex=e.detail.value;
				this.searchForm.chanpinmingcheng="";
			},
			//类别搜索
			categoryClick(categoryName){
				this.categoryName = categoryName;
				this.mescroll.resetUpScroll();
			},
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let params = {
					page: mescroll.num,
					limit: mescroll.size
				}

				if(this.categoryName!='全部'){
					params.chanpinfenlei = '%' + this.categoryName + '%'
				}

				if(this.searchForm.chanpinmingcheng){
					params['chanpinmingcheng'] = '%' + this.searchForm.chanpinmingcheng + '%'
				}



                let res = {}
                if(this.userid) {
                    res = await this.$api.page(`nongchanpin`, params);
                } else {
                    res = await this.$api.list(`nongchanpin`, params);
                }
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			},
			// 详情
			onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
			},
			// 修改
			onUpdateTap(id){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update?id=${id}`)
			},
			// 添加
			onAddTap(){
                uni.setStorageSync("useridTag",this.userid);
				this.$utils.jump(`./add-or-update`)
			},
			onDeleteTap(id){
				var _this = this;
				uni.showModal({
					title: '提示',
					content: '是否确认删除',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.del('nongchanpin', JSON.stringify([id]));
							_this.hasNext = true
							// 重置分页参数页数为1
							_this.mescroll.resetUpScroll()
						}
					}
				});
			},
			// 搜索
			async search(){
				this.mescroll.num = 1
				let searchForm = {
					page: this.mescroll.num,
					limit: this.mescroll.size
				}
				if(this.searchForm.chanpinmingcheng){
					searchForm['chanpinmingcheng'] = '%' + this.searchForm.chanpinmingcheng + '%'
				}
                let res = {};
                if(this.userid) {
                    res = await this.$api.page(`nongchanpin`, searchForm);
                } else {
                    res = await this.$api.list(`nongchanpin`, searchForm);
                }
				// 如果是第一页数据置空
				if (this.mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				this.mescroll.endSuccess(this.mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style>
	/* product */
	page {
		background: #EEEEEE;
	}

	view {
		font-size: 28upx;
	}

	.tabView {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background: #ffffff;
		height: 60upx;
		margin-bottom: 20upx;
		white-space: nowrap;
		box-shadow: 0px 1px 14px 0px rgba(38, 38, 35, 0.07);
		margin-top: 6upx;
	}
	.tab {
		text-align: center;
		display: inline-block;
		margin: 12rpx 0;
		padding: 0;
		width: 160rpx;
		line-height: 80rpx;
		color: rgba(161, 161, 161, 1);
		font-size: 28rpx;
		border-radius: 0;
		border-width: 0 0 0 8rpx;
		border-style: solid;
		border-color: rgba(132, 132, 132, 1);
		background-color: rgba(238, 238, 238, 1);
		box-shadow: 0 0 0px rgba(0,0,0,.3);
	}
	.tabActive{
		margin: 12rpx 0;
		padding: 0 28rpx;
		width: 160rpx;
		line-height: 80rpx;
		color: rgba(64, 174, 54, 1);
		font-size: 28rpx;
		border-radius: 0;
		border-width: 0 0 0 8rpx;
		border-style: solid;
		border-color: rgba(64, 174, 54, 1);
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0 0 0px rgba(0,0,0,.3);
	}
	.tab:last-of-type {
		border: none;
	}

	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 0upx;
		// justify-content: space-around;
	}

	.uni-product {
		padding: 10upx;
		margin: 10upx;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}

	.image-view {
		height: 330upx;
		width: 330upx;
		margin: 12upx 0;
	}

	.uni-product-image {
		height: 330upx;
		width: 330upx;
	}

	.uni-product-title {
		width: 300upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.uni-product-price {
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #e80080;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	uni-image > div, uni-image > img {
		width: 100%;
		height: 140px;
		object-fit: cover;
	}

	.add-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		// #ifndef MP
		bottom: 106upx;
		// #endif
		// #ifdef MP-WEIXIN
		bottom: 16upx;
		// #endif
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: red;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}

	.list {
		padding: 20upx 20upx 20upx;
	}

	.listm {
		background: #fff;
		border-radius: 15upx;
		box-shadow: 0 0 2upx rgba(0, 0, 0, 0.1);
		margin-bottom: 20upx;
		padding: 30upx;
	}

	.listmpic {
		border-radius: 10upx;
		width: 166upx;
		margin-right: 20upx;
	}

	.listmr {
		// width: 460upx;
		display: inline-block;
		flex: 1;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

  .news-box6 .dian::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: red;
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    z-index: 1;
  }

  .hide1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .hide2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .hide4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>
