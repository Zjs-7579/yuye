export const UnitInfoValidator = {
  task_name: [
    { required: true, message: "请输入单位名称", trigger: "blur" },
    // {
    // 	min: 3,
    // 	max: 20,
    // 	message: "长度在 3 到 20 个字符",
    // 	trigger: "blur",
    // },
  ],
  unit_name: [{ required: true, message: "请输入单位名称", trigger: "blur" }],
  unit_address: [
    { required: true, message: "请输入单位地址", trigger: "blur" },
  ],
  project_address: [
    { required: true, message: "请输入项目地址", trigger: "blur" },
  ],
  // website: [
  // 	{ required: true, message: "请输入网络地址", trigger: "blur" },

  // ],
  director: [{ required: true, message: "请输入项目负责人", trigger: "blur" }],
  director_phone: [
    { required: true, message: "请输入项目负责人电话", trigger: "blur" },
  ],
  // fax: [
  // 	{ required: true, message: "请输入传真号码", trigger: "blur" },

  // ],
  // e_mail: [
  // 	{ required: true, message: "请输入邮箱地址", trigger: "blur" },
  // 	{
  // 		min: 3,
  // 		max: 20,
  // 		message: "长度在 3 到 20 个字符",
  // 		trigger: "blur",
  // 	},
  // ],

  contacts: [{ required: true, message: "请输入项目联系人", trigger: "blur" }], // 项目联系人
  phone: [{ required: true, message: "请输入项目联系人电话", trigger: "blur" }], // 联系人电话

  register_time: [
    { required: true, message: "请选择注册时间", trigger: "blur" },
  ],
  register_addr: [
    { required: true, message: "请输入注册所在区", trigger: "blur" },
  ],
  industry: [{ required: true, message: "请输入注册所在区", trigger: "blur" }],
  social_code: [
    { required: true, message: "请输入统一社会信用代码", trigger: "blur" },
  ],
  organization_code: [
    { required: true, message: "请输入组织机构代码", trigger: "blur" },
  ],
  industry_code: [{ required: true, message: "请输入行业码", trigger: "blur" }],
  prototype_type: [
    { required: true, message: "请输入所属行业", trigger: "blur" },
  ],
  proprietary: [
    { required: true, message: "请输入所有制性质", trigger: "blur" },
  ],
  registered_capital: [
    { required: true, message: "请输入注册资本", trigger: "blur" },
  ],
  paid_capital: [
    { required: true, message: "请输入实收资本", trigger: "blur" },
  ],
  national_tax_certificate: [
    { required: true, message: "请输入国税登记账号", trigger: "blur" },
  ],
  local_tax_certificate: [
    { required: true, message: "请输入地税登记账号", trigger: "blur" },
  ],
  business_no: [
    { required: true, message: "请输入营业执照号码", trigger: "blur" },
  ],
  business_range: [
    { required: true, message: "请输入公司经营范围", trigger: "blur" },
  ],
  major_products: [
    { required: true, message: "请输入公司产品服务", trigger: "blur" },
  ],
  unit_professional: [
    { required: true, message: "请输入公司专业资质", trigger: "blur" },
  ],

  technical_field: [
    {
      required: true,
      message: "请输入产品（服务）所属技术领域",
      trigger: "blur",
    },
  ],

  work_place: [
    { required: true, message: "请输入办公所在区", trigger: "blur" },
  ],
  product_place: [
    { required: true, message: "请输入生产所在区", trigger: "blur" },
  ],
  unit_website: [
    { required: true, message: "请输入单位网址", trigger: "blur" },
  ],
  unit_reg_capital: [
    { required: true, message: "请输入单位注册资本", trigger: "blur" },
  ],
  register_street: [
    { required: true, message: "请输入注册所在街道", trigger: "blur" },
  ],
  regist_type: [
    { required: true, message: "请输入登记注册类型", trigger: "blur" },
  ],
};

