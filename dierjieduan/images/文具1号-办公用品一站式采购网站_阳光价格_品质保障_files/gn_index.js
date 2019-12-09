//var webUrl = window.location.protocol + '//' + window.location.hostname;
 var webUrl = '/';
$(window).load(function () {
    loaddowninfo();//底部栏目
    loadwebMen();//加载网站导航
});
/*加载底部栏目*/
function loaddowninfo() {
    $.ajax({
        type: "get",
        dataType: "jsonp",
        url: webUrl + 'index.php',
        data: {app: 'mall/MSupport', act: 'getFooterArticle'},
        jsonp: 'callback',
        success: function (data) {
            var cate = '';
            var k = 1;
            var url = '';
			cate +='<div class="l-area">';
            for (var i in data.data) {
                if (data.data[i].cat_name) {
					
                    cate += '<div class="info_column">';
                    cate += '<h4 class="fht' + k + '">' + data.data[i].cat_name + '</h4>';
                    if (data.data[i].article) {
                        var lmdate = data.data[i].article;
                        for (var j in lmdate) {
                            if (lmdate[j].title && lmdate[j].article_id) {
                                // if (lmdate[j].link != "") {
                                //     url = lmdate[j].link;
                                // } else {
                                //     url = webUrl + '/index.php?app=mall/MSupport&cate_id=' + lmdate[j].cat_id + '&aid=' + lmdate[j].article_id;                                    
                                // }                               
                                url = webUrl + 'about_cat' + lmdate[j].cat_id + '_a' + lmdate[j].article_id;
                                cate += '<li><a href="' + url + '" title="' + lmdate[j].title + '" target="_blank">' + lmdate[j].title + '</a></li>';
                            }
                        }
                    }
                    cate += '</div>';
					
                    k++;
                }
            }
			cate +='</div>';
			cate +='<div class="r-area"><img src="//www.wjyh.com/views/images/down/r-ewm.png" height="115px"></div>';
            $(".gn_footer_info").html(cate);
        },
        error: function (ex) {
        }
    });
}
function loaddowninfo_bak2() {
    $(".gn_footer_info").append('<div class="info_column"><h4 class="fht1">新手指南</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=33&amp;aid=48" title="如何注册会员" target="_blank">如何注册会员</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=33&amp;aid=49" title="消费等级和积分规则" target="_blank">消费等级和积分规则</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=33&amp;aid=50" title="密码找回及安全设置" target="_blank">密码找回及安全设置</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=33&amp;aid=51" title="查看已购商品" target="_blank">查看已购商品</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=33&amp;aid=65" title="导购演示" target="_blank">导购演示</a></li></div><div class="info_column"><h4 class="fht2">支付方式</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=34&amp;aid=52" title="银联在线" target="_blank">银联在线</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=34&amp;aid=53" title="支付宝" target="_blank">支付宝</a></li></div><div class="info_column"><h4 class="fht3">配送方式</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=47&amp;aid=54" title="合作物流" target="_blank">合作物流</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=47&amp;aid=55" title="订单物流查询" target="_blank">订单物流查询</a></li></div><div class="info_column"><h4 class="fht4">售后服务</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=48&amp;aid=58" title="退款说明" target="_blank">退款说明</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=48&amp;aid=59" title="退换货申请" target="_blank">退换货申请</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=48&amp;aid=70" title="退换货流程" target="_blank">退换货流程</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=48&amp;aid=71" title="联系卖家" target="_blank">联系卖家</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=48&amp;aid=72" title="退换货政策" target="_blank">退换货政策</a></li></div><div class="info_column"><h4 class="fht5">会员中心</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=49&amp;aid=61" title="修改个人资料" target="_blank">修改个人资料</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=49&amp;aid=64" title="修改收货地址" target="_blank">修改收货地址</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=49&amp;aid=73" title="修改密码" target="_blank">修改密码</a></li></div><div class="info_column"><h4 class="fht6">关于我们</h4><li><a href="index.php?app=mall/MSupport&amp;cate_id=50&amp;aid=63" title="关于文具1号" target="_blank">关于文具1号</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=50&amp;aid=75" title="广告服务" target="_blank">广告服务</a></li><li><a href="index.php?app=mall/MSupport&amp;cate_id=50&amp;aid=62" title="招聘信息" target="_blank">招聘信息</a></li></div>');
}
/*加载底部栏目*/
function loaddowninfo_bak() {
    $.ajax({
        type: "get",
        dataType: "jsonp",
        url: webUrl + 'index.php',
        data: {app: 'mall/MSupport', act: 'getFooterArticle'},
        jsonp: 'callback',
        success: function (data) { console.log(data);
            var k = 1;
            for (var i in data.data) {
                if (data.data[i].cat_name) {
                    var $cate = $('<div class="info_column"></div>');
                    $cate.append('<h4 class="fht' + k + '">' + data.data[i].cat_name + '</h4>');
                    if (data.data[i].article) {
                        var li = '', lmdate = data.data[i].article;
                        for (var j in lmdate) {
                            if (lmdate[j].title && lmdate[j].article_id) {
                                if (lmdate[j].link != "") {
                                    var url = lmdate[j].link;
                                } else {
                                    var url = webUrl + '/index.php?app=mall/MSupport&cate_id=' + lmdate[j].cat_id + '&aid=' + lmdate[j].article_id;
                                }

                                li += '<li><a href="' + url + '" title="' + lmdate[j].title + '" target="_blank">' + lmdate[j].title + '</a></li>';
                            }
                        }
                        $cate.append(li);
                        $(".gn_footer_info").append($cate);
                    }
                }
                k++;
            }
        },
        error: function (ex) {
        }
    });
}

/*加载网站导航*/
    function loadwebMen() {
    $.ajax({
        type: "get",
        dataType: "jsonp",
        url: webUrl + 'index.php',
        data: {app: 'mall/MDefault', act: 'getAllTagInfo'},
        jsonp: 'callback', 
        success: function (data) {
            var wendh = $('#gn_web_map');//网站导航存放div
            wendh.prev('a').mouseover(function () {
                var menlist = $('.webmap_info', wendh);
                // 读取一级栏目
                for (var yj in data.data) {
                    var yjdate = data.data[yj];
                    var ItemArr = [];
                    ItemArr.push('<div class="webmaplm"><h3>' + yjdate.imh01 + '</h3>');
                    // 读取二级数据
                    for (var ej in yjdate.child) {
                        var ejDate = yjdate.child[ej];
                        if (ejDate.cateid != null)
                            ItemArr.push('<a href="index.php?app=mall/MSearchGoods&tag_id=' + ejDate.imhid + '&p_cat_id=' + ejDate.cateid + '&as=">' + ejDate.imh01 + '</a>');
                    }
                    ItemArr.push('</div>')
                    menlist.append(ItemArr.join(""));
                }
                $(this).unbind('mouseover');//数据加载后移除mouseover事件，防止反复加载数据
            });
        },
        error: function (ex) {
        }
    });
}