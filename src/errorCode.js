import { getI18n } from './i18n';
const i18n = getI18n();

// 后端返回带有自定义信息的状态码
export const errCodeWithMsg = [201021, 300102];

export const ERROR_CODES = {
  '- 1': -1,
  0: 0,
  1: 1,
  2: 2,
  200: 200,
  101: 101,
  102: 102,
  100001: 100001,
  100002: 100002,
  100003: 100003,
  100004: 100004,

  // 叫号面试错误码
  201010: 201010,
  201011: 201011,
  201012: 201012,
  201013: 201013,
  201014: 201014,
  201015: 201015,
  201016: 201016,
  201017: 201017,
  201018: 201018,
  201019: 201019,
  201020: 201020,
  201021: 201021,
  201022: 201022,
  201023: 201023,
  201024: 201024,
  201025: 201025,
  201026: 201026,
  201030: 201030,
  201031: 201031,
  201032: 201032,
  201033: 201033,
  201040: 201040,
  201041: 201041,
  201042: 201042,
  201043: 201043,
  201044: 201044,
  201045: 201045,
  201046: 201046,
  201047: 201047,
  201048: 201048,
  201049: 201049,
  201050: 201050,
  201051: 201051,
  201052: 201052,
  201053: 201053,
  201054: 201054,
  201055: 201055,
  201056: 201056,
  201057: 201057,
  201058: 201058,
  // 房间
  21001: 21001,
  21002: 21002,
  21003: 21003,
  21004: 21004,
  21005: 21005,
  21006: 21006,

  40901: 40901,
  40902: 40902,
  40903: 40903,
  40904: 40904,
  40905: 40905,
  50001: 50001,
  50002: 50002,
  50003: 50003,
  50004: 50004,
  50005: 50005,
  201059: 201059,

  // 面试评价表
  211011: 211011,
  211012: 211012,
  211013: 211013,
  211014: 211014,
  211015: 211015,
  211016: 211016,
  211020: 211020,
  211017: 211017,
  211018: 211018,
  211019: 211019,
  211030: 211030,
  211031: 211031,
  211032: 211032,
  211033: 211033,
  211034: 211034,
  211037: 211037,
  211090: 211090,

  221001: 221001,
  221002: 221002,
  221003: 221003,
  221004: 221004,
  221005: 221005,
  221006: 221006,
  221007: 221007,
  221008: 221008,
  221009: 221009,
  221010: 221010,
  221011: 221011,
  221012: 221012,
  221013: 221013,
  221014: 221014,
  221015: 221015,
  221016: 221016,
  221017: 221017,
  221018: 221018,
  221019: 221019,
  221020: 221020,
  221021: 221021,
  221022: 221022,
  221023: 221023,
  221024: 221024,
  211100: 211100,
  211101: 211101,
  211102: 211102,
  211103: 211103,
  211104: 211104,
  211105: 211105,

  // Offer
  300100: 300100,
  300101: 300101,
  300102: 300102,
  300103: 300103,
  300104: 300104,
  300105: 300105,
  300106: 300106,
  300107: 300107,
  300200: 300200,
  300201: 300201,
  300202: 300202,
  300203: 300203,
  300204: 300204,
  300303: 300303,
  300310: 300310,
  300311: 300311,
  300312: 300312,
  300313: 300313,
  300315: 300315,
  300316: 300316,
  300319: 300319,
  300605: 300605,
  300320: 300320,
  300321: 300321,
  //候选人
  400009: 400009,
  400010: 400010,
  400011: 400011,
  400012: 400012,
  400013: 400013,
  400014: 400014,
  400015: 400015,
  400016: 400016,
  400017: 400017,
  400018: 400018,
  400019: 400019,
  400020: 400020,
  400021: 400021,
  400022: 400022,
  // 人才库
  400100: 400100,
  400101: 400101,
  400102: 400102,
  400103: 400103,
  400105: 400105,
  400106: 400106,
  400104: 400104,
};