export const AgriculpersonInfoValidator = {
  contacts: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  mobile_phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  identity: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
  birth: [{ required: true, message: "请选择出生年月", trigger: "blur" }],
  highest_education: [
    { required: true, message: "请选择最高学历", trigger: "blur" },
  ],
  major: [{ required: true, message: "请输入专业", trigger: "blur" }],
  phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  resume: [{ required: true, message: "请输入个人简历", trigger: "blur" }],
};

export const HoldInfoValidator = {
  project_name: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  funding_unit: [
    { required: true, message: "请输入资助单位", trigger: "blur" },
  ],
  funding_year: [
    { required: true, message: "请输入受资助年份", trigger: "blur" },
  ],
  release_no: [{ required: true, message: "请输入下达文号", trigger: "blur" }],
  subsidy_amount: [
    { required: true, message: "请输入资助金额", trigger: "blur" },
  ],
  project_leader: [
    { required: true, message: "请输入项目负责人", trigger: "blur" },
  ],
  phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
  project_content: [
    { required: true, message: "请输入项目建设内容、规模", trigger: "blur" },
  ],
  project_years: [
    { required: true, message: "请输入项目实施年限", trigger: "blur" },
  ],
  accept: [
    { required: true, message: "请输入完成验收及时间", trigger: "blur" },
  ],
  //reasons: [{ required: true, message: "未完成验收原因（已完成不填）：", trigger: "blur" }],
};

export const ModernSummarize = {
  project_invest: [
    { required: true, message: "请输入项目总投资", trigger: "blur" },
  ],
  support: [
    { required: true, message: "请输入申请市财政资助额名", trigger: "blur" },
  ],
  bank_name: [
    { required: true, message: "请输入银行账户名称", trigger: "blur" },
  ],
  bank: [{ required: true, message: "请输入基本账户开户行", trigger: "blur" }],
  account: [{ required: true, message: "请输入开户账号", trigger: "blur" }],
  province: [{ required: true, message: "请输入省份", trigger: "blur" }],
  city: [{ required: true, message: "请输入城市", trigger: "blur" }],
  area: [{ required: true, message: "请输入地区", trigger: "blur" }],
  sp_address: [{ required: true, message: "请输入具体地址", trigger: "blur" }],

  act_investment: [
    { required: true, message: "请输入实际投入资金", trigger: "blur" },
  ],
  com_rate: [{ required: true, message: "请输入建设完成率", trigger: "blur" }],
  eco_indi: [{ required: true, message: "请输入经济指标", trigger: "blur" }],
  other: [{ required: true, message: "请输入其它", trigger: "blur" }],
  cons_basis: [
    { required: true, message: "请输入项目建设依据", trigger: "blur" },
  ],
  total_invest: [
    { required: true, message: "请输入项目总投资额", trigger: "blur" },
  ],
  state_funding: [
    { required: true, message: "请输入已获国家资助额", trigger: "blur" },
  ],
  city_support: [
    { required: true, message: "请输入申请市财政资助额", trigger: "blur" },
  ],
};

