import e from"qs";import t from"superagent";import r from"lodash/get";import{setupI18n as s,unpackCatalog as n}from"lingui-i18n";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}const c=s({catalogs:{"en-US":n({languageData:{plurals:function(e,t){var r=String(e).split("."),s=!r[1],n=Number(r[0])==e,a=n&&r[0].slice(-1),o=n&&r[0].slice(-2);return t?1==a&&11!=o?"one":2==a&&12!=o?"two":3==a&&13!=o?"few":"other":1==e&&s?"one":"other"}},messages:{"Excel中候选人过多，最多限制500人导入":"Excel中候选人过多，最多限制500人导入","Excel中行数超长，Excel最多10000行":"Excel中行数超长，Excel最多10000行",Offer中职位信息为空:"Offer中职位信息为空",Offer审批不在审批中:"Offer审批不在审批中","Offer审批已进行，不可设置审批流程":"Offer审批已进行，不可设置审批流程",Offer审批流模版不存在:"Offer审批流模版不存在","Offer审批进行中，不可修改":"Offer审批进行中，不可修改","Offer审批进行中，不可取消":"Offer审批进行中，不可取消",Offer已审批:"Offer已审批",Offer模板不存在:"Offer模板不存在",Offer模板名称不能为空:"Offer模板名称不能为空","Offer模板名称长度不能超过{message}个字符":function(e){return["Offer模板名称长度不能超过",e("message"),"个字符"]},Offer自定义字段名称不可重复:"Offer自定义字段名称不可重复",Offer自定义字段名称不能为空:"Offer自定义字段名称不能为空",Offer自定义字段名称过长:"Offer自定义字段名称过长",Offer自定义字段类型不合法:"Offer自定义字段类型不合法",Offer自定义字段类型不能为空:"Offer自定义字段类型不能为空",Office模板暂不支持报错快照:"Office模板暂不支持报错快照",pdf渲染失败:"pdf渲染失败",不可以移动候选人到禁用的场次:"不可以移动候选人到禁用的场次",不可变更不可用场次的面试状态:"不可变更不可用场次的面试状态",不可变更已取消或锁定的预约面试:"不可变更已取消或锁定的预约面试",不支持的Offer审批阶段:"不支持的Offer审批阶段",不能把候选人移入面试中房间:"You can't move a candidate into an interview room",不能移动其他场次或轮次的候选人:"Candidates who can't move another session or round",不能退出面试中的面试官:"Can't quit the interviewer in the interview","中...":"...",临时房间名称不能重名:"Temporary room name cannot be duplicate",修改次数已达到上限:"修改次数已达到上限",候选人不在队列中:"The candidate is not in the queue",候选人不能为空:"⁣Candidate cannot be empty",候选人其他职位正在处理中:"候选人其他职位正在处理中",候选人处于保护期:"候选人处于保护期",候选人没有参加面试:"候选人没有参加面试",候选人职位不统一:"候选人职位不统一",初筛阶段不存在:"初筛阶段不存在",参数错误:"Parameter error",反馈创建叫号面试失败:"Feedback failed to create call interview",只可修改状态为未预约和已预约的预约面试:"只可修改状态为未预约和已预约的预约面试",只可修改状态为预约中的预约面试:"只可修改状态为预约中的预约面试",只有面试官才能填写面试反馈:"Only interviewers can fill in interview feedback",叫号面试允许现场申请的职位不匹配:"叫号面试允许现场申请的职位不匹配",叫号面试现场申请时间不匹配:"叫号面试现场申请时间不匹配",后续操作失败:"后续操作失败",多人面试数量设置异常:"The number of interviews for multiple people is set abnormally","多人面试状态修改异常，只可以在面试当前之前进行修改":"The multi-person interview status is modified abnormally and can only be modified before the current interview","多人面试轮次获取异常，一个面试官只能存在一个轮次下":"Multi-person interview rounds get abnormal, one interviewer can only exist under one round",失败:"failed",存在不合法的offer审批状态:"存在不合法的offer审批状态",审批人已审批完成:"审批人已审批完成",导入候选人数据为空:"导入候选人数据为空",已签到的面试官不允许删除:"The interviewer who has checked in is not allowed to delete",当前叫号面试已经失效:"当前叫号面试已经失效","当前场地已经被删除，请选择其他场地":"The current site has been deleted. Please choose another site",当前无可选时间:"当前无可选时间",当前格子不存在:"当前格子不存在",当前状态不能重新锁定预约面试:"当前状态不能重新锁定预约面试",当前用户下面不存在该人才地图配置:"当前用户下面不存在该人才地图配置",当前用户下面存在名称相同的人才地图配置:"当前用户下面存在名称相同的人才地图配置","当前用户还有下载任务没有处理完成，请稍后重试":"当前用户还有下载任务没有处理完成，请稍后重试",当前组不存在:"当前组不存在","您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传":"您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传","您上传的文件表头与模版不匹配，请下载模版修改后重新上传":"您上传的文件表头与模版不匹配，请下载模版修改后重新上传","您已经在 {message} 签到就座":function(e){return["You have signed in at ",e("message")]},"您的操作过于频繁，请耐心等待当前请求结束。":"Your operation is too frequent, please wait for the current request ends.",成功:"succeeded",房间不存在:"Room does not exist",房间名称不可重复:"Room name cannot be duplicate",房间组不存在:"Room group does not exist",房间组名称不可重复:"Room group name cannot be duplicate",找不到可用的面试申请:"No available interview applications found",找不到归档原因:"找不到归档原因","找不到所选面试评价表，请刷新重试":"Cannot find selected scorecard; please retry",找不到招聘模式:"Cannot find the recruitment type","找不到猎头合同或合同已失效/禁用":"找不到猎头合同或合同已失效/禁用",找不到符合条件的面试记录:"找不到符合条件的面试记录",操作:"Action","数据导出上限为1w条，如需导出更多请联系CSM":"数据导出上限为1w条，如需导出更多请联系CSM",文件上传失败:"文件上传失败",无操作部门权限:"无操作部门权限",无效的面试反馈:"无效的面试反馈",无法创建过去开始的叫号面试:"Can't create a call to interview that started in the past",无法删除候选人:"Unable to delete candidate",无法取消已经开始的视频叫号面试:"无法取消已经开始的视频叫号面试",无法将面试开始时间修改为过去的时间:"Cannot change interview start time to past time",暂不支持拉勾或者智联外的方式:"Do not support the way of pull hook or Zhilian","有候选人处于异常状态（被删除），已自动过滤":"A candidate is in an abnormal state (deleted), which has been automatically filtered","服务器错误，请重试":"Server error",服务调用异常:"服务调用异常",未知模板类型:"未知模板类型",未知错误:"Unknown error",本场叫号面试已存在相同职位下的申请:"本场叫号面试已存在相同职位下的申请","本次修改时间与已预约时间相同，无需变更":"本次修改时间与已预约时间相同，无需变更",权重总和不是100:"权重总和不是100","权重表里的打分题，权重不能为空":"权重表里的打分题，权重不能为空",权重面试评价表模块计算类型必须全部是权重:"权重面试评价表模块计算类型必须全部是权重",查询赛码面试结果异常:"查询赛码面试结果异常","检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后":"检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后",清除候选人token失败:"清除候选人token失败",现场叫号面试状态不匹配:"现场叫号面试状态不匹配",现场申请职位不能为空:"现场申请职位不能为空","用户权限不够，不能完成该操作":"Insufficient user rights to complete the operation",登录失效:"Logon failure",目标场次已满员:"目标场次已满员","系统中已经有同名模板，请更改后再试":"系统中已经有同名模板，请更改后再试",系统错误:"System error",绑定赛码数据异常:"绑定赛码数据异常",缺少职位Id:"Job ID required","职位不存在!":"职位不存在!",职位已关闭:"职位已关闭",职位选择错误:"职位选择错误","获取反馈异常，反馈数据异常":"Abnormal feedback, abnormal feedback data","获取反馈异常，反馈数据异常反馈模版数量不可大于1":"Abnormal feedback, the number of feedback templates for abnormal feedback data cannot be greater than 1",获取渠道信息失败:"获取渠道信息失败",获取猎头渠道信息失败:"获取猎头渠道信息失败",获取职位信息失败:"获取职位信息失败",获取配置信息失败:"获取配置信息失败","该人才地图配置与当前节点的不存在对应关系，请检查后重试":"该人才地图配置与当前节点的不存在对应关系，请检查后重试","该场地正在被叫号面试使用，不可删除":"This site is being used for call interview, cannot be deleted","该场次已有候选人预约，请移动全部候选人后再禁用":"该场次已有候选人预约，请移动全部候选人后再禁用",该房间已经存在其他面试官:"Other interviewers already exist in this room","该房间正在被叫号面试使用，不可删除":"This room is being used for call interview, cannot be deleted","该模板为默认模板，无法删除":"该模板为默认模板，无法删除",请确保打分题分值统一:"Keep the score question consistent","读取猎头公司设置失败!":"读取猎头公司设置失败!",调用赛码接口异常:"调用赛码接口异常",账号无法获取候选人信息:"Account can't get candidate information","账号有效期失效，请稍后重试":"The account validity period is invalid. Please try again later",账户已过期:"Account expired",赛码同步状态异常:"赛码同步状态异常",赛码异步处理未完成:"赛码异步处理未完成",轮次名称不可以为空:"Round name are required",轮次名称或英文名称不可以重复:"轮次名称或英文名称不可以重复",队列不存在:"Queue does not exist",需要登录才能进行该操作:"Login is required for this operation",面试中的候选人不能更换面试官:"Candidates in an interview cannot change interviewers",面试中的候选人不能移动:"Candidates during the interview cannot be moved",面试分组时间不能小于面试开始时:"Interview group time cannot be less than at the beginning of the interview",面试官已填写反馈:"面试官已填写反馈",面试官异常:"面试官异常",面试官没有在房间中:"The interviewer is not in the room",面试官没有该轮次:"The interviewer doesn't have a turn",面试官重复出现:"Interviewer reappears",面试开始后无法修改简历类型:"Resume type cannot be modified after interview",面试开始后无法删除已选房间:"Selected rooms cannot be deleted after the interview begins",面试开始后无法变更面试地点:"Interview site cannot be changed after interview",面试开始后无法变更面试开始时间:"Interview start time cannot be changed after the interview starts",面试开始后无法变更面试轮次:"Interview rounds cannot be changed after the interview starts","面试评价表模版已更新，请重试":"面试评价表模版已更新，请重试",预约面试不可取消:"预约面试不可取消",预约面试不存在:"预约面试不存在",预约面试关联表数据异常:"预约面试关联表数据异常",预约面试已截止:"预约面试已截止",预约面试已锁定:"预约面试已锁定","预约面试数据异常，缺少必要字段":"预约面试数据异常，缺少必要字段",预约面试状态不可预约:"预约面试状态不可预约",预约面试申请不存在:"预约面试申请不存在","：":": "}})},language:"en-US",development:"development"===process.env.NODE_ENV}),u=s({catalogs:{"zh-CN":n({languageData:{plurals:function(e,t){return"other"}},messages:{"Excel中候选人过多，最多限制500人导入":"Excel中候选人过多，最多限制500人导入","Excel中行数超长，Excel最多10000行":"Excel中行数超长，Excel最多10000行",Offer中职位信息为空:"Offer中职位信息为空",Offer审批不在审批中:"Offer审批不在审批中","Offer审批已进行，不可设置审批流程":"Offer审批已进行，不可设置审批流程",Offer审批流模版不存在:"Offer审批流模版不存在","Offer审批进行中，不可修改":"Offer审批进行中，不可修改","Offer审批进行中，不可取消":"Offer审批进行中，不可取消",Offer已审批:"Offer已审批",Offer模板不存在:"Offer模板不存在",Offer模板名称不能为空:"Offer模板名称不能为空","Offer模板名称长度不能超过{message}个字符":function(e){return["Offer模板名称长度不能超过",e("message"),"个字符"]},Offer自定义字段名称不可重复:"Offer自定义字段名称不可重复",Offer自定义字段名称不能为空:"Offer自定义字段名称不能为空",Offer自定义字段名称过长:"Offer自定义字段名称过长",Offer自定义字段类型不合法:"Offer自定义字段类型不合法",Offer自定义字段类型不能为空:"Offer自定义字段类型不能为空",Office模板暂不支持报错快照:"Office模板暂不支持报错快照",pdf渲染失败:"pdf渲染失败",不可以移动候选人到禁用的场次:"不可以移动候选人到禁用的场次",不可变更不可用场次的面试状态:"不可变更不可用场次的面试状态",不可变更已取消或锁定的预约面试:"不可变更已取消或锁定的预约面试",不支持的Offer审批阶段:"不支持的Offer审批阶段",不能把候选人移入面试中房间:"不能把候选人移入面试中房间",不能移动其他场次或轮次的候选人:"不能移动其他场次或轮次的候选人",不能退出面试中的面试官:"不能退出面试中的面试官","中...":"中...",临时房间名称不能重名:"临时房间名称不能重名",修改次数已达到上限:"修改次数已达到上限",候选人不在队列中:"候选人不在队列中",候选人不能为空:"候选人不能为空",候选人其他职位正在处理中:"候选人其他职位正在处理中",候选人处于保护期:"候选人处于保护期",候选人没有参加面试:"候选人没有参加面试",候选人职位不统一:"候选人职位不统一",初筛阶段不存在:"初筛阶段不存在",参数错误:"参数错误",反馈创建叫号面试失败:"反馈创建叫号面试失败",只可修改状态为未预约和已预约的预约面试:"只可修改状态为未预约和已预约的预约面试",只可修改状态为预约中的预约面试:"只可修改状态为预约中的预约面试",只有面试官才能填写面试反馈:"只有面试官才能填写面试反馈",叫号面试允许现场申请的职位不匹配:"叫号面试允许现场申请的职位不匹配",叫号面试现场申请时间不匹配:"叫号面试现场申请时间不匹配",后续操作失败:"后续操作失败",多人面试数量设置异常:"多人面试数量设置异常","多人面试状态修改异常，只可以在面试当前之前进行修改":"多人面试状态修改异常，只可以在面试当前之前进行修改","多人面试轮次获取异常，一个面试官只能存在一个轮次下":"多人面试轮次获取异常，一个面试官只能存在一个轮次下",失败:"失败",存在不合法的offer审批状态:"存在不合法的offer审批状态",审批人已审批完成:"审批人已审批完成",导入候选人数据为空:"导入候选人数据为空",已签到的面试官不允许删除:"已签到的面试官不允许删除",当前叫号面试已经失效:"当前叫号面试已经失效","当前场地已经被删除，请选择其他场地":"当前场地已经被删除，请选择其他场地",当前无可选时间:"当前无可选时间",当前格子不存在:"当前格子不存在",当前状态不能重新锁定预约面试:"当前状态不能重新锁定预约面试",当前用户下面不存在该人才地图配置:"当前用户下面不存在该人才地图配置",当前用户下面存在名称相同的人才地图配置:"当前用户下面存在名称相同的人才地图配置","当前用户还有下载任务没有处理完成，请稍后重试":"当前用户还有下载任务没有处理完成，请稍后重试",当前组不存在:"当前组不存在","您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传":"您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传","您上传的文件表头与模版不匹配，请下载模版修改后重新上传":"您上传的文件表头与模版不匹配，请下载模版修改后重新上传","您已经在 {message} 签到就座":function(e){return["您已经在 ",e("message")," 签到就座"]},"您的操作过于频繁，请耐心等待当前请求结束。":"您的操作过于频繁，请耐心等待当前请求结束。",成功:"成功",房间不存在:"房间不存在",房间名称不可重复:"房间名称不可重复",房间组不存在:"房间组不存在",房间组名称不可重复:"房间组名称不可重复",找不到可用的面试申请:"找不到可用的面试申请",找不到归档原因:"找不到归档原因","找不到所选面试评价表，请刷新重试":"找不到所选面试评价表，请刷新重试",找不到招聘模式:"找不到招聘模式","找不到猎头合同或合同已失效/禁用":"找不到猎头合同或合同已失效/禁用",找不到符合条件的面试记录:"找不到符合条件的面试记录",操作:"操作","数据导出上限为1w条，如需导出更多请联系CSM":"数据导出上限为1w条，如需导出更多请联系CSM",文件上传失败:"文件上传失败",无操作部门权限:"无操作部门权限",无效的面试反馈:"无效的面试反馈",无法创建过去开始的叫号面试:"无法创建过去开始的叫号面试",无法删除候选人:"无法删除候选人",无法取消已经开始的视频叫号面试:"无法取消已经开始的视频叫号面试",无法将面试开始时间修改为过去的时间:"无法将面试开始时间修改为过去的时间",暂不支持拉勾或者智联外的方式:"暂不支持拉勾或者智联外的方式","有候选人处于异常状态（被删除），已自动过滤":"有候选人处于异常状态（被删除），已自动过滤","服务器错误，请重试":"服务器错误，请重试",服务调用异常:"服务调用异常",未知模板类型:"未知模板类型",未知错误:"未知错误",本场叫号面试已存在相同职位下的申请:"本场叫号面试已存在相同职位下的申请","本次修改时间与已预约时间相同，无需变更":"本次修改时间与已预约时间相同，无需变更",权重总和不是100:"权重总和不是100","权重表里的打分题，权重不能为空":"权重表里的打分题，权重不能为空",权重面试评价表模块计算类型必须全部是权重:"权重面试评价表模块计算类型必须全部是权重",查询赛码面试结果异常:"查询赛码面试结果异常","检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后":"检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后",清除候选人token失败:"清除候选人token失败",现场叫号面试状态不匹配:"现场叫号面试状态不匹配",现场申请职位不能为空:"现场申请职位不能为空","用户权限不够，不能完成该操作":"用户权限不够，不能完成该操作",登录失效:"登录失效",目标场次已满员:"目标场次已满员","系统中已经有同名模板，请更改后再试":"系统中已经有同名模板，请更改后再试",系统错误:"系统错误",绑定赛码数据异常:"绑定赛码数据异常",缺少职位Id:"缺少职位Id","职位不存在!":"职位不存在!",职位已关闭:"职位已关闭",职位选择错误:"职位选择错误","获取反馈异常，反馈数据异常":"获取反馈异常，反馈数据异常","获取反馈异常，反馈数据异常反馈模版数量不可大于1":"获取反馈异常，反馈数据异常反馈模版数量不可大于1",获取渠道信息失败:"获取渠道信息失败",获取猎头渠道信息失败:"获取猎头渠道信息失败",获取职位信息失败:"获取职位信息失败",获取配置信息失败:"获取配置信息失败","该人才地图配置与当前节点的不存在对应关系，请检查后重试":"该人才地图配置与当前节点的不存在对应关系，请检查后重试","该场地正在被叫号面试使用，不可删除":"该场地正在被叫号面试使用，不可删除","该场次已有候选人预约，请移动全部候选人后再禁用":"该场次已有候选人预约，请移动全部候选人后再禁用",该房间已经存在其他面试官:"该房间已经存在其他面试官","该房间正在被叫号面试使用，不可删除":"该房间正在被叫号面试使用，不可删除","该模板为默认模板，无法删除":"该模板为默认模板，无法删除",请确保打分题分值统一:"请确保打分题分值统一","读取猎头公司设置失败!":"读取猎头公司设置失败!",调用赛码接口异常:"调用赛码接口异常",账号无法获取候选人信息:"账号无法获取候选人信息","账号有效期失效，请稍后重试":"账号有效期失效，请稍后重试",账户已过期:"账户已过期",赛码同步状态异常:"赛码同步状态异常",赛码异步处理未完成:"赛码异步处理未完成",轮次名称不可以为空:"轮次名称不可以为空",轮次名称或英文名称不可以重复:"轮次名称或英文名称不可以重复",队列不存在:"队列不存在",需要登录才能进行该操作:"需要登录才能进行该操作",面试中的候选人不能更换面试官:"面试中的候选人不能更换面试官",面试中的候选人不能移动:"面试中的候选人不能移动",面试分组时间不能小于面试开始时:"面试分组时间不能小于面试开始时",面试官已填写反馈:"面试官已填写反馈",面试官异常:"面试官异常",面试官没有在房间中:"面试官没有在房间中",面试官没有该轮次:"面试官没有该轮次",面试官重复出现:"面试官重复出现",面试开始后无法修改简历类型:"面试开始后无法修改简历类型",面试开始后无法删除已选房间:"面试开始后无法删除已选房间",面试开始后无法变更面试地点:"面试开始后无法变更面试地点",面试开始后无法变更面试开始时间:"面试开始后无法变更面试开始时间",面试开始后无法变更面试轮次:"面试开始后无法变更面试轮次","面试评价表模版已更新，请重试":"面试评价表模版已更新，请重试",预约面试不可取消:"预约面试不可取消",预约面试不存在:"预约面试不存在",预约面试关联表数据异常:"预约面试关联表数据异常",预约面试已截止:"预约面试已截止",预约面试已锁定:"预约面试已锁定","预约面试数据异常，缺少必要字段":"预约面试数据异常，缺少必要字段",预约面试状态不可预约:"预约面试状态不可预约",预约面试申请不存在:"预约面试申请不存在","：":"："}})},language:"zh-CN",development:"development"===process.env.NODE_ENV});function f(){let e="";try{e||"undefined"==typeof document||(e=document.documentElement.lang),e||"undefined"==typeof navigator||(/en/i.test(navigator.language)?e="en-US":/zh/i.test(navigator.language)&&(e="zh-CN")),e||(e="zh-CN")}catch(t){e="zh-CN"}return e}function h(e){switch(e=e||f()){case"en-US":return c;case"zh-CN":return u;case"default":return h(f());default:return u}}let d,l,p,O,b,m,w,g,y,v,k,q,S,E,x,T,H,C,P,R,j,D,I,N,F,_,M,z,A,U,L,G,Y,V,$,J,K,Q,Z,B,W,X,ee,te,re,se,ne,ae,oe,ie,ce,ue,fe,he,de,le,pe,Oe,be,me,we,ge,ye,ve,ke,qe,Se,Ee,xe,Te,He,Ce,Pe,Re,je,De,Ie,Ne,Fe,_e,Me,ze,Ae,Ue,Le,Ge,Ye,Ve,$e,Je,Ke,Qe,Ze,Be,We,Xe,et,tt,rt,st,nt,at,ot,it,ct,ut,ft,ht,dt,lt,pt,Ot,bt,mt,wt,gt,yt,vt,kt,qt,St,Et,xt,Tt,Ht,Ct,Pt,Rt,jt,Dt,It,Nt,Ft,_t,Mt,zt,At,Ut,Lt,Gt,Yt,Vt,$t,Jt,Kt,Qt,Zt,Bt,Wt,Xt,er,tr,rr,sr,nr,ar,or,ir,cr=e=>e;const ur=h(),fr=[201021,300102];let hr,dr,lr,pr,Or,br=e=>e;const mr=h();let wr={loadingToast:()=>{},successToast:()=>{},errorToast:()=>{}};class gr{constructor(e,{query:t,dispatch:r,toastPrefix:s=mr.t(hr||(hr=br`操作`)),withSuccessToast:n=!1,withErrorToast:a=!1,withLoadingToast:o=!1}={}){this.id=Date.now()+"_"+parseInt(1e3*Math.random()),this.request=null,this.url=e,this.query=t,this.dispatch=r,this.toastPrefix=s,this.withSuccessToast=n,this.withErrorToast=a,this.withLoadingToast=o,this.checkResponse=this.checkResponse.bind(this),this.beforeHook=this.beforeHook.bind(this),this.afterSuccessHook=this.afterSuccessHook.bind(this),this.afterFailedHook=this.afterFailedHook.bind(this)}static setGlobalOption({headers:e}){e&&(gr.globalOption.headers.push(...e),window._mokaRequestGlobalOption=window._mokaRequestGlobalOption||{},window._mokaRequestGlobalOption.headers=gr.globalOption.headers)}get queryString(){return this.query?e.stringify(this.query,{arrayFormat:"brackets"}):this.query}checkResponse(e){if(200===e.body.code||0===e.body.code)return e;throw Object.assign(new Error(e.body.msg||"Failed response code detected."),{response:e})}beforeHook(){this.withLoadingToast&&this.dispatch&&this.dispatch(wr.loadingToast(this.toastPrefix+" "+mr.t(dr||(dr=br`中...`)),this.id)),this.request.use(e=>{/\/api\/(chromoka\/)?upload_resume/i.test(e.url)&&window._wsConnection&&window._wsConnection.id&&e.set("ws-id",window._wsConnection.id)}),this.request.set("use-http-status",0),gr.globalOption.headers.forEach(e=>{this.request.set(e.key,e.value)})}afterSuccessHook(e){return this.withSuccessToast&&this.dispatch&&this.dispatch(wr.successToast(this.toastPrefix+mr.t(lr||(lr=br`成功`)),this.id)),e.body.data}afterFailedHook(e){const t=r(e,"response.req.aborted",!1),s=e.response&&e.response.body&&e.response.body.code,n=e.response&&e.response.body&&e.response.body.msg;let a="";fr.includes(s)&&(a=e.response&&e.response.body&&e.response.body.data&&e.response.body.data.locationDesc);const o=((e,t,r)=>{switch(e){case-1:return ur.t(d||(d=cr`未知错误`));case 0:return ur.t(l||(l=cr`成功`));case 1:return ur.t(p||(p=cr`需要登录才能进行该操作`));case 2:return ur.t(O||(O=cr`您的操作过于频繁，请耐心等待当前请求结束。`));case 200:return ur.t(b||(b=cr`成功`));case 101:case 102:return ur.t(m||(m=cr`参数错误`));case 100001:return ur.t(w||(w=cr`需要登录才能进行该操作`));case 100002:return ur.t(g||(g=cr`登录失效`));case 100003:return ur.t(y||(y=cr`用户权限不够，不能完成该操作`));case 100004:return ur.t(v||(v=cr`账户已过期`));case 201010:return ur.t(k||(k=cr`无法创建过去开始的叫号面试`));case 201011:return ur.t(q||(q=cr`找不到可用的面试申请`));case 201012:return ur.t(S||(S=cr`面试开始后无法变更面试开始时间`));case 201013:return ur.t(E||(E=cr`无法将面试开始时间修改为过去的时间`));case 201014:return ur.t(x||(x=cr`面试开始后无法变更面试地点`));case 201015:return ur.t(T||(T=cr`无法删除候选人`));case 201016:return ur.t(H||(H=cr`面试开始后无法变更面试轮次`));case 201017:return ur.t(C||(C=cr`面试开始后无法修改简历类型`));case 201018:return ur.t(P||(P=cr`面试开始后无法删除已选房间`));case 201019:return ur.t(R||(R=cr`当前场地已经被删除，请选择其他场地`));case 201020:return ur.t(j||(j=cr`临时房间名称不能重名`));case 201021:return ur.t(D||(D=cr`您已经在 ${0} 签到就座`),t);case 201022:return ur.t(I||(I=cr`面试官没有在房间中`));case 201023:return ur.t(N||(N=cr`面试官没有该轮次`));case 201024:return ur.t(F||(F=cr`该房间已经存在其他面试官`));case 201025:return ur.t(_||(_=cr`不能把候选人移入面试中房间`));case 201026:return ur.t(M||(M=cr`不能退出面试中的面试官`));case 201030:return ur.t(z||(z=cr`队列不存在`));case 201031:return ur.t(A||(A=cr`面试中的候选人不能更换面试官`));case 201032:return ur.t(U||(U=cr`候选人不在队列中`));case 201033:return ur.t(L||(L=cr`不能移动其他场次或轮次的候选人`));case 201040:return ur.t(G||(G=cr`反馈创建叫号面试失败`));case 201041:return ur.t(Y||(Y=cr`面试分组时间不能小于面试开始时`));case 201042:return ur.t(V||(V=cr`当前叫号面试已经失效`));case 201043:return ur.t($||($=cr`现场申请职位不能为空`));case 201044:return ur.t(J||(J=cr`候选人不能为空`));case 201045:return ur.t(K||(K=cr`现场叫号面试状态不匹配`));case 201046:return ur.t(Q||(Q=cr`叫号面试现场申请时间不匹配`));case 201047:return ur.t(Z||(Z=cr`叫号面试允许现场申请的职位不匹配`));case 201048:return ur.t(B||(B=cr`本场叫号面试已存在相同职位下的申请`));case 201049:return ur.t(W||(W=cr`检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后`));case 201050:return ur.t(X||(X=cr`候选人其他职位正在处理中`));case 201051:return ur.t(ee||(ee=cr`面试官重复出现`));case 201052:return ur.t(te||(te=cr`多人面试数量设置异常`));case 201053:return ur.t(re||(re=cr`多人面试状态修改异常，只可以在面试当前之前进行修改`));case 201054:return ur.t(se||(se=cr`多人面试轮次获取异常，一个面试官只能存在一个轮次下`));case 201055:return ur.t(ne||(ne=cr`获取反馈异常，反馈数据异常反馈模版数量不可大于1`));case 201056:return ur.t(ae||(ae=cr`获取反馈异常，反馈数据异常`));case 201057:return ur.t(oe||(oe=cr`面试中的候选人不能移动`));case 201058:return ur.t(ie||(ie=cr`有候选人处于异常状态（被删除），已自动过滤`));case 21001:return ur.t(ce||(ce=cr`房间名称不可重复`));case 21002:return ur.t(ue||(ue=cr`房间不存在`));case 21003:return ur.t(fe||(fe=cr`房间组名称不可重复`));case 21004:return ur.t(he||(he=cr`房间组不存在`));case 21005:return ur.t(de||(de=cr`该房间正在被叫号面试使用，不可删除`));case 21006:return ur.t(le||(le=cr`该场地正在被叫号面试使用，不可删除`));case 40901:return ur.t(pe||(pe=cr`您上传的文件表头与模版不匹配，请下载模版修改后重新上传`));case 40902:return ur.t(Oe||(Oe=cr`您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传`));case 40903:return ur.t(be||(be=cr`Excel中行数超长，Excel最多10000行`));case 40904:return ur.t(me||(me=cr`Excel中候选人过多，最多限制500人导入`));case 40905:return ur.t(we||(we=cr`导入候选人数据为空`));case 50001:return ur.t(ge||(ge=cr`账号有效期失效，请稍后重试`));case 50002:return ur.t(ye||(ye=cr`系统错误`));case 50003:return ur.t(ve||(ve=cr`账号无法获取候选人信息`));case 50004:return ur.t(ke||(ke=cr`参数错误`));case 50005:return ur.t(qe||(qe=cr`暂不支持拉勾或者智联外的方式`));case 201059:return ur.t(Se||(Se=cr`已签到的面试官不允许删除`));case 211011:return ur.t(Ee||(Ee=cr`轮次名称不可以为空`));case 211012:return ur.t(xe||(xe=cr`轮次名称或英文名称不可以重复`));case 211013:return ur.t(Te||(Te=cr`pdf渲染失败`));case 211014:return ur.t(He||(He=cr`权重面试评价表模块计算类型必须全部是权重`));case 211015:return ur.t(Ce||(Ce=cr`权重总和不是100`));case 211016:return ur.t(Pe||(Pe=cr`权重表里的打分题，权重不能为空`));case 211020:return ur.t(Re||(Re=cr`请确保打分题分值统一`));case 211017:return ur.t(je||(je=cr`缺少职位Id`));case 211018:return ur.t(De||(De=cr`找不到所选面试评价表，请刷新重试`));case 211019:return ur.t(Ie||(Ie=cr`找不到招聘模式`));case 211030:return ur.t(Ne||(Ne=cr`找不到符合条件的面试记录`));case 211031:return ur.t(Fe||(Fe=cr`面试官已填写反馈`));case 211032:return ur.t(_e||(_e=cr`候选人没有参加面试`));case 211033:return ur.t(Me||(Me=cr`无效的面试反馈`));case 211034:return ur.t(ze||(ze=cr`只有面试官才能填写面试反馈`));case 211037:return ur.t(Ae||(Ae=cr`服务器错误，请重试`));case 211090:return ur.t(Ue||(Ue=cr`面试评价表模版已更新，请重试`));case 221001:return ur.t(Le||(Le=cr`预约面试不存在`));case 221002:return ur.t(Ge||(Ge=cr`预约面试不可取消`));case 221003:return ur.t(Ye||(Ye=cr`不可变更不可用场次的面试状态`));case 221004:return ur.t(Ve||(Ve=cr`该场次已有候选人预约，请移动全部候选人后再禁用`));case 221005:return ur.t($e||($e=cr`当前格子不存在`));case 221006:return ur.t(Je||(Je=cr`不可变更已取消或锁定的预约面试`));case 221007:return ur.t(Ke||(Ke=cr`只可修改状态为未预约和已预约的预约面试`));case 221008:return ur.t(Qe||(Qe=cr`预约面试已截止`));case 221009:return ur.t(Ze||(Ze=cr`只可修改状态为预约中的预约面试`));case 221010:return ur.t(Be||(Be=cr`修改次数已达到上限`));case 221011:return ur.t(We||(We=cr`预约面试状态不可预约`));case 221012:return ur.t(Xe||(Xe=cr`预约面试数据异常，缺少必要字段`));case 221013:return ur.t(et||(et=cr`当前无可选时间`));case 221014:return ur.t(tt||(tt=cr`当前组不存在`));case 221015:return ur.t(rt||(rt=cr`预约面试申请不存在`));case 221016:return ur.t(st||(st=cr`不可以移动候选人到禁用的场次`));case 221017:return ur.t(nt||(nt=cr`目标场次已满员`));case 221018:return ur.t(at||(at=cr`找不到归档原因`));case 221019:return ur.t(ot||(ot=cr`预约面试已锁定`));case 221020:return ur.t(it||(it=cr`服务调用异常`));case 221021:return ur.t(ct||(ct=cr`预约面试关联表数据异常`));case 221022:return ur.t(ut||(ut=cr`本次修改时间与已预约时间相同，无需变更`));case 221023:return ur.t(ft||(ft=cr`面试官异常`));case 221024:return ur.t(ht||(ht=cr`当前状态不能重新锁定预约面试`));case 211100:return ur.t(dt||(dt=cr`无法取消已经开始的视频叫号面试`));case 211101:return ur.t(lt||(lt=cr`绑定赛码数据异常`));case 211102:return ur.t(pt||(pt=cr`调用赛码接口异常`));case 211103:return ur.t(Ot||(Ot=cr`查询赛码面试结果异常`));case 211104:return ur.t(bt||(bt=cr`赛码异步处理未完成`));case 211105:return ur.t(mt||(mt=cr`赛码同步状态异常`));case 300100:return ur.t(wt||(wt=cr`Offer模板不存在`));case 300101:return ur.t(gt||(gt=cr`Offer模板名称不能为空`));case 300102:return ur.t(yt||(yt=cr`Offer模板名称长度不能超过${0}个字符`),t);case 300103:return ur.t(vt||(vt=cr`系统中已经有同名模板，请更改后再试`));case 300104:return ur.t(kt||(kt=cr`该模板为默认模板，无法删除`));case 300105:return ur.t(qt||(qt=cr`未知模板类型`));case 300106:return ur.t(St||(St=cr`Office模板暂不支持报错快照`));case 300107:return ur.t(Et||(Et=cr`文件上传失败`));case 300200:return ur.t(xt||(xt=cr`Offer自定义字段名称不能为空`));case 300201:return ur.t(Tt||(Tt=cr`Offer自定义字段类型不能为空`));case 300202:return ur.t(Ht||(Ht=cr`Offer自定义字段类型不合法`));case 300203:return ur.t(Ct||(Ct=cr`Offer自定义字段名称过长`));case 300204:return ur.t(Pt||(Pt=cr`Offer自定义字段名称不可重复`));case 300303:return ur.t(Rt||(Rt=cr`无操作部门权限`));case 300310:return ur.t(jt||(jt=cr`Offer审批进行中，不可修改`));case 300311:return ur.t(Dt||(Dt=cr`Offer审批不在审批中`));case 300312:return ur.t(It||(It=cr`Offer审批已进行，不可设置审批流程`));case 300313:return ur.t(Nt||(Nt=cr`Offer审批流模版不存在`));case 300315:return ur.t(Ft||(Ft=cr`Offer审批进行中，不可取消`));case 300316:return ur.t(_t||(_t=cr`存在不合法的offer审批状态`));case 300319:return ur.t(Mt||(Mt=cr`Offer已审批`));case 300320:return ur.t(zt||(zt=cr`不支持的Offer审批阶段`));case 300321:return ur.t(At||(At=cr`审批人已审批完成`));case 300605:return ur.t(Ut||(Ut=cr`Offer中职位信息为空`));case 400009:return ur.t(Lt||(Lt=cr`后续操作失败`));case 400010:return ur.t(Gt||(Gt=cr`职位选择错误`));case 400011:return ur.t(Yt||(Yt=cr`职位不存在!`));case 400012:return ur.t(Vt||(Vt=cr`读取猎头公司设置失败!`));case 400013:return ur.t($t||($t=cr`获取配置信息失败`));case 400014:return ur.t(Jt||(Jt=cr`获取职位信息失败`));case 400015:return ur.t(Kt||(Kt=cr`获取渠道信息失败`));case 400016:return ur.t(Qt||(Qt=cr`清除候选人token失败`));case 400017:return ur.t(Zt||(Zt=cr`候选人处于保护期`));case 400018:return ur.t(Bt||(Bt=cr`职位已关闭`));case 400019:return ur.t(Wt||(Wt=cr`找不到猎头合同或合同已失效/禁用`));case 400020:return ur.t(Xt||(Xt=cr`获取猎头渠道信息失败`));case 400021:return ur.t(er||(er=cr`候选人职位不统一`));case 400022:return ur.t(tr||(tr=cr`初筛阶段不存在`));case 400100:return ur.t(rr||(rr=cr`数据导出上限为1w条，如需导出更多请联系CSM`));case 400101:return ur.t(sr||(sr=cr`当前用户还有下载任务没有处理完成，请稍后重试`));case 400102:return ur.t(nr||(nr=cr`当前用户下面存在名称相同的人才地图配置`));case 400103:case 400105:case 400106:return ur.t(ar||(ar=cr`当前用户下面不存在该人才地图配置`));case 400104:return ur.t(or||(or=cr`该人才地图配置与当前节点的不存在对应关系，请检查后重试`));default:return r||ur.t(ir||(ir=cr`未知错误`))}})(s,a,n);throw!t&&e.response&&console.error("MokaRequest Error: ",e.response.req.method,e.response.req.url),this.withErrorToast&&this.dispatch&&!t&&this.dispatch(wr.errorToast(this.toastPrefix+" "+mr.t(pr||(pr=br`失败`))+mr.t(Or||(Or=br`：`))+o,this.id)),Object.assign(e,{reason:o})}get(){return this.request=t.get(this.url).query(this.queryString),this.beforeHook(),new Promise((e,t)=>{this.request.end((r,s)=>{r?t(r):e(s)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)}put(e){return this.request=t.put(this.url).query(this.queryString).send(e),this.beforeHook(),new Promise((e,t)=>{this.request.end((r,s)=>{r?t(r):e(s)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)}post(e){return this.request=t.post(this.url).query(this.queryString).send(e),this.beforeHook(),new Promise((e,t)=>{this.request.end((r,s)=>{r?t(r):e(s)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)}del(e){return this.request=t.delete(this.url).query(this.queryString).send(e),this.beforeHook(),new Promise((e,t)=>this.request.end((r,s)=>{r?t(r):e(s)})).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)}attach({files:e=[],data:r={},onProcess:s=(()=>{})}){return this.request=t.post(this.url).query(this.queryString).on("progress",s),e.forEach(({field:e,file:t,option:r})=>{this.request=this.request.attach(e,t,r)}),Object.entries(r).forEach(([e,t])=>{this.request=this.request.field(e,t)}),this.beforeHook(),new Promise((e,t)=>{this.request.end((r,s)=>{r?t(r):e(s)})}).then(this.checkResponse).then(this.afterSuccessHook,this.afterFailedHook)}abort(){this.request&&this.request.abort()}}gr.globalOption={headers:[]};const yr=e=>{wr=i(i({},wr),e)};export default(e,t)=>new gr(e,t);export{gr as MokaRequest,yr as configure};
