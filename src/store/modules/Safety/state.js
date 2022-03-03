export default {
  task_name: "", //项目名称
  userName: "", //姓名
  userTaskId: "", //task_id
  isDisabledData: false,
  imageIds: [],
  isDetailsContent: true,
  uploadUrlData: [
    { title: "审计报告", data: [] },
    { title: "法人代表人或主要负责人身份证复印件", data: [] },
    { title: "申报单位主体资格材料（含工商登记营业执照等）", data: [] },
    { title: "税务部门提供的单位上年度完税证明复印件", data: [] },
    {
      title: "上年度的财务报告或者通过审查的事业单位财务决算报表复印件",
      data: [],
    },
    {
      title: "必要的生产、经营许可及认证文件；场地所有权或使用权证明复印件",
      data: [],
    },
    {
      title:
        "项目建设的实施方案、预（决）算报告、项目投资证明材料等（合同、发票、银行汇款凭证等）",
      data: [],
    },
    { title: "其他相关证明材料", data: [] },
    {
      title:
        "往年已获农产品质量安全专项资金（渔业类）资助且第二年又申报项目资助的项目申报单位，还应当提交项目绩效自评报告或者注册会计师鉴证结果",
      data: [],
    },
  ],
  SafetyData: {
    safetyCompany: {
      unit_name: "", // 单位名称
      unit_address: "", // 单位地址
      unit_reg_capital: "", // 单位注册资本
      register_time: "", // 注册时间
      register_addr: "", // 注册所在地
      register_street: "", // 注册所在街道
      organization_code: "", // 组织机构代码
      regist_type: "", // 登记注册类型
      national_tax_certificate: "", // 国税登记证号
      local_tax_certificate: "", // 地税登记证号
      business_no: "", // 营业执照注册号
      major_products: "", // 主要产品或服务
      technical_field: "", // 技术领域
      work_place: "", // 办公所在区
      product_place: "", // 生产所在区
      unit_professional: "", // 单位资质
      unit_website: "", // 单位网址
      legal_name: "", // 法定代表人姓名
      education: "", // 法定代表人学历
      mobile_phone: "", // 移动电话
      identity: "", // 身份证号
      employees_num: "", // 从业人员总数
      female_workerss_num: "", // 女员工数量
      overseas_num: "", // 留学归国数量
      social_security_num: "", // 参加社保数量
      foreign_experts_num: "", // 外籍专家人数
      graduate_num: "", // 高效毕业生数量
      num_1: "", // 行政管理∕市场营销∕研发设计∕加工制造∕其他从业人数
      num_2: "", // 博士毕业∕硕士毕业∕本科毕业∕大专毕业∕其他从业人数
      num_3: "", // 高级职称∕中级职称∕初级职称∕其他从业人数
      admin_num: "", // 行政管理人数
      market_num: "", // 市场营销人数
      develop_num: "", // 研发设计人数
      manuf_num: "", // 加工制造人数
      admin_other_num: "", // 其他从业人数
      doctoral_num: "", // 博士毕业人数
      master_num: "", // 硕士毕业人数
      under_num: "", // 本科毕业人数
      speci_num: "", // 专科毕业人数
      edu_other_num: "", // 其他从业人数
      senior_num: "", // 正高级职称人数
      deputy_num: "", // 副高级职称人数
      middle_num: "", // 中级职称人数
      primary_num: "", // 初级职称人数
      social_code: "", // 统一社会信用代码
      director: "", // 项目负责人
      director_phone: "", // 移动电话
      fax: "", // 传真
      e_mail: "", // 邮箱
      project_address: "", // 项目地址
      base_info: "", // 项目承担单位基本情况
      creator: "", // 创建人
      create_time: "", // 创建时间
      modifier: "", // 修改人
      update_time: "", // 修改时间
    },
    safetyCauses: [
      {
        //task_id: "",
        total_revenue: "", //年度总收入
        financial_appr: "", //财政拨款额
        production_income: "", //生产经营活动收入
        science_income: "", //科技活动收入
        prov_sci_income: "", //部、省科技收入
        local_sci_income: "", //地方政府科技收入
        other_sci_income: "", //政府之外科技收入
        other_income: "", //其他收入
        rev_growth_rate: "", //年度总收入增长率
        annual_expenditure: "", //年度总支出
        production_expenditure: "", //生产经营活动支出
        science_expenditure: "", //科技活动支出
        other_expenditure: "", //其他支出
        total_assets: "", //年末资产总额
        fixed_assets: "", //年末固定资产原值
        sci_room_assets: "", //年末科研用房原值
        sci_equipment_assets: "", //年末科研设备原值
        othert_assets: "", //其他固定资产原值
        fixed_growth_rate: "", //固定资产增长率
        equipment_growth_rate: "", //科研设备资产增长率
        total_liabilities: "", //年末负债总额
        monetary_Fund: "", //年末货币资金金额
        borrowed_money: "", //年末借入款项金额
        //creator: "",//创建人
      },
      {
        //task_id: "",
        total_revenue: "", //年度总收入
        financial_appr: "", //财政拨款额
        production_income: "", //生产经营活动收入
        science_income: "", //科技活动收入
        prov_sci_income: "", //部、省科技收入
        local_sci_income: "", //地方政府科技收入
        other_sci_income: "", //政府之外科技收入
        other_income: "", //其他收入
        rev_growth_rate: "", //年度总收入增长率
        annual_expenditure: "", //年度总支出
        production_expenditure: "", //生产经营活动支出
        science_expenditure: "", //科技活动支出
        other_expenditure: "", //其他支出
        total_assets: "", //年末资产总额
        fixed_assets: "", //年末固定资产原值
        sci_room_assets: "", //年末科研用房原值
        sci_equipment_assets: "", //年末科研设备原值
        othert_assets: "", //其他固定资产原值
        fixed_growth_rate: "", //固定资产增长率
        equipment_growth_rate: "", //科研设备资产增长率
        total_liabilities: "", //年末负债总额
        monetary_Fund: "", //年末货币资金金额
        borrowed_money: "", //年末借入款项金额
        //creator: "",//创建人
      },
      {
        //task_id: "",
        total_revenue: "", //年度总收入
        financial_appr: "", //财政拨款额
        production_income: "", //生产经营活动收入
        science_income: "", //科技活动收入
        prov_sci_income: "", //部、省科技收入
        local_sci_income: "", //地方政府科技收入
        other_sci_income: "", //政府之外科技收入
        other_income: "", //其他收入
        rev_growth_rate: "", //年度总收入增长率
        annual_expenditure: "", //年度总支出
        production_expenditure: "", //生产经营活动支出
        science_expenditure: "", //科技活动支出
        other_expenditure: "", //其他支出
        total_assets: "", //年末资产总额
        fixed_assets: "", //年末固定资产原值
        sci_room_assets: "", //年末科研用房原值
        sci_equipment_assets: "", //年末科研设备原值
        othert_assets: "", //其他固定资产原值
        fixed_growth_rate: "", //固定资产增长率
        equipment_growth_rate: "", //科研设备资产增长率
        total_liabilities: "", //年末负债总额
        monetary_Fund: "", //年末货币资金金额
        borrowed_money: "", //年末借入款项金额
        //creator: "",//创建人
      },
    ],
    safetyFinances: [
      {
        //task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
        //creator: ""
      },
      {
        //task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
        //creator: ""
      },
      {
        //task_id: "",
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
        //creator: ""
      },
    ],
    safetyShareholders: [
      {
        // task_id: "",
        shareholder: "", //主要股东名称
        amount: "", //出资金额
        payer_type: "", //出资方式
        share_proportion: "", //股份比例(%)
        //creator: ""i
      },
    ],
    safetySupport: [
      {
        //task_id: '',
        project_name: "", //项目名称
        funding_unit: "", //资助单位
        funding_year: "", //受资助年份
        release_no: "", //下达文号
        subsidy_amount: "", //资助金额（万元）
        project_leader: "", //项目负责人
        phone: "", //联系电话
        project_content: "", //项目建设内容
        project_years: "", //项目实施年限
        accept: "", //是否完成验收及时间
        reasons: "", //未完成验收原因
        //creator: '',//创建人
        // create_time: "",
        // modifier: '',
        // update_time: ''
      },
    ],
    safetyImplement: {
      //task_id: "",//
      background: "", //项目实施背景
      necessity: "", //项目实施必要性
      content: "", //项目实际完成建设内容
      index: "", //项目预期经济和技术指标
      social_results: "", //项目社会效益
      other_explain: "", //其他需要重点说明的情况
      //creator: "",//创建人
    },
    safetyAbstract: {
      //task_id: "",//
      bank_name: "", //银行账户名称
      bank: "", //基本账户开户行
      account: "", //开户账号
      province: "", //省
      city: "", //市
      area: "", //区
      sp_address: "", //具体地址
      act_investment: "", //实际投入资金
      com_rate: "", //建设完成率
      eco_indi: "", //经济指标
      other: "", //其它
      cons_basis: "", //项目建设依据
      //creator: "",//
      // create_time: "",//
      // modifier: "",//
      // update_time: "",//
    },
    safetyInvestTotal: {
      project_invest: "",
      support: "",
    },
    safetyInvestment: [
      {
        //task_id: '',
        inv_type: "建筑工程类投资明细",
        //inv_type: '',
        // project_invest: '',
        //support: '',
        spending_type: "", //支出类别
        start_and_end: "", //起止时间
        content: "", //建成项目主要内容
        amount: "", //金额（万元）
        fixed_assets: "", //固定资产
        other_assets: "", //其他资产
        //creator: '', //创建人
        //create_time: '', //创建时间
        // modifier: '',
        // update_time: ''
      },
      {
        //task_id: '',
        //inv_type: '',
        inv_type: "生产设施建设类投资明细",
        // project_invest: '',
        //support: '',
        spending_type: "", //支出类别
        start_and_end: "", //起止时间
        content: "", //建成项目主要内容
        amount: "", //金额（万元）
        fixed_assets: "", //固定资产
        other_assets: "", //其他资产
        //creator: '', //创建人
        //create_time: '', //创建时间
        // modifier: '',
        // update_time: ''
      },
      {
        //task_id: '',
        //inv_type: '',
        inv_type: "仪器、设备类投资明细",
        // project_invest: '',
        //support: '',
        spending_type: "", //支出类别
        start_and_end: "", //起止时间
        content: "", //建成项目主要内容
        amount: "", //金额（万元）
        fixed_assets: "", //固定资产
        other_assets: "", //其他资产
        //creator: '', //创建人
        //create_time: '', //创建时间
        // modifier: '',
        // update_time: ''
      },
    ],
    safetyEquipment: [
      {
        //task_id: "",
        equipment_name: "", //设备名称
        specifications: "", //规格型号
        quantity: "", //数量/单位
        price: "", //单价
        amount: "", //金额合计
        storage_loc: "", //设备安装/存放地点
        //total_quantity: "",//合计-数量/单位
        //total_price: "",//合计-单价
        //total_amount: "",//合计-金额合计
        //creator: "",//创建人
        //create_time: "",//创建时间
        // modifier: "",//修改人
        // update_time: "",//修改时间
      },
    ],
    basic_info: {
      //creator: "",
      //task_id: "",
      basic_info: "",
    },
  },
};