export const ModernUnitEmpForm = {
  legal_name: [
    { required: true, message: "请输入法定代表人姓名", trigger: "blur" },
  ],
  education: [
    { required: true, message: "请输入法定代表人学历", trigger: "blur" },
  ],
  mobile_phone: [
    { required: true, message: "请输入移动电话", trigger: "blur" },
  ],
  identity: [{ required: true, message: "请输入身份证号", trigger: "blur" }],
  employees_num: [
    { required: true, message: "请输入从业人员总数", trigger: "blur" },
  ],
  female_workerss_num: [
    { required: true, message: "请输入女员工数量", trigger: "blur" },
  ],
  overseas_num: [
    { required: true, message: "请输入留学归国数量", trigger: "blur" },
  ],
  social_security_num: [
    { required: true, message: "参加社保数量请输入", trigger: "blur" },
  ],
  foreign_experts_num: [
    { required: true, message: "请输入外籍专家人数", trigger: "blur" },
  ],
  graduate_num: [
    { required: true, message: "请输入高校毕业生数量", trigger: "blur" },
  ],
  // num_1: [{ required: true, message: "请输入", trigger: "blur" }],
  // num_2: [{ required: true, message: "请输入", trigger: "blur" }],
  // num_3: [{ required: true, message: "请输入", trigger: "blur" }],
  admin_num: [
    { required: true, message: "请输入行政管理人数", trigger: "blur" },
  ], // 行政管理
  market_num: [
    { required: true, message: "请输入市场营销人数", trigger: "blur" },
  ], //  市场营销人数
  develop_num: [
    { required: true, message: "请输入研发设计人数", trigger: "blur" },
  ], //  研发设计人数
  manuf_num: [
    { required: true, message: "请输入加工制造人数", trigger: "blur" },
  ], //  加工制造人数
  admin_other_num: [
    { required: true, message: "请输入其他从业人数", trigger: "blur" },
  ], //  其他从业人数

  doctoral_num: [
    { required: true, message: "请输入博士毕业人数", trigger: "blur" },
  ], //  博士毕业人数
  master_num: [
    { required: true, message: "请输入硕士毕业人数", trigger: "blur" },
  ], //  硕士毕业人数
  under_num: [
    { required: true, message: "请输入本科毕业人数", trigger: "blur" },
  ], //  本科毕业人数
  speci_num: [
    { required: true, message: "请输入专科毕业人数", trigger: "blur" },
  ], //  专科毕业人数
  edu_other_num: [
    { required: true, message: "请输入其他从业人数", trigger: "blur" },
  ], //  其他从业人数

  senior_num: [
    { required: true, message: "请输入正高级职称人数", trigger: "blur" },
  ], //  正高级职称人数
  deputy_num: [
    { required: true, message: "请输入副高级职称人数", trigger: "blur" },
  ], //  副高级职称人数
  middle_num: [
    { required: true, message: "请输入中级职称人数", trigger: "blur" },
  ], //  中级职称人数
  primary_num: [
    { required: true, message: "请输入初级职称人数", trigger: "blur" },
  ], //  初级职称人数
  title_other_num: [
    { required: true, message: "请输入其他从业人数", trigger: "blur" },
  ], //  其他从业人数
};

export const ModernProjectContent = {
  background: [
    { required: true, message: "请输入项目实施背景", trigger: "blur" },
  ],
  necessity: [
    { required: true, message: "请输入项目实施必要性", trigger: "blur" },
  ],
  content: [
    { required: true, message: "请输入项目实际完成建设内容", trigger: "blur" },
  ],
  index: [
    { required: true, message: "项目预期经济和技术指标", trigger: "blur" },
  ],
  social_results: [
    { required: true, message: "请输入项目社会效益", trigger: "blur" },
  ],
  other_explain: [
    {
      required: true,
      message: "请输入其他需要重点说明的情况",
      trigger: "blur",
    },
  ],
};

export const HightTechImplementValidator = {
  prj_background: [
    {
      required: true,
      message: "请输入简述项目实施的背景、必要性和意义",
      trigger: "blur",
    },
  ],
};

