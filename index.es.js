import"core-js/modules/es.array.for-each";import"core-js/modules/es.array.includes";import"core-js/modules/es.function.bind";import"core-js/modules/es.object.assign";import"core-js/modules/es.object.entries";import"core-js/modules/es.object.to-string";import"core-js/modules/es.parse-int";import"core-js/modules/es.promise";import"core-js/modules/es.string.includes";import"core-js/modules/web.dom-collections.for-each";import r from"qs";import n from"superagent";import t from"lodash/get";import{setupI18n as e,unpackCatalog as u}from"lingui-i18n";import"core-js/modules/es.array.slice";import"core-js/modules/es.number.constructor";import"core-js/modules/es.regexp.exec";import"core-js/modules/es.string.split";function o(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}function i(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,e)}return t}function c(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(n){o(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function a(r,n){return n||(n=r.slice(0)),r.raw=n,r}var f,s,v=e({catalogs:(f={},f["en-US"]=u({languageData:{plurals:function(r,n){var t=String(r).split("."),e=!t[1],u=Number(t[0])==r,o=u&&t[0].slice(-1),i=u&&t[0].slice(-2);return n?1==o&&11!=i?"one":2==o&&12!=i?"two":3==o&&13!=i?"few":"other":1==r&&e?"one":"other"}},messages:{"Excel中候选人过多，最多限制500人导入":"Excel中候选人过多，最多限制500人导入","Excel中行数超长，Excel最多10000行":"Excel中行数超长，Excel最多10000行","Offer中职位信息为空":"Offer中职位信息为空","Offer审批不在审批中":"Offer审批不在审批中","Offer审批已进行，不可设置审批流程":"Offer审批已进行，不可设置审批流程","Offer审批流模版不存在":"Offer审批流模版不存在","Offer审批进行中，不可修改":"Offer审批进行中，不可修改","Offer审批进行中，不可取消":"Offer审批进行中，不可取消","Offer已审批":"Offer已审批","Offer模板不存在":"Offer模板不存在","Offer模板名称不能为空":"Offer模板名称不能为空","Offer模板名称长度不能超过{message}个字符":function(r){return["Offer模板名称长度不能超过",r("message"),"个字符"]},"Offer自定义字段名称不可重复":"Offer自定义字段名称不可重复","Offer自定义字段名称不能为空":"Offer自定义字段名称不能为空","Offer自定义字段名称过长":"Offer自定义字段名称过长","Offer自定义字段类型不合法":"Offer自定义字段类型不合法","Offer自定义字段类型不能为空":"Offer自定义字段类型不能为空","Office模板暂不支持报错快照":"Office模板暂不支持报错快照","pdf渲染失败":"pdf渲染失败","不可以移动候选人到禁用的场次":"不可以移动候选人到禁用的场次","不可变更不可用场次的面试状态":"不可变更不可用场次的面试状态","不可变更已取消或锁定的预约面试":"不可变更已取消或锁定的预约面试","不支持的Offer审批阶段":"不支持的Offer审批阶段","不能把候选人移入面试中房间":"You can't move a candidate into an interview room","不能移动其他场次或轮次的候选人":"Candidates who can't move another session or round","不能退出面试中的面试官":"Can't quit the interviewer in the interview","中...":"...","临时房间名称不能重名":"Temporary room name cannot be duplicate","修改次数已达到上限":"修改次数已达到上限","候选人不在队列中":"The candidate is not in the queue","候选人不能为空":"⁣Candidate cannot be empty","候选人其他职位正在处理中":"候选人其他职位正在处理中","候选人处于保护期":"候选人处于保护期","候选人没有参加面试":"候选人没有参加面试","候选人职位不统一":"候选人职位不统一","初筛阶段不存在":"初筛阶段不存在","参数错误":"Parameter error","反馈创建叫号面试失败":"Feedback failed to create call interview","只可修改状态为未预约和已预约的预约面试":"只可修改状态为未预约和已预约的预约面试","只可修改状态为预约中的预约面试":"只可修改状态为预约中的预约面试","只有面试官才能填写面试反馈":"Only interviewers can fill in interview feedback","叫号面试允许现场申请的职位不匹配":"叫号面试允许现场申请的职位不匹配","叫号面试现场申请时间不匹配":"叫号面试现场申请时间不匹配","后续操作失败":"后续操作失败","多人面试数量设置异常":"The number of interviews for multiple people is set abnormally","多人面试状态修改异常，只可以在面试当前之前进行修改":"The multi-person interview status is modified abnormally and can only be modified before the current interview","多人面试轮次获取异常，一个面试官只能存在一个轮次下":"Multi-person interview rounds get abnormal, one interviewer can only exist under one round","失败":"failed","存在不合法的offer审批状态":"存在不合法的offer审批状态","审批人已审批完成":"审批人已审批完成","导入候选人数据为空":"导入候选人数据为空","已签到的面试官不允许删除":"The interviewer who has checked in is not allowed to delete","当前叫号面试已经失效":"当前叫号面试已经失效","当前场地已经被删除，请选择其他场地":"The current site has been deleted. Please choose another site","当前无可选时间":"当前无可选时间","当前格子不存在":"当前格子不存在","当前状态不能重新锁定预约面试":"当前状态不能重新锁定预约面试","当前用户下面不存在该人才地图配置":"当前用户下面不存在该人才地图配置","当前用户下面存在名称相同的人才地图配置":"当前用户下面存在名称相同的人才地图配置","当前用户还有下载任务没有处理完成，请稍后重试":"当前用户还有下载任务没有处理完成，请稍后重试","当前组不存在":"当前组不存在","您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传":"您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传","您上传的文件表头与模版不匹配，请下载模版修改后重新上传":"您上传的文件表头与模版不匹配，请下载模版修改后重新上传","您已经在 {message} 签到就座":function(r){return["You have signed in at ",r("message")]},"您的操作过于频繁，请耐心等待当前请求结束。":"Your operation is too frequent, please wait for the current request ends.","成功":"succeeded","房间不存在":"Room does not exist","房间名称不可重复":"Room name cannot be duplicate","房间组不存在":"Room group does not exist","房间组名称不可重复":"Room group name cannot be duplicate","找不到可用的面试申请":"No available interview applications found","找不到归档原因":"找不到归档原因","找不到所选面试评价表，请刷新重试":"Cannot find selected scorecard; please retry","找不到招聘模式":"Cannot find the recruitment type","找不到猎头合同或合同已失效/禁用":"找不到猎头合同或合同已失效/禁用","找不到符合条件的面试记录":"找不到符合条件的面试记录","操作":"Action","数据导出上限为1w条，如需导出更多请联系CSM":"数据导出上限为1w条，如需导出更多请联系CSM","文件上传失败":"文件上传失败","无操作部门权限":"无操作部门权限","无效的面试反馈":"无效的面试反馈","无法创建过去开始的叫号面试":"Can't create a call to interview that started in the past","无法删除候选人":"Unable to delete candidate","无法取消已经开始的视频叫号面试":"无法取消已经开始的视频叫号面试","无法将面试开始时间修改为过去的时间":"Cannot change interview start time to past time","暂不支持拉勾或者智联外的方式":"Do not support the way of pull hook or Zhilian","有候选人处于异常状态（被删除），已自动过滤":"A candidate is in an abnormal state (deleted), which has been automatically filtered","服务器错误，请重试":"Server error","服务调用异常":"服务调用异常","未知模板类型":"未知模板类型","未知错误":"Unknown error","本场叫号面试已存在相同职位下的申请":"本场叫号面试已存在相同职位下的申请","本次修改时间与已预约时间相同，无需变更":"本次修改时间与已预约时间相同，无需变更","权重总和不是100":"权重总和不是100","权重表里的打分题，权重不能为空":"权重表里的打分题，权重不能为空","权重面试评价表模块计算类型必须全部是权重":"权重面试评价表模块计算类型必须全部是权重","查询赛码面试结果异常":"查询赛码面试结果异常","检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后":"检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后","清除候选人token失败":"清除候选人token失败","现场叫号面试状态不匹配":"现场叫号面试状态不匹配","现场申请职位不能为空":"现场申请职位不能为空","用户权限不够，不能完成该操作":"Insufficient user rights to complete the operation","登录失效":"Logon failure","目标场次已满员":"目标场次已满员","系统中已经有同名模板，请更改后再试":"系统中已经有同名模板，请更改后再试","系统错误":"System error","绑定赛码数据异常":"绑定赛码数据异常","缺少职位Id":"Job ID required","职位不存在!":"职位不存在!","职位已关闭":"职位已关闭","职位选择错误":"职位选择错误","获取反馈异常，反馈数据异常":"Abnormal feedback, abnormal feedback data","获取反馈异常，反馈数据异常反馈模版数量不可大于1":"Abnormal feedback, the number of feedback templates for abnormal feedback data cannot be greater than 1","获取渠道信息失败":"获取渠道信息失败","获取猎头渠道信息失败":"获取猎头渠道信息失败","获取职位信息失败":"获取职位信息失败","获取配置信息失败":"获取配置信息失败","该人才地图配置与当前节点的不存在对应关系，请检查后重试":"该人才地图配置与当前节点的不存在对应关系，请检查后重试","该场地正在被叫号面试使用，不可删除":"This site is being used for call interview, cannot be deleted","该场次已有候选人预约，请移动全部候选人后再禁用":"该场次已有候选人预约，请移动全部候选人后再禁用","该房间已经存在其他面试官":"Other interviewers already exist in this room","该房间正在被叫号面试使用，不可删除":"This room is being used for call interview, cannot be deleted","该模板为默认模板，无法删除":"该模板为默认模板，无法删除","请确保打分题分值统一":"Keep the score question consistent","读取猎头公司设置失败!":"读取猎头公司设置失败!","调用赛码接口异常":"调用赛码接口异常","账号无法获取候选人信息":"Account can't get candidate information","账号有效期失效，请稍后重试":"The account validity period is invalid. Please try again later","账户已过期":"Account expired","赛码同步状态异常":"赛码同步状态异常","赛码异步处理未完成":"赛码异步处理未完成","轮次名称不可以为空":"Round name are required","轮次名称或英文名称不可以重复":"轮次名称或英文名称不可以重复","队列不存在":"Queue does not exist","需要登录才能进行该操作":"Login is required for this operation","面试中的候选人不能更换面试官":"Candidates in an interview cannot change interviewers","面试中的候选人不能移动":"Candidates during the interview cannot be moved","面试分组时间不能小于面试开始时":"Interview group time cannot be less than at the beginning of the interview","面试官已填写反馈":"面试官已填写反馈","面试官异常":"面试官异常","面试官没有在房间中":"The interviewer is not in the room","面试官没有该轮次":"The interviewer doesn't have a turn","面试官重复出现":"Interviewer reappears","面试开始后无法修改简历类型":"Resume type cannot be modified after interview","面试开始后无法删除已选房间":"Selected rooms cannot be deleted after the interview begins","面试开始后无法变更面试地点":"Interview site cannot be changed after interview","面试开始后无法变更面试开始时间":"Interview start time cannot be changed after the interview starts","面试开始后无法变更面试轮次":"Interview rounds cannot be changed after the interview starts","面试评价表模版已更新，请重试":"面试评价表模版已更新，请重试","预约面试不可取消":"预约面试不可取消","预约面试不存在":"预约面试不存在","预约面试关联表数据异常":"预约面试关联表数据异常","预约面试已截止":"预约面试已截止","预约面试已锁定":"预约面试已锁定","预约面试数据异常，缺少必要字段":"预约面试数据异常，缺少必要字段","预约面试状态不可预约":"预约面试状态不可预约","预约面试申请不存在":"预约面试申请不存在","：":": "}}),f),language:"en-US",development:"development"===process.env.NODE_ENV}),d=e({catalogs:(s={},s["zh-CN"]=u({languageData:{plurals:function(r,n){return"other"}},messages:{"Excel中候选人过多，最多限制500人导入":"Excel中候选人过多，最多限制500人导入","Excel中行数超长，Excel最多10000行":"Excel中行数超长，Excel最多10000行","Offer中职位信息为空":"Offer中职位信息为空","Offer审批不在审批中":"Offer审批不在审批中","Offer审批已进行，不可设置审批流程":"Offer审批已进行，不可设置审批流程","Offer审批流模版不存在":"Offer审批流模版不存在","Offer审批进行中，不可修改":"Offer审批进行中，不可修改","Offer审批进行中，不可取消":"Offer审批进行中，不可取消","Offer已审批":"Offer已审批","Offer模板不存在":"Offer模板不存在","Offer模板名称不能为空":"Offer模板名称不能为空","Offer模板名称长度不能超过{message}个字符":function(r){return["Offer模板名称长度不能超过",r("message"),"个字符"]},"Offer自定义字段名称不可重复":"Offer自定义字段名称不可重复","Offer自定义字段名称不能为空":"Offer自定义字段名称不能为空","Offer自定义字段名称过长":"Offer自定义字段名称过长","Offer自定义字段类型不合法":"Offer自定义字段类型不合法","Offer自定义字段类型不能为空":"Offer自定义字段类型不能为空","Office模板暂不支持报错快照":"Office模板暂不支持报错快照","pdf渲染失败":"pdf渲染失败","不可以移动候选人到禁用的场次":"不可以移动候选人到禁用的场次","不可变更不可用场次的面试状态":"不可变更不可用场次的面试状态","不可变更已取消或锁定的预约面试":"不可变更已取消或锁定的预约面试","不支持的Offer审批阶段":"不支持的Offer审批阶段","不能把候选人移入面试中房间":"不能把候选人移入面试中房间","不能移动其他场次或轮次的候选人":"不能移动其他场次或轮次的候选人","不能退出面试中的面试官":"不能退出面试中的面试官","中...":"中...","临时房间名称不能重名":"临时房间名称不能重名","修改次数已达到上限":"修改次数已达到上限","候选人不在队列中":"候选人不在队列中","候选人不能为空":"候选人不能为空","候选人其他职位正在处理中":"候选人其他职位正在处理中","候选人处于保护期":"候选人处于保护期","候选人没有参加面试":"候选人没有参加面试","候选人职位不统一":"候选人职位不统一","初筛阶段不存在":"初筛阶段不存在","参数错误":"参数错误","反馈创建叫号面试失败":"反馈创建叫号面试失败","只可修改状态为未预约和已预约的预约面试":"只可修改状态为未预约和已预约的预约面试","只可修改状态为预约中的预约面试":"只可修改状态为预约中的预约面试","只有面试官才能填写面试反馈":"只有面试官才能填写面试反馈","叫号面试允许现场申请的职位不匹配":"叫号面试允许现场申请的职位不匹配","叫号面试现场申请时间不匹配":"叫号面试现场申请时间不匹配","后续操作失败":"后续操作失败","多人面试数量设置异常":"多人面试数量设置异常","多人面试状态修改异常，只可以在面试当前之前进行修改":"多人面试状态修改异常，只可以在面试当前之前进行修改","多人面试轮次获取异常，一个面试官只能存在一个轮次下":"多人面试轮次获取异常，一个面试官只能存在一个轮次下","失败":"失败","存在不合法的offer审批状态":"存在不合法的offer审批状态","审批人已审批完成":"审批人已审批完成","导入候选人数据为空":"导入候选人数据为空","已签到的面试官不允许删除":"已签到的面试官不允许删除","当前叫号面试已经失效":"当前叫号面试已经失效","当前场地已经被删除，请选择其他场地":"当前场地已经被删除，请选择其他场地","当前无可选时间":"当前无可选时间","当前格子不存在":"当前格子不存在","当前状态不能重新锁定预约面试":"当前状态不能重新锁定预约面试","当前用户下面不存在该人才地图配置":"当前用户下面不存在该人才地图配置","当前用户下面存在名称相同的人才地图配置":"当前用户下面存在名称相同的人才地图配置","当前用户还有下载任务没有处理完成，请稍后重试":"当前用户还有下载任务没有处理完成，请稍后重试","当前组不存在":"当前组不存在","您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传":"您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传","您上传的文件表头与模版不匹配，请下载模版修改后重新上传":"您上传的文件表头与模版不匹配，请下载模版修改后重新上传","您已经在 {message} 签到就座":function(r){return["您已经在 ",r("message")," 签到就座"]},"您的操作过于频繁，请耐心等待当前请求结束。":"您的操作过于频繁，请耐心等待当前请求结束。","成功":"成功","房间不存在":"房间不存在","房间名称不可重复":"房间名称不可重复","房间组不存在":"房间组不存在","房间组名称不可重复":"房间组名称不可重复","找不到可用的面试申请":"找不到可用的面试申请","找不到归档原因":"找不到归档原因","找不到所选面试评价表，请刷新重试":"找不到所选面试评价表，请刷新重试","找不到招聘模式":"找不到招聘模式","找不到猎头合同或合同已失效/禁用":"找不到猎头合同或合同已失效/禁用","找不到符合条件的面试记录":"找不到符合条件的面试记录","操作":"操作","数据导出上限为1w条，如需导出更多请联系CSM":"数据导出上限为1w条，如需导出更多请联系CSM","文件上传失败":"文件上传失败","无操作部门权限":"无操作部门权限","无效的面试反馈":"无效的面试反馈","无法创建过去开始的叫号面试":"无法创建过去开始的叫号面试","无法删除候选人":"无法删除候选人","无法取消已经开始的视频叫号面试":"无法取消已经开始的视频叫号面试","无法将面试开始时间修改为过去的时间":"无法将面试开始时间修改为过去的时间","暂不支持拉勾或者智联外的方式":"暂不支持拉勾或者智联外的方式","有候选人处于异常状态（被删除），已自动过滤":"有候选人处于异常状态（被删除），已自动过滤","服务器错误，请重试":"服务器错误，请重试","服务调用异常":"服务调用异常","未知模板类型":"未知模板类型","未知错误":"未知错误","本场叫号面试已存在相同职位下的申请":"本场叫号面试已存在相同职位下的申请","本次修改时间与已预约时间相同，无需变更":"本次修改时间与已预约时间相同，无需变更","权重总和不是100":"权重总和不是100","权重表里的打分题，权重不能为空":"权重表里的打分题，权重不能为空","权重面试评价表模块计算类型必须全部是权重":"权重面试评价表模块计算类型必须全部是权重","查询赛码面试结果异常":"查询赛码面试结果异常","检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后":"检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后","清除候选人token失败":"清除候选人token失败","现场叫号面试状态不匹配":"现场叫号面试状态不匹配","现场申请职位不能为空":"现场申请职位不能为空","用户权限不够，不能完成该操作":"用户权限不够，不能完成该操作","登录失效":"登录失效","目标场次已满员":"目标场次已满员","系统中已经有同名模板，请更改后再试":"系统中已经有同名模板，请更改后再试","系统错误":"系统错误","绑定赛码数据异常":"绑定赛码数据异常","缺少职位Id":"缺少职位Id","职位不存在!":"职位不存在!","职位已关闭":"职位已关闭","职位选择错误":"职位选择错误","获取反馈异常，反馈数据异常":"获取反馈异常，反馈数据异常","获取反馈异常，反馈数据异常反馈模版数量不可大于1":"获取反馈异常，反馈数据异常反馈模版数量不可大于1","获取渠道信息失败":"获取渠道信息失败","获取猎头渠道信息失败":"获取猎头渠道信息失败","获取职位信息失败":"获取职位信息失败","获取配置信息失败":"获取配置信息失败","该人才地图配置与当前节点的不存在对应关系，请检查后重试":"该人才地图配置与当前节点的不存在对应关系，请检查后重试","该场地正在被叫号面试使用，不可删除":"该场地正在被叫号面试使用，不可删除","该场次已有候选人预约，请移动全部候选人后再禁用":"该场次已有候选人预约，请移动全部候选人后再禁用","该房间已经存在其他面试官":"该房间已经存在其他面试官","该房间正在被叫号面试使用，不可删除":"该房间正在被叫号面试使用，不可删除","该模板为默认模板，无法删除":"该模板为默认模板，无法删除","请确保打分题分值统一":"请确保打分题分值统一","读取猎头公司设置失败!":"读取猎头公司设置失败!","调用赛码接口异常":"调用赛码接口异常","账号无法获取候选人信息":"账号无法获取候选人信息","账号有效期失效，请稍后重试":"账号有效期失效，请稍后重试","账户已过期":"账户已过期","赛码同步状态异常":"赛码同步状态异常","赛码异步处理未完成":"赛码异步处理未完成","轮次名称不可以为空":"轮次名称不可以为空","轮次名称或英文名称不可以重复":"轮次名称或英文名称不可以重复","队列不存在":"队列不存在","需要登录才能进行该操作":"需要登录才能进行该操作","面试中的候选人不能更换面试官":"面试中的候选人不能更换面试官","面试中的候选人不能移动":"面试中的候选人不能移动","面试分组时间不能小于面试开始时":"面试分组时间不能小于面试开始时","面试官已填写反馈":"面试官已填写反馈","面试官异常":"面试官异常","面试官没有在房间中":"面试官没有在房间中","面试官没有该轮次":"面试官没有该轮次","面试官重复出现":"面试官重复出现","面试开始后无法修改简历类型":"面试开始后无法修改简历类型","面试开始后无法删除已选房间":"面试开始后无法删除已选房间","面试开始后无法变更面试地点":"面试开始后无法变更面试地点","面试开始后无法变更面试开始时间":"面试开始后无法变更面试开始时间","面试开始后无法变更面试轮次":"面试开始后无法变更面试轮次","面试评价表模版已更新，请重试":"面试评价表模版已更新，请重试","预约面试不可取消":"预约面试不可取消","预约面试不存在":"预约面试不存在","预约面试关联表数据异常":"预约面试关联表数据异常","预约面试已截止":"预约面试已截止","预约面试已锁定":"预约面试已锁定","预约面试数据异常，缺少必要字段":"预约面试数据异常，缺少必要字段","预约面试状态不可预约":"预约面试状态不可预约","预约面试申请不存在":"预约面试申请不存在","：":"："}}),s),language:"zh-CN",development:"development"===process.env.NODE_ENV});function h(){var r="";try{r||"undefined"==typeof document||(r=document.documentElement.lang),r||"undefined"==typeof navigator||(/en/i.test(navigator.language)?r="en-US":/zh/i.test(navigator.language)&&(r="zh-CN")),r||(r="zh-CN")}catch(n){r="zh-CN"}return r}function l(r){switch(r=r||h()){case"en-US":return v;case"zh-CN":return d;case"default":return l(h());default:return d}}function p(){var r=a(["未知错误"]);return p=function(){return r},r}function m(){var r=a(["该人才地图配置与当前节点的不存在对应关系，请检查后重试"]);return m=function(){return r},r}function O(){var r=a(["当前用户下面不存在该人才地图配置"]);return O=function(){return r},r}function b(){var r=a(["当前用户下面存在名称相同的人才地图配置"]);return b=function(){return r},r}function w(){var r=a(["当前用户还有下载任务没有处理完成，请稍后重试"]);return w=function(){return r},r}function g(){var r=a(["数据导出上限为1w条，如需导出更多请联系CSM"]);return g=function(){return r},r}function y(){var r=a(["初筛阶段不存在"]);return y=function(){return r},r}function k(){var r=a(["候选人职位不统一"]);return k=function(){return r},r}function q(){var r=a(["获取猎头渠道信息失败"]);return q=function(){return r},r}function j(){var r=a(["找不到猎头合同或合同已失效/禁用"]);return j=function(){return r},r}function S(){var r=a(["职位已关闭"]);return S=function(){return r},r}function x(){var r=a(["候选人处于保护期"]);return x=function(){return r},r}function E(){var r=a(["清除候选人token失败"]);return E=function(){return r},r}function T(){var r=a(["获取渠道信息失败"]);return T=function(){return r},r}function H(){var r=a(["获取职位信息失败"]);return H=function(){return r},r}function P(){var r=a(["获取配置信息失败"]);return P=function(){return r},r}function C(){var r=a(["读取猎头公司设置失败!"]);return C=function(){return r},r}function R(){var r=a(["职位不存在!"]);return R=function(){return r},r}function D(){var r=a(["职位选择错误"]);return D=function(){return r},r}function I(){var r=a(["后续操作失败"]);return I=function(){return r},r}function N(){var r=a(["Offer中职位信息为空"]);return N=function(){return r},r}function F(){var r=a(["审批人已审批完成"]);return F=function(){return r},r}function _(){var r=a(["不支持的Offer审批阶段"]);return _=function(){return r},r}function M(){var r=a(["Offer已审批"]);return M=function(){return r},r}function z(){var r=a(["存在不合法的offer审批状态"]);return z=function(){return r},r}function A(){var r=a(["Offer审批进行中，不可取消"]);return A=function(){return r},r}function U(){var r=a(["Offer审批流模版不存在"]);return U=function(){return r},r}function L(){var r=a(["Offer审批已进行，不可设置审批流程"]);return L=function(){return r},r}function G(){var r=a(["Offer审批不在审批中"]);return G=function(){return r},r}function Y(){var r=a(["Offer审批进行中，不可修改"]);return Y=function(){return r},r}function V(){var r=a(["无操作部门权限"]);return V=function(){return r},r}function J(){var r=a(["Offer自定义字段名称不可重复"]);return J=function(){return r},r}function K(){var r=a(["Offer自定义字段名称过长"]);return K=function(){return r},r}function Q(){var r=a(["Offer自定义字段类型不合法"]);return Q=function(){return r},r}function Z(){var r=a(["Offer自定义字段类型不能为空"]);return Z=function(){return r},r}function B(){var r=a(["Offer自定义字段名称不能为空"]);return B=function(){return r},r}function W(){var r=a(["文件上传失败"]);return W=function(){return r},r}function X(){var r=a(["Office模板暂不支持报错快照"]);return X=function(){return r},r}function $(){var r=a(["未知模板类型"]);return $=function(){return r},r}function rr(){var r=a(["该模板为默认模板，无法删除"]);return rr=function(){return r},r}function nr(){var r=a(["系统中已经有同名模板，请更改后再试"]);return nr=function(){return r},r}function tr(){var r=a(["Offer模板名称长度不能超过","个字符"]);return tr=function(){return r},r}function er(){var r=a(["Offer模板名称不能为空"]);return er=function(){return r},r}function ur(){var r=a(["Offer模板不存在"]);return ur=function(){return r},r}function or(){var r=a(["赛码同步状态异常"]);return or=function(){return r},r}function ir(){var r=a(["赛码异步处理未完成"]);return ir=function(){return r},r}function cr(){var r=a(["查询赛码面试结果异常"]);return cr=function(){return r},r}function ar(){var r=a(["调用赛码接口异常"]);return ar=function(){return r},r}function fr(){var r=a(["绑定赛码数据异常"]);return fr=function(){return r},r}function sr(){var r=a(["无法取消已经开始的视频叫号面试"]);return sr=function(){return r},r}function vr(){var r=a(["当前状态不能重新锁定预约面试"]);return vr=function(){return r},r}function dr(){var r=a(["面试官异常"]);return dr=function(){return r},r}function hr(){var r=a(["本次修改时间与已预约时间相同，无需变更"]);return hr=function(){return r},r}function lr(){var r=a(["预约面试关联表数据异常"]);return lr=function(){return r},r}function pr(){var r=a(["服务调用异常"]);return pr=function(){return r},r}function mr(){var r=a(["预约面试已锁定"]);return mr=function(){return r},r}function Or(){var r=a(["找不到归档原因"]);return Or=function(){return r},r}function br(){var r=a(["目标场次已满员"]);return br=function(){return r},r}function wr(){var r=a(["不可以移动候选人到禁用的场次"]);return wr=function(){return r},r}function gr(){var r=a(["预约面试申请不存在"]);return gr=function(){return r},r}function yr(){var r=a(["当前组不存在"]);return yr=function(){return r},r}function kr(){var r=a(["当前无可选时间"]);return kr=function(){return r},r}function qr(){var r=a(["预约面试数据异常，缺少必要字段"]);return qr=function(){return r},r}function jr(){var r=a(["预约面试状态不可预约"]);return jr=function(){return r},r}function Sr(){var r=a(["修改次数已达到上限"]);return Sr=function(){return r},r}function xr(){var r=a(["只可修改状态为预约中的预约面试"]);return xr=function(){return r},r}function Er(){var r=a(["预约面试已截止"]);return Er=function(){return r},r}function Tr(){var r=a(["只可修改状态为未预约和已预约的预约面试"]);return Tr=function(){return r},r}function Hr(){var r=a(["不可变更已取消或锁定的预约面试"]);return Hr=function(){return r},r}function Pr(){var r=a(["当前格子不存在"]);return Pr=function(){return r},r}function Cr(){var r=a(["该场次已有候选人预约，请移动全部候选人后再禁用"]);return Cr=function(){return r},r}function Rr(){var r=a(["不可变更不可用场次的面试状态"]);return Rr=function(){return r},r}function Dr(){var r=a(["预约面试不可取消"]);return Dr=function(){return r},r}function Ir(){var r=a(["预约面试不存在"]);return Ir=function(){return r},r}function Nr(){var r=a(["面试评价表模版已更新，请重试"]);return Nr=function(){return r},r}function Fr(){var r=a(["服务器错误，请重试"]);return Fr=function(){return r},r}function _r(){var r=a(["只有面试官才能填写面试反馈"]);return _r=function(){return r},r}function Mr(){var r=a(["无效的面试反馈"]);return Mr=function(){return r},r}function zr(){var r=a(["候选人没有参加面试"]);return zr=function(){return r},r}function Ar(){var r=a(["面试官已填写反馈"]);return Ar=function(){return r},r}function Ur(){var r=a(["找不到符合条件的面试记录"]);return Ur=function(){return r},r}function Lr(){var r=a(["找不到招聘模式"]);return Lr=function(){return r},r}function Gr(){var r=a(["找不到所选面试评价表，请刷新重试"]);return Gr=function(){return r},r}function Yr(){var r=a(["缺少职位Id"]);return Yr=function(){return r},r}function Vr(){var r=a(["请确保打分题分值统一"]);return Vr=function(){return r},r}function Jr(){var r=a(["权重表里的打分题，权重不能为空"]);return Jr=function(){return r},r}function Kr(){var r=a(["权重总和不是100"]);return Kr=function(){return r},r}function Qr(){var r=a(["权重面试评价表模块计算类型必须全部是权重"]);return Qr=function(){return r},r}function Zr(){var r=a(["pdf渲染失败"]);return Zr=function(){return r},r}function Br(){var r=a(["轮次名称或英文名称不可以重复"]);return Br=function(){return r},r}function Wr(){var r=a(["轮次名称不可以为空"]);return Wr=function(){return r},r}function Xr(){var r=a(["已签到的面试官不允许删除"]);return Xr=function(){return r},r}function $r(){var r=a(["暂不支持拉勾或者智联外的方式"]);return $r=function(){return r},r}function rn(){var r=a(["参数错误"]);return rn=function(){return r},r}function nn(){var r=a(["账号无法获取候选人信息"]);return nn=function(){return r},r}function tn(){var r=a(["系统错误"]);return tn=function(){return r},r}function en(){var r=a(["账号有效期失效，请稍后重试"]);return en=function(){return r},r}function un(){var r=a(["导入候选人数据为空"]);return un=function(){return r},r}function on(){var r=a(["Excel中候选人过多，最多限制500人导入"]);return on=function(){return r},r}function cn(){var r=a(["Excel中行数超长，Excel最多10000行"]);return cn=function(){return r},r}function an(){var r=a(["您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传"]);return an=function(){return r},r}function fn(){var r=a(["您上传的文件表头与模版不匹配，请下载模版修改后重新上传"]);return fn=function(){return r},r}function sn(){var r=a(["该场地正在被叫号面试使用，不可删除"]);return sn=function(){return r},r}function vn(){var r=a(["该房间正在被叫号面试使用，不可删除"]);return vn=function(){return r},r}function dn(){var r=a(["房间组不存在"]);return dn=function(){return r},r}function hn(){var r=a(["房间组名称不可重复"]);return hn=function(){return r},r}function ln(){var r=a(["房间不存在"]);return ln=function(){return r},r}function pn(){var r=a(["房间名称不可重复"]);return pn=function(){return r},r}function mn(){var r=a(["有候选人处于异常状态（被删除），已自动过滤"]);return mn=function(){return r},r}function On(){var r=a(["面试中的候选人不能移动"]);return On=function(){return r},r}function bn(){var r=a(["获取反馈异常，反馈数据异常"]);return bn=function(){return r},r}function wn(){var r=a(["获取反馈异常，反馈数据异常反馈模版数量不可大于1"]);return wn=function(){return r},r}function gn(){var r=a(["多人面试轮次获取异常，一个面试官只能存在一个轮次下"]);return gn=function(){return r},r}function yn(){var r=a(["多人面试状态修改异常，只可以在面试当前之前进行修改"]);return yn=function(){return r},r}function kn(){var r=a(["多人面试数量设置异常"]);return kn=function(){return r},r}function qn(){var r=a(["面试官重复出现"]);return qn=function(){return r},r}function jn(){var r=a(["候选人其他职位正在处理中"]);return jn=function(){return r},r}function Sn(){var r=a(["检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后"]);return Sn=function(){return r},r}function xn(){var r=a(["本场叫号面试已存在相同职位下的申请"]);return xn=function(){return r},r}function En(){var r=a(["叫号面试允许现场申请的职位不匹配"]);return En=function(){return r},r}function Tn(){var r=a(["叫号面试现场申请时间不匹配"]);return Tn=function(){return r},r}function Hn(){var r=a(["现场叫号面试状态不匹配"]);return Hn=function(){return r},r}function Pn(){var r=a(["候选人不能为空"]);return Pn=function(){return r},r}function Cn(){var r=a(["现场申请职位不能为空"]);return Cn=function(){return r},r}function Rn(){var r=a(["当前叫号面试已经失效"]);return Rn=function(){return r},r}function Dn(){var r=a(["面试分组时间不能小于面试开始时"]);return Dn=function(){return r},r}function In(){var r=a(["反馈创建叫号面试失败"]);return In=function(){return r},r}function Nn(){var r=a(["不能移动其他场次或轮次的候选人"]);return Nn=function(){return r},r}function Fn(){var r=a(["候选人不在队列中"]);return Fn=function(){return r},r}function _n(){var r=a(["面试中的候选人不能更换面试官"]);return _n=function(){return r},r}function Mn(){var r=a(["队列不存在"]);return Mn=function(){return r},r}function zn(){var r=a(["不能退出面试中的面试官"]);return zn=function(){return r},r}function An(){var r=a(["不能把候选人移入面试中房间"]);return An=function(){return r},r}function Un(){var r=a(["该房间已经存在其他面试官"]);return Un=function(){return r},r}function Ln(){var r=a(["面试官没有该轮次"]);return Ln=function(){return r},r}function Gn(){var r=a(["面试官没有在房间中"]);return Gn=function(){return r},r}function Yn(){var r=a(["您已经在 "," 签到就座"]);return Yn=function(){return r},r}function Vn(){var r=a(["临时房间名称不能重名"]);return Vn=function(){return r},r}function Jn(){var r=a(["当前场地已经被删除，请选择其他场地"]);return Jn=function(){return r},r}function Kn(){var r=a(["面试开始后无法删除已选房间"]);return Kn=function(){return r},r}function Qn(){var r=a(["面试开始后无法修改简历类型"]);return Qn=function(){return r},r}function Zn(){var r=a(["面试开始后无法变更面试轮次"]);return Zn=function(){return r},r}function Bn(){var r=a(["无法删除候选人"]);return Bn=function(){return r},r}function Wn(){var r=a(["面试开始后无法变更面试地点"]);return Wn=function(){return r},r}function Xn(){var r=a(["无法将面试开始时间修改为过去的时间"]);return Xn=function(){return r},r}function $n(){var r=a(["面试开始后无法变更面试开始时间"]);return $n=function(){return r},r}function rt(){var r=a(["找不到可用的面试申请"]);return rt=function(){return r},r}function nt(){var r=a(["无法创建过去开始的叫号面试"]);return nt=function(){return r},r}function tt(){var r=a(["账户已过期"]);return tt=function(){return r},r}function et(){var r=a(["用户权限不够，不能完成该操作"]);return et=function(){return r},r}function ut(){var r=a(["登录失效"]);return ut=function(){return r},r}function ot(){var r=a(["需要登录才能进行该操作"]);return ot=function(){return r},r}function it(){var r=a(["参数错误"]);return it=function(){return r},r}function ct(){var r=a(["成功"]);return ct=function(){return r},r}function at(){var r=a(["您的操作过于频繁，请耐心等待当前请求结束。"]);return at=function(){return r},r}function ft(){var r=a(["需要登录才能进行该操作"]);return ft=function(){return r},r}function st(){var r=a(["成功"]);return st=function(){return r},r}function vt(){var r=a(["未知错误"]);return vt=function(){return r},r}var dt=l(),ht=[201021,300102];function lt(){var r=a(["："]);return lt=function(){return r},r}function pt(){var r=a(["失败"]);return pt=function(){return r},r}function mt(){var r=a(["成功"]);return mt=function(){return r},r}function Ot(){var r=a(["中..."]);return Ot=function(){return r},r}function bt(){var r=a(["操作"]);return bt=function(){return r},r}var wt=l(),gt={loadingToast:function(){},successToast:function(){},errorToast:function(){}},yt=function(){function e(r,n){var t=void 0===n?{}:n,e=t.query,u=t.dispatch,o=t.toastPrefix,i=void 0===o?wt.t(bt()):o,c=t.withSuccessToast,a=void 0!==c&&c,f=t.withErrorToast,s=void 0!==f&&f,v=t.withLoadingToast,d=void 0!==v&&v;this.id=Date.now()+"_"+parseInt(1e3*Math.random()),this.request=null,this.url=r,this.query=e,this.dispatch=u,this.toastPrefix=i,this.withSuccessToast=a,this.withErrorToast=s,this.withLoadingToast=d,this.checkResponse=this.checkResponse.bind(this),this.beforeHook=this.beforeHook.bind(this),this.afterSuccessHook=this.afterSuccessHook.bind(this),this.afterFailedHook=this.afterFailedHook.bind(this)}e.setGlobalOption=function(r){var n,t=r.headers;t&&((n=e.globalOption.headers).push.apply(n,t),window._mokaRequestGlobalOption=window._mokaRequestGlobalOption||{},window._mokaRequestGlobalOption.headers=e.globalOption.headers)};var u,o=e.prototype;return o.checkResponse=function(r){if(200===r.body.code||0===r.body.code)return r;throw Object.assign(new Error(r.body.msg||"Failed response code detected."),{response:r})},o.beforeHook=function(){var r=this;this.withLoadingToast&&this.dispatch&&this.dispatch(gt.loadingToast(this.toastPrefix+" "+wt.t(Ot()),this.id)),this.request.use(function(r){/\/api\/(chromoka\/)?upload_resume/i.test(r.url)&&window._wsConnection&&window._wsConnection.id&&r.set("ws-id",window._wsConnection.id)}),this.request.set("use-http-status",0),e.globalOption.headers.forEach(function(n){r.request.set(n.key,n.value)})},o.afterSuccessHook=function(r){return this.withSuccessToast&&this.dispatch&&this.dispatch(gt.successToast(this.toastPrefix+wt.t(mt()),this.id)),r.body.data},o.afterFailedHook=function(r){var n=t(r,"response.req.aborted",!1),e=r.response&&r.response.body&&r.response.body.code,u=r.response&&r.response.body&&r.response.body.msg,o="";ht.includes(e)&&(o=r.response&&r.response.body&&r.response.body.data&&r.response.body.data.locationDesc);var i=function(r,n,t){switch(r){case-1:return dt.t(vt());case 0:return dt.t(st());case 1:return dt.t(ft());case 2:return dt.t(at());case 200:return dt.t(ct());case 101:case 102:return dt.t(it());case 100001:return dt.t(ot());case 100002:return dt.t(ut());case 100003:return dt.t(et());case 100004:return dt.t(tt());case 201010:return dt.t(nt());case 201011:return dt.t(rt());case 201012:return dt.t($n());case 201013:return dt.t(Xn());case 201014:return dt.t(Wn());case 201015:return dt.t(Bn());case 201016:return dt.t(Zn());case 201017:return dt.t(Qn());case 201018:return dt.t(Kn());case 201019:return dt.t(Jn());case 201020:return dt.t(Vn());case 201021:return dt.t(Yn(),n);case 201022:return dt.t(Gn());case 201023:return dt.t(Ln());case 201024:return dt.t(Un());case 201025:return dt.t(An());case 201026:return dt.t(zn());case 201030:return dt.t(Mn());case 201031:return dt.t(_n());case 201032:return dt.t(Fn());case 201033:return dt.t(Nn());case 201040:return dt.t(In());case 201041:return dt.t(Dn());case 201042:return dt.t(Rn());case 201043:return dt.t(Cn());case 201044:return dt.t(Pn());case 201045:return dt.t(Hn());case 201046:return dt.t(Tn());case 201047:return dt.t(En());case 201048:return dt.t(xn());case 201049:return dt.t(Sn());case 201050:return dt.t(jn());case 201051:return dt.t(qn());case 201052:return dt.t(kn());case 201053:return dt.t(yn());case 201054:return dt.t(gn());case 201055:return dt.t(wn());case 201056:return dt.t(bn());case 201057:return dt.t(On());case 201058:return dt.t(mn());case 21001:return dt.t(pn());case 21002:return dt.t(ln());case 21003:return dt.t(hn());case 21004:return dt.t(dn());case 21005:return dt.t(vn());case 21006:return dt.t(sn());case 40901:return dt.t(fn());case 40902:return dt.t(an());case 40903:return dt.t(cn());case 40904:return dt.t(on());case 40905:return dt.t(un());case 50001:return dt.t(en());case 50002:return dt.t(tn());case 50003:return dt.t(nn());case 50004:return dt.t(rn());case 50005:return dt.t($r());case 201059:return dt.t(Xr());case 211011:return dt.t(Wr());case 211012:return dt.t(Br());case 211013:return dt.t(Zr());case 211014:return dt.t(Qr());case 211015:return dt.t(Kr());case 211016:return dt.t(Jr());case 211020:return dt.t(Vr());case 211017:return dt.t(Yr());case 211018:return dt.t(Gr());case 211019:return dt.t(Lr());case 211030:return dt.t(Ur());case 211031:return dt.t(Ar());case 211032:return dt.t(zr());case 211033:return dt.t(Mr());case 211034:return dt.t(_r());case 211037:return dt.t(Fr());case 211090:return dt.t(Nr());case 221001:return dt.t(Ir());case 221002:return dt.t(Dr());case 221003:return dt.t(Rr());case 221004:return dt.t(Cr());case 221005:return dt.t(Pr());case 221006:return dt.t(Hr());case 221007:return dt.t(Tr());case 221008:return dt.t(Er());case 221009:return dt.t(xr());case 221010:return dt.t(Sr());case 221011:return dt.t(jr());case 221012:return dt.t(qr());case 221013:return dt.t(kr());case 221014:return dt.t(yr());case 221015:return dt.t(gr());case 221016:return dt.t(wr());case 221017:return dt.t(br());case 221018:return dt.t(Or());case 221019:return dt.t(mr());case 221020:return dt.t(pr());case 221021:return dt.t(lr());case 221022:return dt.t(hr());case 221023:return dt.t(dr());case 221024:return dt.t(vr());case 211100:return dt.t(sr());case 211101:return dt.t(fr());case 211102:return dt.t(ar());case 211103:return dt.t(cr());case 211104:return dt.t(ir());case 211105:return dt.t(or());case 300100:return dt.t(ur());case 300101:return dt.t(er());case 300102:return dt.t(tr(),n);case 300103:return dt.t(nr());case 300104:return dt.t(rr());case 300105:return dt.t($());case 300106:return dt.t(X());case 300107:return dt.t(W());case 300200:return dt.t(B());case 300201:return dt.t(Z());case 300202:return dt.t(Q());case 300203:return dt.t(K());case 300204:return dt.t(J());case 300303:return dt.t(V());case 300310:return dt.t(Y());case 300311:return dt.t(G());case 300312:return dt.t(L());case 300313:return dt.t(U());case 300315:return dt.t(A());case 300316:return dt.t(z());case 300319:return dt.t(M());case 300320:return dt.t(_());case 300321:return dt.t(F());case 300605:return dt.t(N());case 400009:return dt.t(I());case 400010:return dt.t(D());case 400011:return dt.t(R());case 400012:return dt.t(C());case 400013:return dt.t(P());case 400014:return dt.t(H());case 400015:return dt.t(T());case 400016:return dt.t(E());case 400017:return dt.t(x());case 400018:return dt.t(S());case 400019:return dt.t(j());case 400020:return dt.t(q());case 400021:return dt.t(k());case 400022:return dt.t(y());case 400100:return dt.t(g());case 400101:return dt.t(w());case 400102:return dt.t(b());case 400103:case 400105:case 400106:return dt.t(O());case 400104:return dt.t(m());default:return t||dt.t(p())}}(e,o,u);throw!n&&r.response&&console.error("MokaRequest Error: ",r.response.req.method,r.response.req.url),this.withErrorToast&&this.dispatch&&!n&&this.dispatch(gt.errorToast(this.toastPrefix+" "+wt.t(pt())+wt.t(lt())+i,this.id)),Object.assign(r,{reason:i})},o.get=function(){var r=this;return this.request=n.get(this.url).query(this.queryString),this.beforeHook(),new Promise(function(n,t){r.request.end(function(r,e){r?t(r):n(e)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)},o.put=function(r){var t=this;return this.request=n.put(this.url).query(this.queryString).send(r),this.beforeHook(),new Promise(function(r,n){t.request.end(function(t,e){t?n(t):r(e)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)},o.post=function(r){var t=this;return this.request=n.post(this.url).query(this.queryString).send(r),this.beforeHook(),new Promise(function(r,n){t.request.end(function(t,e){t?n(t):r(e)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)},o.del=function(r){var t=this;return this.request=n.delete(this.url).query(this.queryString).send(r),this.beforeHook(),new Promise(function(r,n){return t.request.end(function(t,e){t?n(t):r(e)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)},o.attach=function(r){var t=this,e=r.files,u=void 0===e?[]:e,o=r.data,i=void 0===o?{}:o,c=r.onProcess,a=void 0===c?function(){}:c;return this.request=n.post(this.url).query(this.queryString).on("progress",a),u.forEach(function(r){t.request=t.request.attach(r.field,r.file,r.option)}),Object.entries(i).forEach(function(r){t.request=t.request.field(r[0],r[1])}),this.beforeHook(),new Promise(function(r,n){t.request.end(function(t,e){t?n(t):r(e)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)},o.abort=function(){this.request&&this.request.abort()},(u=[{key:"queryString",get:function(){return this.query?r.stringify(this.query,{arrayFormat:"brackets"}):this.query}}])&&function(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}(e.prototype,u),e}();yt.globalOption={headers:[]};var kt=function(r){gt=c(c({},gt),r)};export default function(r,n){return new yt(r,n)}export{yt as MokaRequest,kt as configure};