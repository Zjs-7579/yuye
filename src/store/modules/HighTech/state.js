export default {
  userName: "", //姓名
  userTaskId: "", //task_id
  isDisabledData: false, //判断用户查看是否可写
  //isCountableUpload: true,//判断贷款中的下载附件是否显示
  //isDetailsContent: true,//判断detailsInfo的锚点是否显示
  //用户上传的附件
  uploadUrlData: [
    // {title: '项目申请书', data:[]},
    // {title: "承诺书", data:[]},
    // {title: "企业法定代表人或主要负责人及身份证复印件", data:[]},
    // {title: "近3个年度的会计报表：资产负债表、损益表、现金流量表", data:[]},
    // {title: "税务部门提供的单位上年度完税证明复印件", data:[]},
    // {title: "企业与银行签订的贷款合同和有关银行贷款有效凭据(银行拨款单)复印件", data:[]},
    // {title: "企业归还银行贷款利息清单", data:[]}
  ],
  HighTechData: {
    //基本信息
    techCompany: {
      //task_id: "",
      task_name: "", //项目名称
      unit_name: "", //单位名称
      unit_address: "", //单位地址

      project_address: "", // 项目地址
      director: "", // 项目负责人
      director_phone: "", // 负责人电话
      contacts: "", // 项目联系人
      phone: "", // 联系人电话
      e_mail: "", // 邮箱
      fax: "", // 传真
      //website:"",// 单位网址

      unit_reg_capital: "", //单位注册资本
      register_time: "", //注册时间
      register_addr: "", //注册所在地
      register_street: "", //注册所在街道
      social_code: "", //统一社会信用代码
      //organization_code: "", //组织机构代码
      regist_type: "", // 登记注册类型
      //national_tax_certificate: "", //国税登记证号
      //local_tax_certificate: "", //地税
      //business_no: "", //营业执照注册号
      major_products: "", //主要产品或服务
      technical_field: "", //技术领域
      work_place: "", //办公所在区
      product_place: "", //生产所在区
      unit_professional: "", //单位资质
      unit_website: "", //单位网址
      //basic_info: "", //项目承担单位基本情况
      legal_name: "", //法定代表人姓名
      education: "", //法定代表人学历
      mobile_phone: "", //移动电话
      identity: "", //身份证号
      employees_num: "", //从业人员总数
      female_workerss_num: "", //女员工数量
      overseas_num: "", //留学归国数量
      social_security_num: "", //参加社保数量
      foreign_experts_num: "", //外籍专家人数
      graduate_num: "", //高效毕业生数量
      //numOne: [10,4,5,5,5], //行政管理∕市场营销∕研发设计∕加工制造∕其他从业人数
      admin_num: "", // 行政管理
      market_num: "", //  市场营销人数
      develop_num: "", //  研发设计人数
      manuf_num: "", //  加工制造人数
      admin_other_num: "", //  其他从业人数

      doctoral_num: "", //  博士毕业人数
      master_num: "", //  硕士毕业人数
      under_num: "", //  本科毕业人数
      speci_num: "", //  专科毕业人数
      edu_other_num: "", //  其他从业人数

      senior_num: "", //  正高级职称人数
      deputy_num: "", //  副高级职称人数
      middle_num: "", //  中级职称人数
      primary_num: "", //  初级职称人数
      title_other_num: "", //  其他从业人数
      //numTwo: [10,4,5,5,5], //博士毕业∕硕士毕业∕本科毕业∕大专毕业∕其他从业人数
      //numThree: [10,4,5,5,5], //高级职称∕中级职称∕初级职称∕其他从业人数
      //creator: ""
    },
    //出资比例
    techShareholders: [
      {
        //task_id: "",
        shareholder: "", //主要股东名称
        amount: "", //出资金额
        payer_type: "", //出资方式
        share_proportion: "", //股份比例(%)
        //creator: ""
      },
    ],
    //企业三年
    techFinances: [
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
    //事业三年
    techCauses: [
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
        other_assets: "", //其他固定资产原值
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
    //科研三年
    techScientific: [
      {
        //task_id:"",// 任务id,
        pro_year: "", // 财务年份,
        patent_num: "", //累计发明专利申请数,
        practical_num: "", // 累计实用新型申请数,
        appear_num: "", // 累计外观设计申请数,
        invention_num: "", // 累计拥有有效发明专利授权数,
        utility_num: "", // 累计拥有有效实用新型授权数,
        design_num: "", // 累计拥有有效外观设计授权数,
        paper_num: "", // 累计发表论文数,
        technological_num: "", //T 累计出版科技著作数,
        software_num: "", // 累计拥有软件著作权数,
        ic_num: "", //累计拥有IC布图版权数,
        trademark_num: "", // 累计拥有注册商标数,
        skill_num: "", // 累计参编技术标准数（国际/国家/行业）,
        botany_num: "", // 累计发现植物新品种数,
        drug_num: "", // 累计获取新药（医药、农药、兽药）证书数,
        prize_num: "", // 累计科技奖项（国家级/省级/市级）,
        laboratory_num: "", // 累计重点实验室数量（国家级/省级/市级）,
        center_num: "", // 累计工程中心数量（国家级/省级/市级）,
        project_num: "", // 累计项目数量（国家级/省级/市级）,
        country_support: "", // 累计获得国家资助经费金额（万元）,
        province_support: "", // 累计获得省级资助经费金额（万元）,
        city_support: "", //累计获得市级资助经费金额（万元）,
      },
      {
        //task_id:"",// 任务id,
        pro_year: "", // 财务年份,
        patent_num: "", //累计发明专利申请数,
        practical_num: "", // 累计实用新型申请数,
        appear_num: "", // 累计外观设计申请数,
        invention_num: "", // 累计拥有有效发明专利授权数,
        utility_num: "", // 累计拥有有效实用新型授权数,
        design_num: "", // 累计拥有有效外观设计授权数,
        paper_num: "", // 累计发表论文数,
        technological_num: "", //T 累计出版科技著作数,
        software_num: "", // 累计拥有软件著作权数,
        ic_num: "", //累计拥有IC布图版权数,
        trademark_num: "", // 累计拥有注册商标数,
        skill_num: "", // 累计参编技术标准数（国际/国家/行业）,
        botany_num: "", // 累计发现植物新品种数,
        drug_num: "", // 累计获取新药（医药、农药、兽药）证书数,
        prize_num: "", // 累计科技奖项（国家级/省级/市级）,
        laboratory_num: "", // 累计重点实验室数量（国家级/省级/市级）,
        center_num: "", // 累计工程中心数量（国家级/省级/市级）,
        project_num: "", // 累计项目数量（国家级/省级/市级）,
        country_support: "", // 累计获得国家资助经费金额（万元）,
        province_support: "", // 累计获得省级资助经费金额（万元）,
        city_support: "", //累计获得市级资助经费金额（万元）,
      },
      {
        //task_id:"",// 任务id,
        pro_year: "", // 财务年份,
        patent_num: "", //累计发明专利申请数,
        practical_num: "", // 累计实用新型申请数,
        appear_num: "", // 累计外观设计申请数,
        invention_num: "", // 累计拥有有效发明专利授权数,
        utility_num: "", // 累计拥有有效实用新型授权数,
        design_num: "", // 累计拥有有效外观设计授权数,
        paper_num: "", // 累计发表论文数,
        technological_num: "", //T 累计出版科技著作数,
        software_num: "", // 累计拥有软件著作权数,
        ic_num: "", //累计拥有IC布图版权数,
        trademark_num: "", // 累计拥有注册商标数,
        skill_num: "", // 累计参编技术标准数（国际/国家/行业）,
        botany_num: "", // 累计发现植物新品种数,
        drug_num: "", // 累计获取新药（医药、农药、兽药）证书数,
        prize_num: "", // 累计科技奖项（国家级/省级/市级）,
        laboratory_num: "", // 累计重点实验室数量（国家级/省级/市级）,
        center_num: "", // 累计工程中心数量（国家级/省级/市级）,
        project_num: "", // 累计项目数量（国家级/省级/市级）,
        country_support: "", // 累计获得国家资助经费金额（万元）,
        province_support: "", // 累计获得省级资助经费金额（万元）,
        city_support: "", //累计获得市级资助经费金额（万元）,
      },
    ],
    //支持三年
    techSupport: [
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

    //团队基本情况
    techTeam: {
      prj_name: "", //项目名称
      prj_time: "", //起始时间
      industry: "", //所属产业
      subfield: "", //所属产业子领域
      partici_num: "", //项目组总参与人数
      doctor_num: "", //博士（人）
      master_num: "", //硕士（人）
      research_num: "", //研发人员（人）
      graduate_num: "", //本科（人）
      other_num: "", //本科以下（人）
      admin_num: "", //管理人员（人）
      prj_work: "", //项目总工作量（月）
      overseas_sponsor: "", //企业是否由海外留学归来人员创办
      study_abroad: "", //海外留学归来人数（人）
      project_contact: "", //项目联系人
      mobile_phone: "", //移动电话
      e_mail: "", //电子邮箱
      fax: "", //传真
    },

    //团队负责人
    techMemberList: [
      {
        birth: "", //出生年月
        title: "", //职称
        mobile: "", //移动电话
        education: "", //最高学历
        major: "", //专业
        identity: "", //身份证号
        member: "", //姓名
        position: "", //单位及职务
        autograph: "", //签名
        undertake: "", //承担任务
        workload: "", //承担工作量
        resume: "", //工作简历、主要论文、项目、获奖及专利等
      },
    ],
    //项目承担单位基本情况
    basic_info: {
      //creator: "",
      //task_id: "",
      basic_info: "",
    },
    //项目背景意义
    techImplement: {
      //task_id: "",//
      background: "", //项目实施背景
      necessity: "", //项目实施必要性
      content: "", //项目实际完成建设内容
      my_index: "", //项目预期经济和技术指标
      social_results: "", //项目社会效益
      other_explain: "", //其他需要重点说明的情况

      prj_background: "", //项目实施背景及意义
      construction: "", //项目建设内容,
      basis_condition: "", //项目实施基础和条件,
      //creator: "",//创建人
    },
    //项目实施进度与管理
    techStage: [
      {
        prj_stage: "", // 阶段
        stage: "",
        stage_start: "", //起始时间
        stage_end: "", //结束时间
        stage_target: "", //阶段目标
        stage_content: "", //实施内容
      },
    ],
    //项目效益
    techBenefit: {
      //task_id: "",// 任务id,
      prj_expression: "", // 项目预期成果的表现形式,
      employment_num: "", // 项目执行期内新增的就业人数,
      talents_num: "", // 项目执行期内培养的人才数（博士/硕士/工程师/技术工人）,
      revenue: "", // 项目执行期内产生的累计净利润/累计产品销售收入（万元）,
      investment: "", // 项目执行期内产生的累计纳税额/带动的资金投入（万元）,
      patent_num: "", // 项目执行期内申请的专利数（发明专利/实用新型/外观设计）,
      paper_num: "", //  项目执行期内发表的论文数（论文总数/SCI检索数/EI检索数）,
      prj_index: "", //项目执行期内实现的主要经济指标、学术指标、技术指标,
      prj_goal: "", // 项目预期目标,
    },
    //项目经费
    techFunds: [
      {
        total_invest: "", //项目总投资额
        state_funding: "", //已获国家资助额
        city_support: "", //申请市财政资助额
        funds_type: "apply", //'1.市财政资助申请额(apply);2.申请单位自筹经费(apply);3.小计(subtotal)',

        total_expendt: "", //'合计',

        con_invest: "", //'建设投资',
        appliances: "", //'(1)设备及工器具的购置',
        reform: "", //'(2)设备改造与租赁费',
        eng_cost: "", //'(3)建筑工程费（生产运营场地基础设施建设）',
        other_build: "", //'(4)形成固定资产的其他建设投资',
        auto_expenses: "", //'自主研发费',
        material_cost: "", //'(1)材料费',
        test_cost: "", //'(2)测试化验加工费',
        travel_cost: "", //'(3)差旅费',
        meeting_cost: "", //'(4)会议费',
        national_cost: "", //'(5)国际合作与交流费',
        property_cost: "", //'(6)出版/文献/信息传播/知识产权费',
        labor_cost: "", //'(7)劳务费',
        expert_cost: "", //'(8)专家咨询费',
        research_cost: "", //'(9)研发人员费',
        indirect_cost: "", //'(10)间接费用',
        entrust_cost: "", //'委托开发费',
        working_capital: "", //'流动资金',
        fuel_cost: "", //'(1)燃料动力费',
        network_cost: "", //'(2)市场网络建设费',
        activity_cost: "", //'(3)推广活动组织费',
        field_cost: "", //'(4)生产运营场地的租赁费',
        interest: "", //'(5)建设期利息',
        other_cost: "", //'(6)其他',
      },
      {
        total_invest: "", //项目总投资额
        state_funding: "", //已获国家资助额
        city_support: "", //申请市财政资助额
        funds_type: "raise", //'1.市财政资助申请额(apply);2.申请单位自筹经费(raise);3.小计(subtotal)',

        total_expendt: "", //'合计',
        con_invest: "", //'建设投资',
        appliances: "", //'(1)设备及工器具的购置',
        reform: "", //'(2)设备改造与租赁费',
        eng_cost: "", //'(3)建筑工程费（生产运营场地基础设施建设）',
        other_build: "", //'(4)形成固定资产的其他建设投资',
        auto_expenses: "", //'自主研发费',
        material_cost: "", //'(1)材料费',
        test_cost: "", //'(2)测试化验加工费',
        travel_cost: "", //'(3)差旅费',
        meeting_cost: "", //'(4)会议费',
        national_cost: "", //'(5)国际合作与交流费',
        property_cost: "", //'(6)出版/文献/信息传播/知识产权费',
        labor_cost: "", //'(7)劳务费',
        expert_cost: "", //'(8)专家咨询费',
        research_cost: "", //'(9)研发人员费',
        indirect_cost: "", //'(10)间接费用',
        entrust_cost: "", //'委托开发费',
        working_capital: "", //'流动资金',
        fuel_cost: "", //'(1)燃料动力费',
        network_cost: "", //'(2)市场网络建设费',
        activity_cost: "", //'(3)推广活动组织费',
        field_cost: "", //'(4)生产运营场地的租赁费',
        interest: "", //'(5)建设期利息',
        other_cost: "", //'(6)其他',
      },
      {
        total_invest: "", //项目总投资额
        state_funding: "", //已获国家资助额
        city_support: "", //申请市财政资助额
        funds_type: "subtotal", //'1.市财政资助申请额(apply);2.申请单位自筹经费(raise);3.小计(subtotal)',

        total_expendt: "", //'合计',
        con_invest: "", //'建设投资',
        appliances: "", //'(1)设备及工器具的购置',
        reform: "", //'(2)设备改造与租赁费',
        eng_cost: "", //'(3)建筑工程费（生产运营场地基础设施建设）',
        other_build: "", //'(4)形成固定资产的其他建设投资',
        auto_expenses: "", //'自主研发费',
        material_cost: "", //'(1)材料费',
        test_cost: "", //'(2)测试化验加工费',
        travel_cost: "", //'(3)差旅费',
        meeting_cost: "", //'(4)会议费',
        national_cost: "", //'(5)国际合作与交流费',
        property_cost: "", //'(6)出版/文献/信息传播/知识产权费',
        labor_cost: "", //'(7)劳务费',
        expert_cost: "", //'(8)专家咨询费',
        research_cost: "", //'(9)研发人员费',
        indirect_cost: "", //'(10)间接费用',
        entrust_cost: "", //'委托开发费',
        working_capital: "", //'流动资金',
        fuel_cost: "", //'(1)燃料动力费',
        network_cost: "", //'(2)市场网络建设费',
        activity_cost: "", //'(3)推广活动组织费',
        field_cost: "", //'(4)生产运营场地的租赁费',
        interest: "", //'(5)建设期利息',
        other_cost: "", //'(6)其他',
      },
    ],
    //项目经费
    techLease: [
      {
        //task_id: "",//'任务id',
        instruments: "", //'仪器设备名称',
        specification: "", //'规格型号',
        quantity: "", //'数量/单位',
        price: "", //'单价',
        amount: "", //'金额合计',
        purpose: "", //'用途/功能描述',
        // creator: "",//'创建人',
        // create_time: "",//'创建时间',
        // modifier: "",//'修改人',
        // update_time: "",//'修改时间',
      },
    ],
    //项目总投资情况
    techInvestTotal: {
      project_invest: "",
      support: "",
    },
    //项目投资情况
    techInvestment: [
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
    //项目投资情况
    techEquipment: [
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
    //摘要
    techAbstract: {
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
  },
};