export const FishingAllInfoValidator = {
  task_name: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  unit_name: [{ required: true, message: "请输入单位名称", trigger: "blur" }], //单位名称
  legal_rpstative: [
    { required: true, message: "请输入法人代表", trigger: "blur" },
  ], //法人代表
  id_number: [{ required: true, message: "请输入身份证号", trigger: "blur" }], //身份证号
  postal_address: [
    { required: true, message: "请输入通讯地址", trigger: "blur" },
  ], //通讯地址
  contacts: [{ required: true, message: "请输入联系人", trigger: "blur" }], //联系人
  contact_number: [
    { required: true, message: "请输入联系电话", trigger: "blur" },
  ], //联系电话
  postal_code: [{ required: true, message: "请输入邮政编码", trigger: "blur" }], //邮政编码
  business_license: [
    { required: true, message: "请输入营业执照", trigger: "blur" },
  ], //营业执照
  credit_code: [
    { required: true, message: "请输入社会统一信用代码", trigger: "blur" },
  ], //社会统一信用代码
  deposit_bank: [
    { required: true, message: "请输入开户银行", trigger: "blur" },
  ], //开户银行
  account_number: [{ required: true, message: "请输入账号", trigger: "blur" }], //账号
  declare_name: [
    { required: true, message: "请输入申报资助项目名称", trigger: "blur" },
  ], //申报资助项目名称
  declare_id: [
    { required: true, message: "请输入申报资助项目id", trigger: "blur" },
  ], //申报资助项目id
  fish_base: [
    {
      required: true,
      message: "请输入远洋渔业项目生产基本情况",
      trigger: "blur",
    },
  ], //远洋渔业项目生产基本情况

  ship_name: [{ required: true, message: "请输入船名", trigger: "blur" }], //船名
  work_type: [{ required: true, message: "请输入作业方式", trigger: "blur" }], //作业方式
  gross_tonnage: [{ required: true, message: "请输入总吨位", trigger: "blur" }], //总吨位
  build_time: [
    { required: true, message: "请输入建造完工日期", trigger: "blur" },
  ], //建造完工日期
  state_funding: [
    { required: true, message: "请输入已获得国家资助资金", trigger: "blur" },
  ], //已获得国家资助资金
  fishing_quota: [
    { required: true, message: "请输入是否有入渔配额", trigger: "blur" },
  ], //是否有入渔配额
  ship_ctfte_id: [
    { required: true, message: "请输入船舶检验证书编号", trigger: "blur" },
  ], //船舶检验证书编号
  inal_ctfte_id: [
    { required: true, message: "请输入国籍证书编号", trigger: "blur" },
  ], //国籍证书编号
  owr_ctfte_id: [
    { required: true, message: "请输入所有权证书编号", trigger: "blur" },
  ], //所有权证书编号
  completed_cost: [
    { required: true, message: "请输入船舶竣工造价", trigger: "blur" },
  ], //船舶竣工造价
  apply_cost: [
    { required: true, message: "请输入申请资助资金", trigger: "blur" },
  ], //申请资助资金

  ship_name: [{ required: true, message: "请输入船名", trigger: "blur" }], //船名
  worker_type: [{ required: true, message: "请输入作业方式", trigger: "blur" }], //作业方式
  bud_finish_time: [
    { required: true, message: "请输入建造完工日期", trigger: "blur" },
  ], //建造完工日期
  tonnage: [{ required: true, message: "请输入吨位", trigger: "blur" }], //吨位
  fishing_quota: [
    { required: true, message: "请输入是否有入渔配额", trigger: "blur" },
  ], //是否有入渔配额
  inal_ctfte: [{ required: true, message: "请输入国籍证书", trigger: "blur" }], //国籍证书
  inal_ctfte_id: [
    { required: true, message: "请输入国籍证书编号", trigger: "blur" },
  ], //国籍证书编号
  owr_ctfte_id: [
    { required: true, message: "请输入所有权证书编号", trigger: "blur" },
  ], //所有权证书编号
  ship_ctfte_id: [
    { required: true, message: "请输入船舶检验证书编号", trigger: "blur" },
  ], //船舶检验证书编号
  ship_cost_id: [
    { required: true, message: "请输入船舶总投资", trigger: "blur" },
  ], //船舶总投资
  apply_cost: [
    { required: true, message: "请输入申请资助资金", trigger: "blur" },
  ], //申请资助资金
  //creator: "",//创建人

  sea_region: [
    { required: true, message: "请输入远洋渔业项目作业海域", trigger: "blur" },
  ], //远洋渔业项目作业海域
  rsous_use_cost: [
    {
      required: true,
      message: "请输入已交纳境外渔业资源使用费",
      trigger: "blur",
    },
  ], //已交纳境外渔业资源使用费
  inal_rsous_subsidy: [
    {
      required: true,
      message: "请输入已获得农业部国际渔业资源开发补助",
      trigger: "blur",
    },
  ], //已获得农业部国际渔业资源开发补助
  apply_cost: [
    { required: true, message: "请输入申请资助资金", trigger: "blur" },
  ], //申请资助资金
  //creator: "",//创建人

  sky_tunas_number: [
    { required: true, message: "请输入空运冰鲜金枪鱼数量", trigger: "blur" },
  ], //空运冰鲜金枪鱼数量
  sea_tunas_number: [
    { required: true, message: "请输入海运超低温金枪鱼数量", trigger: "blur" },
  ], //海运超低温金枪鱼数量
  other_fish_number: [
    { required: true, message: "请输入其他鱼类数量", trigger: "blur" },
  ], //其他鱼类数量
  country_cost: [
    { required: true, message: "请输入已获得国家资助资金", trigger: "blur" },
  ], //已获得国家资助资金
  appaly_cost: [
    { required: true, message: "请输入申请资助资金", trigger: "blur" },
  ], //申请资助资金
  //creator: "",//创建人

  cold_unit: [
    { required: true, message: "请输入冷链物流项目地址", trigger: "blur" },
  ], //冷链物流项目地址
  all_cold_cost: [
    { required: true, message: "请输入冷链物流项目地址", trigger: "blur" },
  ], //冷链物流项目地址--项目总投资
  low_tpte_unit: [
    { required: true, message: "请输入超低温冷库地址", trigger: "blur" },
  ], //超低温冷库地址
  all_low_cost: [
    { required: true, message: "请输入超低温冷库地址", trigger: "blur" },
  ], //超低温冷库地址--项目总投资
  abroad_unit: [
    { required: true, message: "请输入境外远洋渔业基地地址", trigger: "blur" },
  ], //境外远洋渔业基地地址
  agriculture_cost: [
    { required: true, message: "请输入已获得农业部资助", trigger: "blur" },
  ], //已获得农业部资助
  appaly_cost: [
    { required: true, message: "请输入申请资助资金", trigger: "blur" },
  ], //申请资助资金
};

