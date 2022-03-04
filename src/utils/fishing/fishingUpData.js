const OceanParam = {
  //统计表

  //建造或购买
  oceanSituationList: [
    {
      //task_id: "",//
      //enterprise_name: "",//企业名称
      //project_startime: "",//项目开始时间
      //project_endtime: "",//项目结束时间
      //edit_time: "",//填表时间
      //situation: "",//情况：1.建造 2.购买
      saon_number: "", //序号
      ship_number: "", //船名号
      type: "", //作业类型
      gross_tonnage: "", //总吨位(吨)
      bu_finish_time: "", //建造完成日期
      ship_age: "", //船龄(年)
      ship_cfte_id: "", //船舶登记证书编号
      owship_id: "", //船舶所有权证书编号
      intal_ship_id: "", //国际渔船安全证书编号
      //ship_source_n: "",//渔船来源--新建
      //ship_source_b: "",//渔船来源--购买
      ship_qa_variety: "", //入渔配额--品种
      ship_quota: "", //入渔配额--配额(吨)
      tol_investment: "", //总投入（万元）
      alltol_investment: "", //总投入（万元）--总计
      state_funding: "", //已获国家资助金额（万元）
      allstate_funding: "", //已获国家资助金额（万元）--总计
      aped_funding: "", //核定资助资金（万元）
      allaped_funding: "", //核定资助资金（万元） --总计
      funds_allocated: "", //已拨付资金（万元）
      allfunds_allocated: "", //已拨付资金（万元）--总计
      appropriate: "", //此次申请拨付资助资金（万元）
      all_appropriate: "", //此次申请拨付资助资金（万元）--总计
    },
  ],

  //入渔
  oceanCostList: [
    {
      //task_id: "",//
      //enterprise_name: "",//企业名称
      cost_number: "", //序号
      cost_project: "", //费用项目（FFA注册/捕鱼执照)
      ship_number: "", //船名号
      work_place: "", //生产作业区域
      cfce_startime: "", //证书有效开始时间
      cfce_endtime: "", //证书有效结束时间
      outlds_fish_cost: "", //已支付境外渔业资源使用费金额
      //alloutlds_fish_cost: "",//已支付境外渔业资源使用费金额 --总计
      change_rate: "", //汇率
      rmb: "", //折合人民币金额（元）
      //all_rmb: "",//折合人民币金额（元）--总计
      remarks: "", //备注
    },
  ],

  //自捕
  oceanVolumes: [
    {
      //enterprise_name: "",//
      //apltion_startime: "",//
      //apltion_endtime: "",//
      //edit_time: "",//
      //volume_number: "",//
      prdon_ship_id: "", //生产船名号
      eption_id: "", //海关申报情况:免税证明单号
      deatn_id: "", //海关申报情况:报关单海关编号
      customs_varieties: "", //海关申报情况:品种
      customs_port: "", //海关申报情况:口岸
      customs_number: "", //海关申报情况:数量（kg）
      //all_customs_number: "",//
      cyse_id: "", //农业农村部申报情况:申报单编号
      cyse_editime: "", //农业农村部申报情况:填报时间
      cyse_confirm: "", //农业农村部申报情况:确认批准文号
      cyse_pushtime: "", //农业农村部申报情况:确认批文发布时间
      cyse_varieties: "", //农业农村部申报情况:品种
      cyse_number: "", //农业农村部申报情况:数量（kg）
      //all_cyse_number: "",//农业农村部申报情况:数量（kg）--总计
    },
  ],

  oceanPurchases: [
    {
      // enterprise_name: "", // 企业名称
      // apltion_startime: "", // 项目申请开始时间
      // apltion_endtime: "", // 项目申请结束时间
      // edit_time: "", // 填表日期
      // volume_number: "", // 序号
      prdon_ship_id: "", // 生产船名号
      wholesale_no: "", // 批发交易类-交易单号
      wholesale_type: "", // 批发交易类-品种
      wholesale_num: "", // 批发交易类-数量（kg）
      wh_total_num: "", // 批发交易类-数量（kg）-合计
      wholesale_amt: "", // 批发交易类-金额（元）
      wh_total_amt: "", // 批发交易类-金额（元）-合计
      retail_no: "", // 批发交易类-交易单号
      retail_type: "", // 批发交易类-品种
      retail_num: "", // 批发交易类-数量（kg）
      re_total_num: "", // 批发交易类-数量（kg）-合计
      retail_amt: "", // 批发交易类-金额（元）
      re_total_amt: "", // 批发交易类-金额（元）-合计
      creator: "", // 创建人
      create_time: "", // 创建时间
      modifier: "", // 修改人
      update_time: "", // 修改时间
    },
  ],
  oceanReturns: [
    {
      // task_id: "",
      // enterprise_name: "",
      // apltion_startime: "",
      // apltion_endtime: "",
      // edit_time: "",
      // volume_number: "",
      prdon_ship_id: "",
      wholesale_no: "",
      wholesale_type: "",
      wholesale_num: "",
      wh_total_num: "",
      wholesale_amt: "",
      wh_total_amt: "",
      retail_no: "",
      retail_type: "",
      retail_num: "",
      re_total_num: "",
      retail_amt: "",
      re_total_amt: "",
      creator: "",
      create_time: "",
      modifier: "",
      update_time: "",
    },
  ],
};
//申请表
const OceanDeclaration = {
  //task_id: "",
  task_name: "",
  unit_name: "", //单位名称
  legal_rpstative: "", //法人代表
  id_number: "", //身份证号
  postal_address: "", //通讯地址
  contacts: "", //联系人
  contact_number: "", //联系电话
  postal_code: "", //邮政编码
  business_license: "", //营业执照
  credit_code: "", //社会统一信用代码
  deposit_bank: "", //开户银行
  account_number: "", //账号
  declare_name: "", //申报资助项目名称
  declare_id: "", //申报资助项目id
  fish_base: "", //远洋渔业项目生产基本情况
  //creator: "", //创建人
  //建造
  oceanDeepseaship: {
    //task_id: "",//
    ship_name: "", //船名
    work_type: "", //作业方式
    gross_tonnage: "", //总吨位
    build_time: "", //建造完工日期
    state_funding: "", //已获得国家资助资金
    fishing_quota: "", //是否有入渔配额
    ship_ctfte_id: "", //船舶检验证书编号
    inal_ctfte_id: "", //国籍证书编号
    owr_ctfte_id: "", //所有权证书编号
    completed_cost: "", //船舶竣工造价
    apply_cost: "", //申请资助资金
    creator: "", //创建人
  },
  //购买
  oceanBuyseaship: {
    //task_id: "",
    ship_name: "", //船名
    worker_type: "", //作业方式
    bud_finish_time: "", //建造完工日期
    tonnage: "", //吨位
    fishing_quota: "", //是否有入渔配额
    inal_ctfte: "", //国籍证书
    inal_ctfte_id: "", //国籍证书编号
    owr_ctfte_id: "", //所有权证书编号
    ship_ctfte_id: "", //船舶检验证书编号
    ship_cost_id: "", //船舶总投资
    apply_cost: "", //申请资助资金
    creator: "", //创建人
  },
  //境外
  useshipsource: {
    //task_id: "",
    sea_region: "", //远洋渔业项目作业海域
    rsous_use_cost: "", //已交纳境外渔业资源使用费
    inal_rsous_subsidy: "", //已获得农业部国际渔业资源开发补助
    apply_cost: "", //申请资助资金
    creator: "", //创建人
  },
  //自捕
  oceanSelfcapture: {
    //task_id: "",
    sky_tunas_number: "", //空运冰鲜金枪鱼数量
    sea_tunas_number: "", //海运超低温金枪鱼数量
    other_fish_number: "", //其他鱼类数量
    country_cost: "", //已获得国家资助资金
    appaly_cost: "", //申请资助资金
    creator: "", //创建人
  },
  //基地
  oceanBase: {
    //task_id: "",
    cold_unit: "", //冷链物流项目地址
    all_cold_cost: "", //冷链物流项目地址--项目总投资
    low_tpte_unit: "", //超低温冷库地址
    all_low_cost: "", //超低温冷库地址--项目总投资
    abroad_unit: "", //境外远洋渔业基地地址
    agriculture_cost: "", //已获得农业部资助
    appaly_cost: "", //申请资助资金
    creator: "", //创建人
  },
};
const uploadUrlData = {
  //建造
  Build: [
    { title: "专项资金申请报告", data: [] },
    { title: "申请书", data: [] },
    { title: "申报单位主体资格材料（含统一社会信用代码证书等）", data: [] },
    { title: "农业农村部远洋渔业企业资格证书", data: [] },
    { title: "经会计师事务所审计的上一年度单位财务审计报告", data: [] },
    {
      title: "农业农村部渔船建造审批件、农业农村部远洋渔业项目批文",
      data: [],
    },
    { title: "造船合同书及外购设备合同书", data: [] },
    {
      title:
        "渔船竣工造价结算单（企业造船合同指定船厂出具的造价结算单及相关发票，以及购置设备清单、发票等）",
      data: [],
    },
    { title: "渔业船舶国籍证书、所有权证书和船舶检验证书", data: [] },
    {
      title: "已获取国家渔船补贴的有关证明材料（仅限已获取国家补贴的渔船）",
      data: [],
    },
    { title: "入渔配额证明（仅限需要配额的海区）", data: [] },
    { title: "申报单位承诺书", data: [] },
  ],
  //购买
  Buy: [
    { title: "申请专项资金的报告", data: [] },
    { title: "申请书", data: [] },
    { title: "申报单位主体资格材料（含统一社会信用代码证书等）", data: [] },
    { title: "农业农村部远洋渔业企业资格证书", data: [] },
    { title: "经会计师事务所审计的上一年度单位财务审计报告 ", data: [] },
    { title: "渔船买卖合同书、设备改造合同书及相关发票等", data: [] },
    { title: "渔业船舶国籍证书、所有权证书和船舶检验证书", data: [] },
    { title: "农业农村部远洋渔业项目批文", data: [] },
    { title: "入渔配额证明（仅限需要配额的海区）", data: [] },
    { title: "申报单位承诺书", data: [] },
  ],
  //境外
  Outside: [
    { title: "申请专项资金的报告", data: [] },
    { title: "申请书", data: [] },
    { title: "申报单位主体资格材料（含统一社会信用代码证书等） ", data: [] },
    { title: "农业农村部远洋渔业企业资格证书", data: [] },
    { title: "农业农村部远洋渔业项目批文", data: [] },
    { title: "境外远洋渔业项目生产情况报告 ", data: [] },
    { title: "缴纳境外渔业资源使用费的相关票据及证明材料 ", data: [] },
    {
      title: "已获得农业农村部国际渔业资源开发利用补助的有关证明材料 ",
      data: [],
    },
    { title: "申报单位承诺书", data: [] },
  ],
  //自捕
  Volumes: [
    { title: "申请专项资金的报告 ", data: [] },
    { title: "申请书", data: [] },
    { title: "申报单位主体资格材料（含统一社会信用代码证书等）", data: [] },
    { title: "农业农村部远洋渔业企业资格证书", data: [] },
    { title: "农业农村部远洋渔业项目批文", data: [] },
    { title: "入渔配额证明（仅限需要配额的海区） ", data: [] },
    { title: "自捕远洋海产品进入深圳境地海关报关单", data: [] },
    {
      title:
        "进入深圳水产品交易市场的交易凭据（提供企业与渔货交易商的交易单据及入账后的交易收款凭证等）",
      data: [],
    },
    { title: "远洋渔船的国籍证书、所有权证书、船舶检验证书", data: [] },
    { title: "已获取远洋自捕水产品回运费国家资助的有关证明材料 ", data: [] },
    { title: "申报单位承诺书", data: [] },
  ],
  //基地
  Base: [
    { title: "申请专项资金的报告", data: [] },
    { title: "申请书", data: [] },
    { title: "申报单位主体资格材料（含统一社会信用代码证书等）", data: [] },
    { title: "经会计师事务所审计的上一年度单位财务审计报告", data: [] },
    {
      title: "政府部门对该企业为远洋渔业基地投资建设主体单位的有关证明文件",
      data: [],
    },
    {
      title:
        "远洋渔业冷链物流（包括海产品加工厂及配套专用冷库）、超低温冷库等项目的建设方案",
      data: [],
    },
    {
      title: "建设项目的决算审计报告、竣工决算单、付款凭证及相关发票等",
      data: [],
    },
    { title: "建设项目场地所有权或者使用权证明", data: [] },
    {
      title:
        "远洋渔业基地项目建设方案、农业农村部远洋渔业基地认定材料及收款凭证（仅限申请远洋渔业基地配套资助的需要提供）",
      data: [],
    },
    { title: "申报单位承诺书", data: [] },
  ],
};
export function FishingClearData(Data) {
  console.log(Data.OceanDeclaration);
  console.log(Data.OceanParam);

  Data.OceanDeclaration = OceanDeclaration;
  Data.OceanParam = OceanParam;
}
export function fishingData(newData) {
  //console.log(newData)
  if (newData) {
    for (let item in newData) {
      if (newData[item].length == 0) {
        //console.log('null',item)
        newData[item] = OceanParam[item];
      }
    }
  }

  return newData;
}