/**
 * Get message from code.
 *
 * @private
 * @param {number} code - error code
 * @param {string} message - error message from back end
 * @return {string} message errCodeWithMsg包含的code 才可以携带msg
 */
export const codeToMessage = (code, message, defaultErrMsg) => {
  switch (code) {
    case ERROR_CODES['- 1']:
      return i18n.t`未知错误`;
    case ERROR_CODES[0]:
      return i18n.t`成功`;
    case ERROR_CODES[1]:
      return i18n.t`需要登录才能进行该操作`;
    case ERROR_CODES[2]:
      // xhook 返回的 操作频繁的报错
      return i18n.t`您的操作过于频繁，请耐心等待当前请求结束。`;
    case ERROR_CODES[200]:
      return i18n.t`成功`;
    case ERROR_CODES[101]:
    case ERROR_CODES[102]:
      return i18n.t`参数错误`;
    case ERROR_CODES[100001]:
      return i18n.t`需要登录才能进行该操作`;
    case ERROR_CODES[100002]:
      return i18n.t`登录失效`;
    case ERROR_CODES[100003]:
      return i18n.t`用户权限不够，不能完成该操作`;
    case ERROR_CODES[100004]:
      return i18n.t`账户已过期`;

    // 叫号面试错误码
    case ERROR_CODES[201010]:
      return i18n.t`无法创建过去开始的叫号面试`;
    case ERROR_CODES[201011]:
      return i18n.t`找不到可用的面试申请`;
    case ERROR_CODES[201012]:
      return i18n.t`面试开始后无法变更面试开始时间`;
    case ERROR_CODES[201013]:
      return i18n.t`无法将面试开始时间修改为过去的时间`;
    case ERROR_CODES[201014]:
      return i18n.t`面试开始后无法变更面试地点`;
    case ERROR_CODES[201015]:
      return i18n.t`无法删除候选人`;
    case ERROR_CODES[201016]:
      return i18n.t`面试开始后无法变更面试轮次`;
    case ERROR_CODES[201017]:
      return i18n.t`面试开始后无法修改简历类型`;
    case ERROR_CODES[201018]:
      return i18n.t`面试开始后无法删除已选房间`;
    case ERROR_CODES[201019]:
      return i18n.t`当前场地已经被删除，请选择其他场地`;
    case ERROR_CODES[201020]:
      return i18n.t`临时房间名称不能重名`;
    case ERROR_CODES[201021]:
      return i18n.t`您已经在 ${message} 签到就座`;
    case ERROR_CODES[201022]:
      return i18n.t`面试官没有在房间中`;
    case ERROR_CODES[201023]:
      return i18n.t`面试官没有该轮次`;
    case ERROR_CODES[201024]:
      return i18n.t`该房间已经存在其他面试官`;
    case ERROR_CODES[201025]:
      return i18n.t`不能把候选人移入面试中房间`;
    case ERROR_CODES[201026]:
      return i18n.t`不能退出面试中的面试官`;
    case ERROR_CODES[201030]:
      return i18n.t`队列不存在`;
    case ERROR_CODES[201031]:
      return i18n.t`面试中的候选人不能更换面试官`;
    case ERROR_CODES[201032]:
      return i18n.t`候选人不在队列中`;
    case ERROR_CODES[201033]:
      return i18n.t`不能移动其他场次或轮次的候选人`;
    case ERROR_CODES[201040]:
      return i18n.t`反馈创建叫号面试失败`;
    case ERROR_CODES[201041]:
      return i18n.t`面试分组时间不能小于面试开始时`;
    case ERROR_CODES[201042]:
      return i18n.t`当前叫号面试已经失效`;
    case ERROR_CODES[201043]:
      return i18n.t`现场申请职位不能为空`;
    case ERROR_CODES[201044]:
      return i18n.t`候选人不能为空`;
    case ERROR_CODES[201045]:
      return i18n.t`现场叫号面试状态不匹配`;
    case ERROR_CODES[201046]:
      return i18n.t`叫号面试现场申请时间不匹配`;
    case ERROR_CODES[201047]:
      return i18n.t`叫号面试允许现场申请的职位不匹配`;
    case ERROR_CODES[201048]:
      return i18n.t`本场叫号面试已存在相同职位下的申请`;
    case ERROR_CODES[201049]:
      return i18n.t`检查候选人申请的职位是否存在相同职位的申请，并且其申请流程在第一个面试流程之后`;
    case ERROR_CODES[201050]:
      return i18n.t`候选人其他职位正在处理中`;
    case ERROR_CODES[201051]:
      return i18n.t`面试官重复出现`;
    case ERROR_CODES[201052]:
      return i18n.t`多人面试数量设置异常`;
    case ERROR_CODES[201053]:
      return i18n.t`多人面试状态修改异常，只可以在面试当前之前进行修改`;
    case ERROR_CODES[201054]:
      return i18n.t`多人面试轮次获取异常，一个面试官只能存在一个轮次下`;
    case ERROR_CODES[201055]:
      return i18n.t`获取反馈异常，反馈数据异常反馈模版数量不可大于1`;
    case ERROR_CODES[201056]:
      return i18n.t`获取反馈异常，反馈数据异常`;
    case ERROR_CODES[201057]:
      return i18n.t`面试中的候选人不能移动`;
    case ERROR_CODES[201058]:
      return i18n.t`有候选人处于异常状态（被删除），已自动过滤`;
    // 房间
    case ERROR_CODES[21001]:
      return i18n.t`房间名称不可重复`;
    case ERROR_CODES[21002]:
      return i18n.t`房间不存在`;
    case ERROR_CODES[21003]:
      return i18n.t`房间组名称不可重复`;
    case ERROR_CODES[21004]:
      return i18n.t`房间组不存在`;
    case ERROR_CODES[21005]:
      return i18n.t`该房间正在被叫号面试使用，不可删除`;
    case ERROR_CODES[21006]:
      return i18n.t`该场地正在被叫号面试使用，不可删除`;

    case ERROR_CODES[40901]:
      return i18n.t`您上传的文件表头与模版不匹配，请下载模版修改后重新上传`;
    case ERROR_CODES[40902]:
      return i18n.t`您上传的文件存在数据错误，请下载文件并根据单元格批注内容修改后重新上传`;
    case ERROR_CODES[40903]:
      return i18n.t`Excel中行数超长，Excel最多10000行`;
    case ERROR_CODES[40904]:
      return i18n.t`Excel中候选人过多，最多限制500人导入`;
    case ERROR_CODES[40905]:
      return i18n.t`导入候选人数据为空`;
    case ERROR_CODES[50001]:
      return i18n.t`账号有效期失效，请稍后重试`;
    case ERROR_CODES[50002]:
      return i18n.t`系统错误`;
    case ERROR_CODES[50003]:
      return i18n.t`账号无法获取候选人信息`;
    case ERROR_CODES[50004]:
      return i18n.t`参数错误`;
    case ERROR_CODES[50005]:
      return i18n.t`暂不支持拉勾或者智联外的方式`;
    case ERROR_CODES[201059]:
      return i18n.t`已签到的面试官不允许删除`;

    // 面试评价表
    case ERROR_CODES[211011]:
      return i18n.t`轮次名称不可以为空`;
    case ERROR_CODES[211012]:
      return i18n.t`轮次名称或英文名称不可以重复`;
    case ERROR_CODES[211013]:
      return i18n.t`pdf渲染失败`;
    case ERROR_CODES[211014]:
      return i18n.t`权重面试评价表模块计算类型必须全部是权重`;
    case ERROR_CODES[211015]:
      return i18n.t`权重总和不是100`;
    case ERROR_CODES[211016]:
      return i18n.t`权重表里的打分题，权重不能为空`;
    case ERROR_CODES[211020]:
      return i18n.t`请确保打分题分值统一`;
    case ERROR_CODES[211017]:
      return i18n.t`缺少职位Id`;
    case ERROR_CODES[211018]:
      return i18n.t`找不到所选面试评价表，请刷新重试`;
    case ERROR_CODES[211019]:
      return i18n.t`找不到招聘模式`;
    case ERROR_CODES[211030]:
      return i18n.t`找不到符合条件的面试记录`;
    case ERROR_CODES[211031]:
      return i18n.t`面试官已填写反馈`;
    case ERROR_CODES[211032]:
      return i18n.t`候选人没有参加面试`;
    case ERROR_CODES[211033]:
      return i18n.t`无效的面试反馈`;
    case ERROR_CODES[211034]:
      return i18n.t`只有面试官才能填写面试反馈`;
    case ERROR_CODES[211037]:
      return i18n.t`服务器错误，请重试`;
    case ERROR_CODES[211090]:
      return i18n.t`面试评价表模版已更新，请重试`;

    case ERROR_CODES[221001]:
      return i18n.t`预约面试不存在`;
    case ERROR_CODES[221002]:
      return i18n.t`预约面试不可取消`;
    case ERROR_CODES[221003]:
      return i18n.t`不可变更不可用场次的面试状态`;
    case ERROR_CODES[221004]:
      return i18n.t`该场次已有候选人预约，请移动全部候选人后再禁用`;
    case ERROR_CODES[221005]:
      return i18n.t`当前格子不存在`;
    case ERROR_CODES[221006]:
      return i18n.t`不可变更已取消或锁定的预约面试`;
    case ERROR_CODES[221007]:
      return i18n.t`只可修改状态为未预约和已预约的预约面试`;
    case ERROR_CODES[221008]:
      return i18n.t`预约面试已截止`;
    case ERROR_CODES[221009]:
      return i18n.t`只可修改状态为预约中的预约面试`;
    case ERROR_CODES[221010]:
      return i18n.t`修改次数已达到上限`;
    case ERROR_CODES[221011]:
      return i18n.t`预约面试状态不可预约`;
    case ERROR_CODES[221012]:
      return i18n.t`预约面试数据异常，缺少必要字段`;
    case ERROR_CODES[221013]:
      return i18n.t`当前无可选时间`;
    case ERROR_CODES[221014]:
      return i18n.t`当前组不存在`;
    case ERROR_CODES[221015]:
      return i18n.t`预约面试申请不存在`;
    case ERROR_CODES[221016]:
      return i18n.t`不可以移动候选人到禁用的场次`;
    case ERROR_CODES[221017]:
      return i18n.t`目标场次已满员`;
    case ERROR_CODES[221018]:
      return i18n.t`找不到归档原因`;
    case ERROR_CODES[221019]:
      return i18n.t`预约面试已锁定`;
    case ERROR_CODES[221020]:
      return i18n.t`服务调用异常`;
    case ERROR_CODES[221021]:
      return i18n.t`预约面试关联表数据异常`;
    case ERROR_CODES[221022]:
      return i18n.t`本次修改时间与已预约时间相同，无需变更`;
    case ERROR_CODES[221023]:
      return i18n.t`面试官异常`;
    case ERROR_CODES[221024]:
      return i18n.t`当前状态不能重新锁定预约面试`;
    case ERROR_CODES[211100]:
      return i18n.t`无法取消已经开始的视频叫号面试`;
    case ERROR_CODES[211101]:
      return i18n.t`绑定赛码数据异常`;
    case ERROR_CODES[211102]:
      return i18n.t`调用赛码接口异常`;
    case ERROR_CODES[211103]:
      return i18n.t`查询赛码面试结果异常`;
    case ERROR_CODES[211104]:
      return i18n.t`赛码异步处理未完成`;
    case ERROR_CODES[211105]:
      return i18n.t`赛码同步状态异常`;

    // Offer
    case ERROR_CODES[300100]:
      return i18n.t`Offer模板不存在`;
    case ERROR_CODES[300101]:
      return i18n.t`Offer模板名称不能为空`;
    case ERROR_CODES[300102]:
      return i18n.t`Offer模板名称长度不能超过${message}个字符`;
    case ERROR_CODES[300103]:
      return i18n.t`系统中已经有同名模板，请更改后再试`;
    case ERROR_CODES[300104]:
      return i18n.t`该模板为默认模板，无法删除`;
    case ERROR_CODES[300105]:
      return i18n.t`未知模板类型`;
    case ERROR_CODES[300106]:
      return i18n.t`Office模板暂不支持报错快照`;
    case ERROR_CODES[300107]:
      return i18n.t`文件上传失败`;
    case ERROR_CODES[300200]:
      return i18n.t`Offer自定义字段名称不能为空`;
    case ERROR_CODES[300201]:
      return i18n.t`Offer自定义字段类型不能为空`;
    case ERROR_CODES[300202]:
      return i18n.t`Offer自定义字段类型不合法`;
    case ERROR_CODES[300203]:
      return i18n.t`Offer自定义字段名称过长`;
    case ERROR_CODES[300204]:
      return i18n.t`Offer自定义字段名称不可重复`;
    case ERROR_CODES[300303]:
      return i18n.t`无操作部门权限`;
    case ERROR_CODES[300310]:
      return i18n.t`Offer审批进行中，不可修改`;
    case ERROR_CODES[300311]:
      return i18n.t`Offer审批不在审批中`;
    case ERROR_CODES[300312]:
      return i18n.t`Offer审批已进行，不可设置审批流程`;
    case ERROR_CODES[300313]:
      return i18n.t`Offer审批流模版不存在`;
    case ERROR_CODES[300315]:
      return i18n.t`Offer审批进行中，不可取消`;
    case ERROR_CODES[300316]:
      return i18n.t`存在不合法的offer审批状态`;
    case ERROR_CODES[300319]:
      return i18n.t`Offer已审批`;
    case ERROR_CODES[300320]:
      return i18n.t`不支持的Offer审批阶段`;
    case ERROR_CODES[300321]:
      return i18n.t`审批人已审批完成`;
    case ERROR_CODES[300605]:
      return i18n.t`Offer中职位信息为空`;

    //候选人 猎头端
    case ERROR_CODES[400009]:
      return i18n.t`后续操作失败`;
    case ERROR_CODES[400010]:
      return i18n.t`职位选择错误`;
    case ERROR_CODES[400011]:
      return i18n.t`职位不存在!`;
    case ERROR_CODES[400012]:
      return i18n.t`读取猎头公司设置失败!`;
    case ERROR_CODES[400013]:
      return i18n.t`获取配置信息失败`;
    case ERROR_CODES[400014]:
      return i18n.t`获取职位信息失败`;
    case ERROR_CODES[400015]:
      return i18n.t`获取渠道信息失败`;
    case ERROR_CODES[400016]:
      return i18n.t`清除候选人token失败`;
    case ERROR_CODES[400017]:
      return i18n.t`候选人处于保护期`;
    case ERROR_CODES[400018]:
      return i18n.t`职位已关闭`;
    case ERROR_CODES[400019]:
      return i18n.t`找不到猎头合同或合同已失效/禁用`;
    case ERROR_CODES[400020]:
      return i18n.t`获取猎头渠道信息失败`;
    case ERROR_CODES[400021]:
      return i18n.t`候选人职位不统一`;
    case ERROR_CODES[400022]:
      return i18n.t`初筛阶段不存在`;
    // 人才库
    case ERROR_CODES[400100]:
      return i18n.t`数据导出上限为1w条，如需导出更多请联系CSM`;
    case ERROR_CODES[400101]:
      return i18n.t`当前用户还有下载任务没有处理完成，请稍后重试`;
    case ERROR_CODES[400102]:
      return i18n.t`当前用户下面存在名称相同的人才地图配置`;
    case ERROR_CODES[400103]:
    case ERROR_CODES[400105]:
    case ERROR_CODES[400106]:
      return i18n.t`当前用户下面不存在该人才地图配置`;
    case ERROR_CODES[400104]:
      return i18n.t`该人才地图配置与当前节点的不存在对应关系，请检查后重试`;

    default:
      return defaultErrMsg || i18n.t`未知错误`;
  }
};