export const InancialValidator = {
  business_income: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  main_business_income: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  high_tech_income: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  main_income_rate: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  total_exports: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  high_tech_exports: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  nterprise_added: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  wages: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  depreciation: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  profit: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  main_business_profit: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  main_business_rate: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  taxes_payable: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  income_tax: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  personal_tax: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  value_added_tax: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  turnover: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  other_taxes: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  actual_pref_taxes: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  income_tax_pref: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  value_added_pref: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  business_tax_pref: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  other_pref: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
  total_assets: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  total_net_cash: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  total_liabilities: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  liability_ratio: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  fixed_assets: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  investment_amount: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  technology_inv: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  government_loan: [
    { required: true, message: "请输入项目名称", trigger: "blur" },
  ],
  overdue: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
};

export const HighTeamValidator = {
  prj_name: [{ required: true, message: "请输入项目名称", trigger: "blur" }], //项目名称
  prj_time: [{ required: true, message: "请选择起始时间", trigger: "blur" }], //起始时间
  industry: [{ required: true, message: "请输入项目名称", trigger: "blur" }], //所属产业
  subfield: [
    { required: true, message: "请输入所属产业子领域", trigger: "blur" },
  ], //所属产业子领域
  partici_num: [
    { required: true, message: "请输入项目组总参与人数", trigger: "blur" },
  ], //项目组总参与人数
  doctor_num: [{ required: true, message: "请输入博士人数", trigger: "blur" }], //博士（人）
  master_num: [{ required: true, message: "请输入硕士", trigger: "blur" }], //硕士（人）
  research_num: [
    { required: true, message: "请输入研发人员", trigger: "blur" },
  ], //研发人员（人）
  graduate_num: [{ required: true, message: "请输入本科", trigger: "blur" }], //本科（人）
  other_num: [{ required: true, message: "请输入本科以下", trigger: "blur" }], //本科以下（人）
  admin_num: [{ required: true, message: "请输入管理人员", trigger: "blur" }], //管理人员（人）
  prj_work: [
    { required: true, message: "请输入项目总工作量", trigger: "blur" },
  ], //项目总工作量（月）
  overseas_sponsor: [
    {
      required: true,
      message: "请输入企业是否由海外留学归来人员创办",
      trigger: "blur",
    },
  ], //企业是否由海外留学归来人员创办
  study_abroad: [
    { required: true, message: "请输入海外留学归来人数", trigger: "blur" },
  ], //海外留学归来人数（人）
  project_contact: [
    { required: true, message: "请输入项目联系人", trigger: "blur" },
  ], //项目联系人
  mobile_phone: [
    { required: true, message: "请输入移动电话", trigger: "blur" },
  ], //移动电话
  e_mail: [{ required: true, message: "请输入电子邮箱", trigger: "blur" }], //电子邮箱
  fax: [{ required: true, message: "请输入传真", trigger: "blur" }], //传真
  birth: [{ required: true, message: "请选择出生年月", trigger: "blur" }], //出生年月
  title: [{ required: true, message: "请输入职称", trigger: "blur" }], //职称
  mobile: [{ required: true, message: "请输入移动电话", trigger: "blur" }], //移动电话
  education: [{ required: true, message: "请输入最高学历", trigger: "blur" }], //最高学历
  major: [{ required: true, message: "请输入专业", trigger: "blur" }], //专业
  identity: [{ required: true, message: "请输入身份证号", trigger: "blur" }], //身份证号
  member: [{ required: true, message: "请输入姓名", trigger: "blur" }], //姓名
  position: [{ required: true, message: "请输入单位及职务", trigger: "blur" }], //单位及职务
  autograph: [{ required: true, message: "请输入签名", trigger: "blur" }], //签名
  undertake: [{ required: true, message: "请输入承担任务", trigger: "blur" }], //承担任务
  workload: [{ required: true, message: "请输入承担工作量", trigger: "blur" }], //承担工作量
  resume: [
    {
      required: true,
      message: "请输入工作简历、主要论文、项目、获奖及专利等",
      trigger: "blur",
    },
  ], //工作简历、主要论文、项目、获奖及专利等
};

export const ProjectBenefitVaild = {
  prj_expression: [
    {
      required: true,
      message: "请输入项目预期成果的表现形式",
      trigger: "blur",
    },
  ],
  employment_num: [
    {
      required: true,
      message: "请输入项目执行期内新增的就业人数",
      trigger: "blur",
    },
  ],
  talents_num: [
    {
      required: true,
      message: "请输入项目执行期内培养的人才数",
      trigger: "blur",
    },
  ],
  revenue: [
    {
      required: true,
      message: "请输入项目执行期内产生的累计净利润/累计产品销售收入",
      trigger: "blur",
    },
  ],
  investment: [
    {
      required: true,
      message: "请输入项目执行期内产生的累计纳税额/带动的资金投入",
      trigger: "blur",
    },
  ],
  patent_num: [
    {
      required: true,
      message: "请输入项目执行期内申请的专利数",
      trigger: "blur",
    },
  ],
  paper_num: [
    {
      required: true,
      message: "请输入项目执行期内发表的论文数",
      trigger: "blur",
    },
  ],
  prj_index: [
    {
      required: true,
      message: "请输入项目执行期内实现的主要经济指标、学术指标、技术指标",
      trigger: "blur",
    },
  ],
  prj_goal: [
    { required: true, message: "请输入项目预期目标", trigger: "blur" },
  ],
};
